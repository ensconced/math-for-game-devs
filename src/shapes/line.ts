import { ctx } from "../canvas";
import Vec from "../vec";

export default class Line {
  constructor(public start: Vec, public end: Vec, public color: string) {}
  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.start.x, this.start.y);
    ctx.lineTo(this.end.x, this.end.y);
    ctx.stroke();
  }
}
