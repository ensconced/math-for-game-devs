export default class Vec {
  constructor(public x: number, public y: number) {}

  magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  normal() {
    return new Vec(this.y, -this.x).normalize();
  }

  normalize() {
    if (this.magnitude() === 0) {
      return new Vec(0, 0);
    }
    return this.scale(1 / this.magnitude());
  }

  add(point: Vec) {
    return new Vec(this.x + point.x, this.y + point.y);
  }

  dot(vec: Vec) {
    return this.x * vec.x + this.y * vec.y;
  }

  scale(scalar: number) {
    return new Vec(this.x * scalar, this.y * scalar);
  }

  subtract(point: Vec) {
    return new Vec(this.x - point.x, this.y - point.y);
  }

  isWithinCircle(circleRadius: number, circleCentre: Vec) {
    const toCentre = circleCentre.subtract(this);
    return toCentre.magnitude() < circleRadius;
  }
}
