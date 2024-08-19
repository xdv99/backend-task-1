import express, { Express } from "express";
import userRouter from "./routes/user";

const app: Express = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
