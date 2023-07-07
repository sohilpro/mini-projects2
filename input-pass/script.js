const showHiddenInput = (inputOverlay, inputPass, inputIcon) => {
  const overlay = document.getElementById(inputOverlay),
    input = document.getElementById(inputPass),
    iconEye = document.getElementById(inputIcon);

  iconEye.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      iconEye.classList.add("bx-show");
    } else {
      input.type = "password";
      iconEye.classList.remove("bx-show");
    }

    overlay.classList.toggle("overlay-content");
  });
};

showHiddenInput("input-overlay", "input-pass", "input-icon");