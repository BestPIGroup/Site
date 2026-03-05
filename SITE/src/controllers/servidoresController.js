var servidoresModel = require("../models/servidoresModel");

function cadastrar_servidor(req, res) {

    var fornecedor = req.body.fornecedorServer;
    var modelo = req.body.modeloServer;
    var numero = req.body.numeroServer;

    if (fornecedor == undefined) {
        res.status(400).send("Seu codigo da unidade está undefined!");
    } else if (modelo == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else {
        servidoresModel.cadastrar_servidor(fornecedor, modelo, numero)
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