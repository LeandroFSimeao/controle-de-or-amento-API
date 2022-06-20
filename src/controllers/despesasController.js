import despesas from "../models/Despesa.js";

class DespesaController {

    static listarDespesas = (req, res) => {
        despesas.find((err, despesas) => {
            res.status(200).json(despesas);
        })
    }

    static listarDespesaPorID = (req, res) => {
        const id = req.params.id;

        despesas.findById(id, (err, despesas) => {
            if (err){
                res.status(400).send({message: `${err.message} - Id da despesa não localizada.`})
            } else{
                res.status(200).json(despesas);
            }
        })
    }

    static cadastraDespesa = (req, res) => {
        let despesa = new despesas(req.body);

        despesa.save((err) =>{
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar despesa.`})
            } else {
                res.status(201).send(despesa.toJSON())
            }
        })
    }

    static atualizarDespesa = (req, res) => {
        const id = req.params.id;

        despesas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'despesa atualizada com sucesso'});
            } else {
                res.status(500).send({message: err.message});
            }
        })
    }

    static excluirDespesa = (req, res) => {
        const id = req.params.id;

        despesas.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "despesa removida com sucesso"});
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

}

export default DespesaController;