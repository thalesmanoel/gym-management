import { Router } from "express";
import { authMiddleware } from "./middlewares/AuthMiddleware";

import userRoutes from "./routes/UserRoutes";
import authRoutes from "./routes/AuthRoutes";

const router = Router();

router.use("/auth", authRoutes);

router.use(
  "/auth",
  authMiddleware,
  Router()
    .use("/users", userRoutes)
);

export default router;
