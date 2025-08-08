import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/gym-management")
  .then(() => console.log("📦 Conectado ao MongoDB"))
  .catch(err => console.error("Erro ao conectar no MongoDB:", err));

app.get("/", (_req, res) => {
  res.send("API rodando 🚀");
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
