var idade = 17
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não pode votar')
} else if (idade < 18){
    console.log('Voto facultativo')
} else {
    console.log('Voto obrigatório')
}