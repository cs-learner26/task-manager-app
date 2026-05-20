const request = require("supertest");
const app = require("../app");

describe("Task API", () => {

  it("Create Task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({
        title: "Test Task",
        description: "Testing",
        priority: "High",
        dueDate: "2026-06-01",
        status: "pending"   
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Task");
    expect(res.body.status).toBe("pending");
  });

});