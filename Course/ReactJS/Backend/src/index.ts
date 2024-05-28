import { AppDataSource } from "./data-source";
import express from "express"
import { Request, Response } from "express";
import cors from "cors";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 5000;

    app.use(
      cors({
        // origin: ["https://dumbways.id", "https://facebook.com"]
      })
    );

    app.get("/", (req: Request, res: Response) => {
      res.json([
        {
          title: "Test",
          description: "Testing",
        },
      ]);
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
