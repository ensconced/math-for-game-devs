import Vec from "./vec";

type Mat2 = [[number, number], [number, number]];

function determinant(mat: Mat2) {
  const [[a, b], [c, d]] = mat;
  return a * d - b * c;
}

export default function lineSegmentIntersection(
  lineAStart: Vec,
  lineAEnd: Vec,
  lineBStart: Vec,
  lineBEnd: Vec
): Vec | undefined {
  // We represent the lines in parametric form...
  // lineA(s) = (x1 + s(x2 - x1), y1 + s(y2 - y1))
  // lineB(t) = (x3 + t(x4 - x3), y3 + t(y4 - y3))
  const { x: x1, y: y1 } = lineAStart;
  const { x: x2, y: y2 } = lineAEnd;
  const { x: x3, y: y3 } = lineBStart;
  const { x: x4, y: y4 } = lineBEnd;

  // At the intersection point, x value for both lines must be equal:
  // x1 + s(x2 - x1) = x3 + t(x4 - x3)
  // ...and the y value for both lines must be equal:
  // y1 + s(y2 - y1) = y3 + t(y4 - y3)

  // Rearranging...
  // s(x2 - x1) - t(x4 - x3) = x3 - x1
  // s(y2 - y1) - t(y4 - y3) = y3 - y1

  // ...which is a system of linear equations that can be solved with Cramer's rule.
  // Cramer's rule states that
  // For Ax = b
  // x = (det(Ai) / det(A))  for i = 1....n
  // where Ai is formed by replacing the ith column of A by column vector b

  const A: Mat2 = [
    [x2 - x1, x3 - x4],
    [y2 - y1, y3 - y4],
  ];

  const b = [x3 - x1, y3 - y1] as const;

  const detA = determinant(A);

  const s =
    determinant([
      [b[0], A[0][1]],
      [b[1], A[1][1]],
    ]) / detA;
  const t =
    determinant([
      [A[0][0], b[0]],
      [A[1][0], b[1]],
    ]) / detA;

  if (s >= 0 && s < 1 && t >= 0 && t < 1) {
    return new Vec(x1 + s * (x2 - x1), y1 + s * (y2 - y1));
  }
}
