export default {
  async fetch(request) {
    return new Response(
      JSON.stringify({
        message: "Hello this is Cloudflare Worker 🚀"
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
