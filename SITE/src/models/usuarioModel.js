var database = require("../database/config")

function autenticar(email, senha, matricula) {
    console.log("cheguei ao model")
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha, matricula)
    var instrucaoSql = `SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}' AND matricula = '${matricula}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, telefone, funcao, matricula, fk_responsavel) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, telefone, funcao, matricula, fk_responsavel);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    const fk = (fk_responsavel === undefined || fk_responsavel === null || fk_responsavel === "" || fk_responsavel === "null")
    ? "NULL"
    : Number(fk_responsavel); // garante número
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, telefone, funcao, matricula, fkResponsavel) VALUES ('${nome}', '${email}', '${senha}', '${telefone}', '${funcao}', '${matricula}', ${fk});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};