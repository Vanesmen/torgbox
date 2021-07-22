import { Background } from "./background";
import { ArrowSec } from "./arrowSecond";
import { ArrowMin } from "./arrowMin";
import { ArrowHour } from "./arrowHour";

class Clock {
  constructor(canv) {
    this.canv = canv;
    this.screen = new Map([
      ["background", new Background(this.canv.canvas1)],
      ["hourArrow", new ArrowHour(this.canv.canvas2)],
      ["minuteArrow", new ArrowMin(this.canv.canvas3)],
      ["secondArrow", new ArrowSec(this.canv.canvas4)],
    ]);

    this.init();
  }

  init() {
    //фон
    this.screen.get("background").init();
  }

  render({ sec, min, hour }) {
    this.screen.get("secondArrow").render(sec);
    this.screen.get("minuteArrow").render(min);
    this.screen.get("hourArrow").render(hour, min);
  }
}

export default Clock