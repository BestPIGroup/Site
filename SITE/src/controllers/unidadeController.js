var unidadeModel = require("../models/unidadeModel");

function verificar_unidade(req,res){
    var codigoUnidade = req.body.codigoServer;
    var cep = req.body.cepServer;

           unidadeModel.verificar_unidade(cep, codigoUnidade)
                .then(function (resultadoAutenticar) {
    
                    console.log(`Resultados encontrados: ${resultadoAutenticar.length}`);
    
                    if (resultadoAutenticar.length == 1) {
    
                        res.json({
                            codigoUnidade: resultadoAutenticar[0].codigoUnidade,
                            cep: resultadoAutenticar[0].cep,
                        });
    
                    } else if (resultadoAutenticar.length == 0) {
    
                        res.status(403).send("CEP ou codigoUnidade inválido(s)");
    
                    } else {
    
                        res.status(403).send("Mais de uma unidade com o mesmo CEP/Codigo Unidade!");
    
                    }
    
                })
                .catch(function (erro) {
                    console.log("Erro no cadastro:", erro);
                    res.status(500).json(erro.sqlMessage);
                });
}

function cadastrar_unidade(req,res){

    var codigoUnidade = req.body.codigoServer;
    var cep = req.body.cepServer;
    var cidade = req.body.cidadeServer;
    var rua = req.body.ruaServer;
    var bairro = req.body.bairroServer;

    if(codigoUnidade == undefined){
        res.status(400).send("Seu codigo da unidade está undefined!");
     }else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (rua == undefined) {
        res.status(400).send("Sua rua a vincular está undefined!");
    } else if(bairro == undefined) {
        res.status(400).send("Sua função está undefined!");
    } else {
        unidadeModel.cadastrar_unidade(codigoUnidade,cep,cidade,rua,bairro)
                    .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da unidade! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {
    verificar_unidade,
    cadastrar_unidade
}