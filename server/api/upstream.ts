export default defineEventHandler((event) => {
  return proxyRequest(
    event,
    "https://7dzqb4dvrf.execute-api.eu-central-1.amazonaws.com/dev"
  );
});
