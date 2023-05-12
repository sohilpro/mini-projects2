const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

// draw initial image
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 500, 500);
ctx.fillStyle = "blue";
ctx.fillRect(150, 40, 100, 100);

// somewhere to save our canvas image later
let savedCanvas = null;

// some places to store the line data
let startPos = { x: 0, y: 0 };
let endPos = { x: 0, y: 0 };
let drawing = false;

// function to draw the preview and final line
const drawLine = (start, end, color) => {
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.strokeStyle = color;
  ctx.stroke();
};

const onDown = (e) => {
  // Save the current image before drawing the preview line
  savedCanvas = ctx.getImageData(0, 0, 500, 500);
  drawing = true;
  startPos = { x: e.clientX, y: e.clientY };
};

const onMove = (e) => {
  if (drawing) {
    // Restore the canvas from the save (to remove the old preview line)
    ctx.putImageData(savedCanvas, 0, 0);
    endPos = { x: e.clientX, y: e.clientY };
    // draw a new preview line
    drawLine(startPos, endPos, "red");
  }
};

const onUp = (e) => {
  drawing = false;
  // restore save to clear preview line
  ctx.putImageData(savedCanvas, 0, 0);
  //  draw final black line
  drawLine(startPos, endPos, "black");
};

canvas.addEventListener("mousedown", onDown);
canvas.addEventListener("mousemove", onMove);
window.addEventListener("mouseup", onUp);
