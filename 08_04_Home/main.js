const canvas = document.getElementById("myCanvas");
console.log(canvas);
canvas.width = "1000";
canvas.height = "600";
const ctx = canvas.getContext("2d");

function drawStar(cx, cy, spikes, outerRadius, innerRadius, stroke, fill) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  ctx.strokeSyle = "#000";
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (i = 0; i <= spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = stroke;
  ctx.stroke();
  ctx.fillStyle = fill;
  ctx.fill();
}

let grenStar = drawStar(75, 100, 5, 30, 15, "grey", "green");
let redStar = drawStar(175, 100, 12, 30, 10, "red", "red");
let blueStar = drawStar(75, 200, 6, 30, 15, "grey", "blue");
let yellowStar = drawStar(175, 200, 20, 30, 25, "grey", "yellow");
