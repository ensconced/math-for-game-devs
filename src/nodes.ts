import Vec from "./vec";

function randomUInt8() {
  return Math.floor(Math.random() * 256);
}

export function randomColor() {
  return `rgb(${randomUInt8()}, ${randomUInt8()}, ${randomUInt8()})`;
}

export const nodes: Node[] = [];
export const shadowCanvasNodesByColor: Record<string, Node> = {};

export class Node {
  centre: Vec;
  shadowColor: string;
  constructor(centre: Vec) {
    nodes.push(this);
    const shadowColor = randomColor();
    this.shadowColor = shadowColor;
    shadowCanvasNodesByColor[shadowColor] = this;
    this.centre = centre;
  }

  move(centre: Vec) {
    this.centre = centre;
  }

  draw() {}
}
