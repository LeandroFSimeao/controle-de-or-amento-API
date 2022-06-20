import receitas from "../models/Receita.js";

class ReceitaController {

    static listarReceitas = (req, res) => {
        receitas.find((err, receitas) => {
            res.status(200).json(receitas);
        })
    }

    static listarReceitaPorID = (req, res) => {
        const id = req.params.id;

        receitas.findById(id, (err, receitas) => {
            if (err){
                res.status(400).send({message: `${err.message} - Id da receita não localizada.`})
            } else{
                res.status(200).json(receitas);
            }
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

    static atualizarReceita = (req, res) => {
        const id = req.params.id;

        receitas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Receita atualizada com sucesso'});
            } else {
                res.status(500).send({message: err.message});
            }
        })
    }

    static excluirReceita = (req, res) => {
        const id = req.params.id;

        receitas.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Receita removida com sucesso"});
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

}

export default ReceitaController;