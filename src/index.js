export default {
  async fetch(request) {
    return new Response(
      JSON.stringify({
        message: "Hello! from Cloudflare Worker 🚀"
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
