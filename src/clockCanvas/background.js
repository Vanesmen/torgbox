export class Background {
  constructor(canv, w = 250, h = 250) {
    this.element = canv;
    this.context = this.element.getContext("2d");
    this.element.width = w;
    this.element.height = h;
  }

  fill(color) {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.element.width, this.element.height);
  }

  drowRect(x, y, w, h, color) {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, w, h);
  }

  drowCircle(x, y, r, lineWidth, color, fill = true) {
    this.context.beginPath();
    this.context.lineWidth = lineWidth;
    this.context.arc(x, y, r, 0, Math.PI * 2, true);
    this.context.strokeStyle = color;

    if (fill) {
      this.context.fillStyle = color;
      this.context.fill();
      return;
    }

    this.context.stroke();
    this.context.closePath();
  }

  radianPoints(x, y, w, h, color) {
    let pointCtx1 = this.element.getContext("2d");
    pointCtx1.translate(this.element.width / 2, this.element.height / 2);

    for (let i = 0; i < 12; i++) {
      pointCtx1.rotate((2 * Math.PI / 12) * 1);
      pointCtx1.fillStyle = color;
      pointCtx1.fillRect(x, y, w, h);
    }
  }

  clear() {
    this.context.clearRect(0, 0, this.element.width, this.element.height);
  }

  init() {
    this.fill("#FFFFFF");

    this.drowCircle((this.element.width / 2), (this.element.height / 2), 100, 2, "#000000", false);
    this.drowCircle((this.element.width / 2), (this.element.height / 2), 99, 0, "#DCDCDC", true);

    this.radianPoints(-2, 82, 4, 10, "#A9A9A9");
  }

}