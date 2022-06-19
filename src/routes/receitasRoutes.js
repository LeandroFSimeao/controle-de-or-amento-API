import express from "express";
import ReceitaController from "../controllers/receitasController.js";

const router = express.Router();

router
  .get("/receitas", ReceitaController.listarReceitas)
  .post("/receitas", ReceitaController.cadastraReceita)

export default router;