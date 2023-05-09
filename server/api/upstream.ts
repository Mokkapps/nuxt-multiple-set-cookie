export default defineEventHandler((event) => {
  setResponseHeader(event, "set-cookie", ["A=1", "B=2", "C=3"]);

  return "Hello upstream";
});
