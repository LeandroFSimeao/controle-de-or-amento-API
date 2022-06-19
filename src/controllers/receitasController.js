import receitas from "../models/Receita.js";

class ReceitaController {

    static listarReceitas = (req, res) => {
        receitas.find((err, receitas) => {
            res.status(200).json(receitas);
        })
    }

    static cadastraReceita = (req, res) => {
        let receita = new receitas(req.body);

        receita.save((err) =>{
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar receita.`})
            } else {
                res.status(201).send(receita.toJSON())
            }
        })
    }

}

export default ReceitaController;