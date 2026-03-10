var servidoresModel = require("../models/servidoresModel");

function cadastrar_servidor(req, res) {

    var fornecedor = req.body.fornecedorServer;
    var modelo = req.body.modeloServer;
    var numero = req.body.numeroServer;
    var status = req.body.statusServer;
    var fk_unidade = req.body.fk_unidadeServer

    if (fornecedor == undefined) {
        res.status(400).send("Seu fornecedor está undefined!");
    } else if (modelo == undefined) {
        res.status(400).send("Seu modelo está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero undefined!");
    } else {
        servidoresModel.cadastrar_servidor(fornecedor, modelo, numero, status, fk_unidade)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro do servidor! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {
    cadastrar_servidor
}