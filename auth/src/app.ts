import express from "express";

const app = express();

app.get("*", (_req, res) => {
  res.status(200).send({});
});

export default app;
