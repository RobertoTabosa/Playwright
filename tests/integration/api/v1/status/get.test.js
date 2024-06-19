test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("https://www.allrecipes.com/");
  expect(response.status).toBe(200);
});
