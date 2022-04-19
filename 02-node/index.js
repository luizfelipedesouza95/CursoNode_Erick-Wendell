function obterUsuario(callback){
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Luiz Felipe',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone() {
    setTimeout(function () {
        return {
            telefone: '99716-1655',
            DDD: 35
        }
    }, 2000)
}

function obterEndereco() {


}

function resolverUsuario(erro, usuario) {

    console.log('usuario', usuario)
}

obterUsuario(resolverUsuario)
//const telefone = obterTelefone(usuario.id)

//
//console.log('telefone:', telefone)