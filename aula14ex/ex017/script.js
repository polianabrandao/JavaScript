function gerar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número.')
    } else {

        let n = Number(num.value)
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${cont} = ${n*cont}`
            tab.appendChild(item)
            cont++
        }
        
        for(let cont = n; cont <= 10; cont++){
        res.innerHTML = `${cont} = `
        }
    }

}