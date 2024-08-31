export const canvas = document.getElementById("canvas") as HTMLCanvasElement;
export const ctx = canvas.getContext("2d")!;
export const shadowCanvas = new OffscreenCanvas(canvas.width, canvas.height);
export const shadowCtx = shadowCanvas.getContext("2d", {
  antialias: false,
  willReadFrequently: true,
})!;

function setCanvasDimensions() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  shadowCanvas.width = canvas.clientWidth;
  shadowCanvas.height = canvas.clientHeight;
  ctx.lineWidth = 2;
}

const resizeObserver = new ResizeObserver(() => {
  setCanvasDimensions();
});

resizeObserver.observe(canvas);
setCanvasDimensions();
