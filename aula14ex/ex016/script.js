function contar() {
   
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document. getElementById('res')

        if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            window.alert('[ERRO] Faltam dados!')
            res.innerHTML = 'Impossível contar!'

        } else {
            res.innerHTML = 'Contando: <br>'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)

            if(p <= 0){
                window.alert('Número inválido! Considerando PASSO 1.')
                p = 1
            }

            if (i < f) {
                //Contagem crescente
                for(let cont = i; cont <= f; cont += p) {
                    res.innerHTML += `${cont} \u{1F449} `
                }
            } else {
                //Contagem regressiva
                for(let cont = i; cont >= f; cont -= p) {
                    res.innerHTML += `${cont} \u{1F449} `
                }
            }
             res.innerHTML += `\u{1F3C1}`
           
        }


    /*
    if () {
         for (var cont = 1; cont <= fim; cont = cont + passo.value) {
        res.innerHTML = `Contando: <p>${cont} </p>`
         }
    }
    */

}