import express from "express";
import logger from "morgan";

const port = process.env.PORT ?? 3000;

const app = express();
app.use(logger("dev"));
app.use(express.static(process.cwd() + "/src/client"));

app.get("/", (_req, res) => {
  res.sendFile(process.cwd() + "/src/client/index.html");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
