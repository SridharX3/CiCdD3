export default {
  async fetch(request) {
    return new Response(
      JSON.stringify({
        message: "Helloo this is Cloudflare Worker 🚀"
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
// PR test change 1 