import { ctx } from "../canvas";
import Vec from "../vec";

export default class PolyLine {
  constructor(public points: Vec[], public color: string) {}

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    if (this.points[0]) {
      ctx.moveTo(this.points[0].x, this.points[0].y);
      for (let i = 1; i < this.points.length; i++) {
        ctx.lineTo(this.points[i]!.x, this.points[i]!.y);
      }
      ctx.stroke();
    }
  }
}
