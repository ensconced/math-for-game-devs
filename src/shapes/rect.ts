import { ctx, shadowCtx } from "../canvas";
import { Node } from "../nodes";
import Vec from "../vec";

interface RectOpts {
  centre: Vec;
  color: string;
  width: number;
  height: number;
}

export class RectNode extends Node {
  height: number;
  width: number;
  color: string;
  constructor(opts: RectOpts) {
    super(opts.centre);
    this.color = opts.color;
    this.height = opts.height;
    this.width = opts.width;
  }

  private quadrants() {
    const top = -this.height / 2;
    const bottom = +this.height / 2;
    const left = -this.width / 2;
    const right = +this.width / 2;

    return {
      topLeft: Math.atan2(top, left),
      topRight: Math.atan2(top, right),
      bottomRight: Math.atan2(bottom, right),
      bottomLeft: Math.atan2(bottom, left),
    };
  }

  assignFacingEdges(angles: number[]) {
    const quadrants = this.quadrants();
    return angles.map((angle) => {
      if (angle >= quadrants.topLeft && angle < quadrants.topRight) {
        return "top";
      }
      if (angle >= quadrants.topRight && angle < quadrants.bottomRight) {
        return "right";
      }
      if (angle >= quadrants.bottomRight && angle < quadrants.bottomLeft) {
        return "bottom";
      }
      return "left";
    });
  }

  draw() {
    const top = this.centre.y - this.height / 2;
    const left = this.centre.x - this.width / 2;
    ctx.strokeStyle = this.color;
    ctx.strokeRect(left, top, this.width, this.height);
    shadowCtx.fillStyle = this.shadowColor;
    shadowCtx.fillRect(left, top, this.width, this.height);
  }
}
