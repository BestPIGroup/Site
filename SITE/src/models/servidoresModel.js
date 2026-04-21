var database = require("../database/config");

function cadastrar_servidor(Mac, modelo, status, fk_unidade){
        console.log("ACESSEI O MODEL DA UNIDADE \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_Unidade(): ")
        var instrucaoSql = `INSERT INTO servidor(numero_serie, modelo, fk_unidade) VALUES('${Mac}', '${modelo}', '${fk_unidade}');`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar_servidor
}