import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  res.json({ message: "Login route" });
});

router.post("/register", (req, res) => {
  res.json({ message: "Register route" });
});

export default router;
