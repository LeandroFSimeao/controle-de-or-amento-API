import express from "express";
import ReceitaController from "../controllers/receitasController.js";

const router = express.Router();

router
  .get("/receitas", ReceitaController.listarReceitas)
  .get("/receitas/:id", ReceitaController.listarReceitaPorID)
  .post("/receitas", ReceitaController.cadastraReceita)
  .put("/receitas/:id", ReceitaController.atualizarReceita)
  .delete("/receitas/:id", ReceitaController.excluirReceita)

export default router;