/*
0 - obter usuario
1 - obter numero de tel a partir do id
2 - obter endereço pelo id
*/
//importamos o modulo interno do node js

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario(callback) {
//quando der algum problema => reject(erro)
//quando sucess => resolv
    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function () {   //simula uma base de dados
            //return reject(new Error('DEU RUIM DE VERDADE!'))
            return resolve({
                id: 1,
                nome: 'Luiz Felipe',
                idade: 26,
                dataNascimento: "06/11/1995"
            })
        }, 1000)//tempo para retornar a resposta

    })
}



function obterTelefone(idUsuario) {
    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function () {  //simula uma base de dados
            return resolve({
                telefone: '99716-1655',
                ddd: 35
            })
        }, 2000)//tempo para retornar a resposta
    })
}

function obterEndereco(idUsuario, callback) {
    //return new Promise(function resolvePromisse(resolve, reject) {
    setTimeout( () => {  //simula uma base de dados
        return callback(null,{
            rua: "Rua Principal",
            numero: 300
        })
    }, 2000)//tempo para retornar a resposta
}

main()

async function main() {
    try {
        console.time('medida-promisse')
        const usuario = await obterUsuario()
/*         const telefone = await obterTelefone(usuario.id)
        const endereco = await obterEnderecoAsync(usuario.id) */
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
            Nome: ${usuario.nome}
            idade: ${usuario.idade}
            Data Nasc: ${usuario.dataNascimento}
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
        `)
        console.timeEnd('medida-promisse')
    }
    catch (error){
        console.log('DEU RUIM', error)
    }
}
//obterUsuario()
//para manipular o sucess usamos a função .then
//para manipular erros, usamos o .catch

/* const usuarioPromisse = obterUsuario()

usuarioPromisse
.then(function(usuario){
    return obterTelefone(usuario.id)
    .then(function resolverTelefone(result){
        return{
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                idade: usuario.idade,
                dataNascimento: usuario.dataNascimento
            },
            telefone: result
        }
    })
})
.then(function (resultado){
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    return endereco.then(function resolverEndereco(result){
        return{
            usuario: resultado.usuario,
            telefone: resultado.telefone,
            endereco: result
        }
    })
})
.then(function(resultado){
    console.log(`
    Nome: ${resultado.usuario.nome}
    idade: ${resultado.usuario.idade}
    Data Nasc: ${resultado.usuario.dataNascimento}
    Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
    Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `)
})
.catch(function(error){
    console.log('DEU RUIM', error)
}) */




/* obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.log('Algo esta errado no usuario!', error)
        return;
        }

        obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
            if (error1) {
                console.log('Algo esta errado no telefone!', error)
                return;
            }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.log('Algo esta errado no endereço!', error)
                return;
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua}, ${endereco.numero},
            Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
}) */