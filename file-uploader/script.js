const dragArea = document.querySelector(".drag-container");
const btnBrowseFile = dragArea.querySelector("button");
const inputBrowseFile = dragArea.querySelector("input");
const textH1 = dragArea.querySelector("h1");

let file;

btnBrowseFile.onclick = () => {
  inputBrowseFile.click();
};

inputBrowseFile.addEventListener("change", (e) => {
  file = e.target.files[0];
  dragArea.classList.add("active");
  dragArea.classList.remove("opacity");
  showFile();
});

dragArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  textH1.textContent = "Release to upload Image";
  dragArea.classList.add("active");
  dragArea.classList.add("opacity");
});

dragArea.addEventListener("drop", (e) => {
  e.preventDefault();
  file = e.dataTransfer.files[0];
  showFile();
});

dragArea.addEventListener("dragleave", (e) => {
  textH1.textContent = "Drag & Drop Image";
  dragArea.classList.remove("active");
  dragArea.classList.remove("opacity");
});

function showFile() {
  const fileType = file.type;
  const validImage = ["image/png", "image/jpeg"];
  if (validImage.includes(fileType)) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      let fileUrl = fileReader.result;
      const imgTag = `<img src="${fileUrl}" />`;
      dragArea.innerHTML = imgTag;
      dragArea.classList.remove("opacity");
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This File is not Image");
    dragArea.classList.remove("active");
    dragArea.classList.remove("opacity");
  }
}