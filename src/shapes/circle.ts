import { ctx, shadowCtx } from "../canvas";
import { Node } from "../nodes";
import Vec from "../vec";

interface CircleOpts {
  centre: Vec;
  radius: number;
  stroke: string;
  fill: string;
}

export class CircleNode extends Node {
  radius: number;
  stroke: string;
  fill: string;
  constructor(opts: CircleOpts) {
    super(opts.centre);
    this.stroke = opts.stroke;
    this.fill = opts.fill;
    this.radius = opts.radius;
  }

  draw() {
    ctx.strokeStyle = this.stroke;
    ctx.beginPath();
    ctx.arc(this.centre.x, this.centre.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = this.fill;
    ctx.fill();
    shadowCtx.beginPath();
    shadowCtx.arc(this.centre.x, this.centre.y, this.radius, 0, 2 * Math.PI);
    shadowCtx.fillStyle = this.shadowColor;
    shadowCtx.fill();
  }
}
