const {readFile} = require('fs')
const {promisify} = require('util')
const readFileAsync = promisify(readFile)

//OUTRA FORMA DE OBTER DADOS DO JSON
//const dadosJson = require('./herois.json')


class Database {
    construtor() {
        //this.NOME_ARQUIVO = 'herois.json'
        const NOME_ARQUIVO = require('./herois.json')
    }
    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }
    escreverArquivo() {

    }
    async listar(id) {
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }
}

module.exports = new Database()