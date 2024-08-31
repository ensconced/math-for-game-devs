import { canvas, ctx, shadowCanvas, shadowCtx } from "./canvas";
import "./drag";
import "./controls";
import { nodes as nodes } from "./nodes";
import { CircleNode } from "./shapes/circle";
import Vec from "./vec";
import Line from "./shapes/line";
import lineSegmentIntersection from "./line-segment-intersection";

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  shadowCtx.clearRect(0, 0, shadowCanvas.width, shadowCanvas.height);
  const wall = new Line(wallStart.centre, wallEnd.centre, "black");
  wall.draw();
  const laserLength = 10000;
  const laserGuideVec = laserEnd.centre.subtract(laserStart.centre).normalize();
  const laserLineVec = laserGuideVec.scale(laserLength);
  const laserLineEnd = laserStart.centre.add(laserLineVec);

  const intersectionPoint = lineSegmentIntersection(
    wallStart.centre,
    wallEnd.centre,
    laserStart.centre,
    laserLineEnd
  );

  if (intersectionPoint) {
    intersectionNode.move(intersectionPoint);
    const wallVec = wall.end.subtract(wall.start).normalize();
    const wallNormal = wallVec.normal();
    const componentOfLaserAlongWall = wallVec.scale(laserLineVec.dot(wallVec));
    const componentOfLaserAlongWallNormal = wallNormal.scale(
      laserLineVec.dot(wallNormal)
    );
    const reflectedLaserVec = componentOfLaserAlongWall.add(
      componentOfLaserAlongWallNormal.scale(-1)
    );
    const reflectedLaserEndpoint = intersectionPoint.add(
      reflectedLaserVec.scale(laserLength)
    );
    const reflectedLaser = new Line(
      intersectionPoint,
      reflectedLaserEndpoint,
      "red"
    );
    const laser = new Line(laserStart.centre, intersectionPoint, "red");
    laser.draw();
    reflectedLaser.draw();
  } else {
    const laser = new Line(laserStart.centre, laserLineEnd, "red");
    laser.draw();
    intersectionNode.move(new Vec(-100, -100));
  }

  nodes.forEach((node) => node.draw());
}

function drawLoop() {
  drawScene();
  requestAnimationFrame(() => {
    drawLoop();
  });
}

const wallStart = new CircleNode({
  centre: new Vec(100, 100),
  radius: 10,
  fill: "black",
});

const wallEnd = new CircleNode({
  centre: new Vec(300, 300),
  radius: 10,
  fill: "black",
});

const laserStart = new CircleNode({
  centre: new Vec(500, 200),
  radius: 10,
  fill: "red",
});

const laserEnd = new CircleNode({
  centre: new Vec(150, 500),
  radius: 10,
  fill: "red",
});

const intersectionNode = new CircleNode({
  centre: new Vec(0, 0),
  radius: 5,
  fill: "black",
});

drawLoop();
