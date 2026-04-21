var servidoresModel = require("../models/servidoresModel");

function cadastrar_servidor(req, res) {

    var Mac = req.body.MacServer;
    var modelo = req.body.modeloServer;
    var fk_unidade = req.body.fk_unidadeServer

    if (Mac == undefined) {
        res.status(400).send("Seu Mac está undefined!");
    } else if (modelo == undefined) {
        res.status(400).send("Seu modelo está undefined!");
    } else {
        servidoresModel.cadastrar_servidor(Mac, modelo, fk_unidade)
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