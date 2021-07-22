import { Arrow } from "./arrow";

export class ArrowMin extends Arrow {
  constructor(canv, w = 250, h = 250, size = 80) {
    super(canv, w = 250, h = 250, size = 80)
  }
  render(time) {
    this.clear();
    this.context.rotate((2 * Math.PI) / 60 * time);
    this.drowArrow(0, 2, 4, -78, "#000000");
    this.context.rotate(-(2 * Math.PI) / 60 * time);
  }
}