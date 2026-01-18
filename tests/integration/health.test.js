const request = require("supertest");
const app = require("../../src/app");

describe("Health API - Integration Tests", () => {
  test("GET /health should return status OK", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: "OK" });
  });
});
