const mongoose = require("mongoose");

beforeAll(async () => {
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/task-manager-test"
  );
});

afterEach(async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    await collections[key].deleteMany();
  }
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});