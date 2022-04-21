const {deepEqual,ok} = require('assert')
const exp = require('constants')
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}
describe('Suite de manipulação de herois', () => {

    it('deve pesquisar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.listar(expected.id)
        ok(resultado, expected)
    })

/*     it('deve cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        //
        ok(null, expected)
    }) */
    
})