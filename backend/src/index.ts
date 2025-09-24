
import express from "express";
import cors from "cors";
import userRouter from "./routes/user";
import blogRouter from "./routes/blog";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/healthy', (req, res) => {
  res.json({ message: "This is a heathy server" });
})
app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);


if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

export default app;