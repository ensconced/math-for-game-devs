export default class Vec {
  constructor(public x: number, public y: number) {}

  magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  subtract(point: Vec) {
    return new Vec(this.x - point.x, this.y - point.y);
  }

  isWithinCircle(circleRadius: number, circleCentre: Vec) {
    const toCentre = circleCentre.subtract(this);
    return toCentre.magnitude() < circleRadius;
  }
}
