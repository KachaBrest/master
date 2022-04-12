const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 800;

function draw(x, y) {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y + 50);
    ctx.lineTo(x - 50, y + 50);
    ctx.fill();
  }
}

function mushroom(x, y) {
    
    var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "orange";
    
    // шляпка
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.beginPath();
    
    ctx.arc(75,75,35,0,Math.PI,true);  // рот (по часовой стрелке)
    ctx.lineTo(110,75);
    ctx.moveTo(95,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // Левый глаз
    ctx.moveTo(95,65);
    ctx.arc(75,50,5,0,Math.PI*2,true);  // Левый глаз
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // Правый глаз
    ctx.moveTo(95,65);
    ctx.stroke();
    //ножка
    ctx.beginPath();
    ctx.moveTo(65, 75);
    ctx.lineTo(65, 110);
    ctx.lineTo(85, 110);
    ctx.lineTo(85, 75);
    ctx.fill();

  }
}

mushroom(100,300)

function pen(x, y) {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "saddlebrown";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 20, y);
    ctx.lineTo(x + 20, y + 50);
    ctx.lineTo(x, y + 50);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 20, y);
    ctx.lineTo(x + 20, y + 50);
    ctx.lineTo(x, y + 50);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function paint(x,y) {
  draw(x, y);
  draw(x, (y+40));
  draw(x, (y+80));
  pen((x-10), (y+130));
}

// for (let i = 1; i <= 18; i++) {
//     let x = Math.random()*800;
    
//     let y = Math.random()*300;
    
//     paint(x,y);
//     console.log(paint);
// }

