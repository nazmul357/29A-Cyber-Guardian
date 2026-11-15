module.exports = (app) => {
  app.get("/api/status", (req, res) => {
    res.json({
      project: "29A Cyber Guardian",
      version: "1.0.0",
      status: "online"
    });
  });
};
