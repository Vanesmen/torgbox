export class Arrow {
  constructor(canv, w = 250, h = 250, size = 80) {
    this.element = canv;
    this.context = this.element.getContext("2d");
    this.element.width = w;
    this.element.height = h;
    this.size = size;

    this.init();
  }

  fill(color) {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.element.width, this.element.height);
  }

  drowRect(x, y, w, h, color) {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, w, h);
  }

  drowArrow(x, y, w, h, color) {
    this.context.fillStyle = color;
    this.context.beginPath();
    this.context.moveTo(x + w / 2, y);
    this.context.lineTo(x - w / 2, y);
    this.context.lineTo(x - 0.5, y + h);
    this.context.lineTo(x + 0.5, y + h);
    this.context.fill();
  }

  clear() {
    this.context.clearRect(-this.element.height / 2,
      -this.element.height / 2,
      this.element.width,
      this.element.height);
  }

  translateToCenter() {
    this.context.translate(this.element.width / 2, this.element.height / 2)
  }

  init() {
    this.context.translate(this.element.width / 2, this.element.height / 2);
  }


}