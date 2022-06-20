import express from "express";
import DespesaController from "../controllers/despesasController.js";

const router = express.Router();

router
  .get("/despesas", DespesaController.listarDespesas)
  .get("/despesas/:id", DespesaController.listarDespesaPorID)
  .post("/despesas", DespesaController.cadastraDespesa)
  .put("/despesas/:id", DespesaController.atualizarDespesa)
  .delete("/despesas/:id", DespesaController.excluirDespesa)

export default router;