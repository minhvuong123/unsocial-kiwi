import request from "supertest";
import app from "../../app";

beforeAll(() => {
  // Start the database connection
});

beforeEach(() => {
  // Clean up the database
});

afterAll(() => {
  // Close the database
});

// it("should return 405 for non-post requests to the signup route", async () => {
//   await request(app).get("/").expect(200);
// });

it("should return 422 if the email is not valid", async () => {
  await request(app).post("/api/auth/signup").send({}).expect(422);

  await request(app).post("/api/auth/signup").send({ email: "invalidEmail" }).expect(422);
});
