import { expect } from "chai";
import worker from "../src/index.js";

describe("Cloudflare Worker", () => {
  it("returns a greeting message", async () => {
    const request = new Request("http://localhost/");
    const response = await worker.fetch(request);

    expect(response.status).to.equal(200);

    const data = await response.json();
    expect(data.message).to.equal("Hello from Cloudflare Worker 🚀");
  });
});
