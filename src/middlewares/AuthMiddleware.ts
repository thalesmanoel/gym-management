import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IJwtPayload {
  id: string;
  email: string;
  level: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: IJwtPayload;
    }
  }
}

const SECRET = process.env.JWT_SECRET || "minha_chave_secreta";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded as IJwtPayload;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
