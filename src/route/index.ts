import * as express from "express";
import { Request, Response } from "express";
import UserController from "../controllers/UserController";
import auth from "../middleware/auth";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("This is Api!");
});

router.get("/users", UserController.find);
router.get("/users/:id", auth, UserController.findOne);
router.patch("/users/:id", auth, UserController.update);
router.delete("/users/:id", auth, UserController.delete);
router.post("/register", UserController.create);
router.post("/login", UserController.login);

export default router;
