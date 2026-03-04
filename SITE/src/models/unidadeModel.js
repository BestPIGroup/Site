                var database = require("../database/config");

function verificar_unidade(cep, codigoUnidade){
        console.log("ACESSEI O MODEL DA UNIDADE \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificar_unidade(): ", cep, codigoUnidade)
        var instrucaoSql = `SELECT * FROM unidade WHERE cep = '${cep}' AND cod_unidade = '${codigoUnidade}';`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}
function cadastrar_unidade(codigoUnidade, cep, cidade, rua, bairro, estado){
        console.log("ACESSEI O MODEL DA UNIDADE \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_Unidade(): ")
        var instrucaoSql = `INSERT INTO unidade (cod_unidade, cep, cidade, rua, bairro, estado) 
        VALUES 
        ('${codigoUnidade}', '${cep}', '${cidade}', '${rua}', '${bairro}', '${estado}');`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

module.exports = {
verificar_unidade,
cadastrar_unidade
}