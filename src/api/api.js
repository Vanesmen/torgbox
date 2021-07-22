import { createServer } from "miragejs";
import timezone from "./timezones.json";

let server = createServer();
server.get("/api/timezone", timezone);

export const timezoneAPI = {
  getTimezone() {
    return fetch("/api/timezone")
      .then((res) => res.json())
      .then((json) => {
        return json
      })
  }
}