const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const circle = {
  x: 100,
  y: 100,
  size: 100,
  color: "black",
  dx: 5,
  dy: 4,
};
const circleSecond = {
  x: 150,
  y: 150,
  size: 50,
  dx: 5,
  dy: 5,
  color: "purple",
};

function drawCircle(x, y, size, color) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}
function detechWalls(x, y, size, dx, dy) {
  //Detect Side Walls
  if (x + size > canvas.width || x - size < 0) {
    circle.dx *= -1;
  }
  //Detect Side Walls
  if (y + size > canvas.height || y - size < 0) {
    circle.dy *= -1;
  }
}
function detechWallsSecondCircle(x, y, size, dx, dy) {
  //Detect Side Walls
  if (x + size > canvas.width || x - size < 0) {
    circleSecond.dx *= -1;
  }
  //Detect Side Walls
  if (y + size > canvas.height || y - size < 0) {
    circleSecond.dy *= -1;
  }
}
function moveCircle(x, y, dx, dy) {
  circle.x += circle.dx;
  circle.y += circle.dy;
}
function moveSecondCircle(x, y, dx, dy) {
  circleSecond.x += circleSecond.dx;
  circleSecond.y += circleSecond.dy;
}
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle(circle.x, circle.y, circle.size, circle.color);
  drawCircle(
    circleSecond.x,
    circleSecond.y,
    circleSecond.size,
    circleSecond.color
  );

  moveCircle();
  moveSecondCircle();
  detechWalls(circle.x, circle.y, circle.size, circle.dx, circle.dy);
  detechWallsSecondCircle(
    circleSecond.x,
    circleSecond.y,
    circleSecond.size,
    circleSecond.dx,
    circleSecond.dy
  );
  requestAnimationFrame(update);
}

update();
