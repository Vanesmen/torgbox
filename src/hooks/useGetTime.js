export function useGetTime(timezone = 0) {
  return {
    sec() {
      return new Date().getSeconds();
    },
    min() {
      return new Date().getMinutes();
    },
    hour() {
      return ((new Date().getUTCHours() + +timezone) % 24);
    },
  };
}