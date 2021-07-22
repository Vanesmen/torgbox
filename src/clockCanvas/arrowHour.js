import { Arrow } from "./arrow";

export class ArrowHour extends Arrow {
  constructor(canv, w = 250, h = 250, size = 80) {
    super(canv, w = 250, h = 250, size = 80)
  }
  render(hour, min) {
    this.clear();
    this.context.rotate((2 * Math.PI) / 12 * (hour + 1 / 60 * min));
    this.drowArrow(0, 2, 4, -38, "#000000");
    this.context.rotate(-(2 * Math.PI) / 12 * (hour + 1 / 60 * min));
  }
}