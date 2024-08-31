import { canvas, ctx, shadowCanvas, shadowCtx } from "./canvas";
import "./drag";
import "./controls";
import { nodes as nodes } from "./nodes";
import { CircleNode } from "./shapes/circle";
import Vec from "./vec";

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  shadowCtx.clearRect(0, 0, shadowCanvas.width, shadowCanvas.height);

  if (circle.centre.isWithinCircle(container.radius, container.centre)) {
    container.fill = "black";
  } else {
    container.fill = "white";
  }

  nodes.forEach((node) => node.draw());
}

function drawLoop() {
  drawScene();
  requestAnimationFrame(() => {
    drawLoop();
  });
}

const container = new CircleNode({
  centre: new Vec(100, 100),
  radius: 50,
  stroke: "black",
  fill: "white",
});

const circle = new CircleNode({
  centre: new Vec(100, 100),
  radius: 10,
  stroke: "red",
  fill: "red",
});

drawLoop();
