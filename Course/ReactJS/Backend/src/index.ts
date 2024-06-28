import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 5000;
const router = express.Router();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

router.get("/", (req: Request, res: Response) => {
  res.send("Hello Welcome to Circle!");
});

router.get("/threads", async (req: Request, res: Response) => {
  try {
    const threads = await prisma.thread.findMany();
    res.json(threads);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

type CreateThreadDTO = {
  image: string;
  content: string;
};

router.post("/threads", async (req: Request, res: Response) => {
  try {
    const dto = req.body as CreateThreadDTO;
    const thread = await prisma.thread.create({
      data: {
        ...dto
      },
    });
    res.json(thread);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/threads/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const thread = await prisma.thread.findFirst({
      where: { id: Number(id) },
    });
    if (!thread) {
      res.status(404).json({ message: "Thread not found" });
      return;
    }
    res.json(thread);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/threads/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const thread = await prisma.thread.findFirst({
      where: { id: Number(id) },
    });
    if (!thread) {
      res.status(404).json({ message: "Thread not found" });
      return;
    }
    await prisma.thread.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Thread deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
