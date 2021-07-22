import { Arrow } from "./arrow";

export class ArrowSec extends Arrow {
  constructor(canv, w = 250, h = 250, size = 80) {
    super(canv, w = 250, h = 250, size = 80)
  }
  render(time) {
    this.clear();
    this.context.rotate((2 * Math.PI) / 60 * time);
    this.drowRect(-1, 15, 2, -100, "#B22222");
    this.context.rotate(-(2 * Math.PI) / 60 * time);
  }
}