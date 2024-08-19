import { Router } from "express";
import UserController from "../controllers/user";

const router: Router = Router();

router.get("/", UserController.getAll);
router.post("/", UserController.add);

export default router;
