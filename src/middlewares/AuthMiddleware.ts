import { Request, Response, NextFunction } from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Aqui você validaria o token de verdade
  // Ex.: jwt.verify(token, process.env.JWT_SECRET)

  next();
}
