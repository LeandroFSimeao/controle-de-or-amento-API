import express from "express";
import receitas from "./receitasRoutes.js";
import despesas from "./despesasRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Controle de orçamento"})
    })

    app.use(
        express.json(),
        receitas,
        despesas
    )
}

export default routes;