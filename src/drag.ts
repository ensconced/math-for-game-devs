import { canvas, shadowCtx } from "./canvas";
import { shadowCanvasNodesByColor, Node } from "./nodes";
import Vec from "./vec";

interface Drag {
  mouseOrigin: {
    x: number;
    y: number;
  };
  itemOrigin: {
    x: number;
    y: number;
  };
  item: Node;
}

let drag: Drag | null = null;

function findItem(canvasX: number, canvasY: number): Node | undefined {
  const color = shadowCtx.getImageData(canvasX, canvasY, 1, 1).data;
  return shadowCanvasNodesByColor[`rgb(${color[0]}, ${color[1]}, ${color[2]})`];
}

canvas.addEventListener("mousedown", (e) => {
  const canvasX = e.clientX - canvas.offsetLeft;
  const canvasY = e.clientY - canvas.offsetTop;
  const item = findItem(canvasX, canvasY);
  if (item instanceof Node) {
    drag = {
      mouseOrigin: {
        x: canvasX,
        y: canvasY,
      },
      itemOrigin: {
        x: item.centre.x,
        y: item.centre.y,
      },
      item,
    };
  }
});

canvas.addEventListener("mousemove", (e) => {
  const canvasX = e.clientX - canvas.offsetLeft;
  const canvasY = e.clientY - canvas.offsetTop;
  const item = findItem(canvasX, canvasY);
  if (item instanceof Node) {
    canvas.style.cursor = "move";
  } else {
    canvas.style.cursor = "unset";
  }
  if (drag) {
    const dx = canvasX - drag.mouseOrigin.x;
    const dy = canvasY - drag.mouseOrigin.y;
    drag.item.move(new Vec(drag.itemOrigin.x + dx, drag.itemOrigin.y + dy));
  }
});

window.addEventListener("mouseup", () => {
  drag = null;
});
