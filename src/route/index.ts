// routes.ts
import * as express from "express";
import { Request, Response } from "express";
import UserController from "../controllers/UserController";
import auth from "../middleware/auth";
import PostController from "../controllers/PostController";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("This is Api!");
});

// User routes
router.get("/users", UserController.find);
router.get("/users/:id", UserController.findOne);
router.patch("/users/:id", auth, UserController.update);
router.delete("/users/:id", auth, UserController.delete);
router.post("/register", UserController.create);
router.post("/login", UserController.login);

// Post routes
router.get("/posts", PostController.find);
router.get("/posts/:id", PostController.findOne);
router.post("/posts", auth, PostController.create);
router.patch("/posts/:id", auth, PostController.update);
router.delete("/posts/:id", auth, PostController.delete);

export default router;
