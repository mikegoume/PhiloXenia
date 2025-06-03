import express, { Request, Response } from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the test + TypeScript Server!" });
});

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
