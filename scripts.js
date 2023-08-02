function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var ress = document.getElementById('res')
    if (Fano.value.length == 0 || Number(Fano.value) > ano ){
    window.alert('ERRO')
    }else{
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number (Fano.value)
        var genero =  ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Crinça
                img.setAttribute('src', 'criançahomem.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            }else if (idade < 50){
                //Homem
                img.setAttribute('src', 'homemadulto.png')
            }else {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //Crinça
                img.setAttribute('src', 'criançamulher.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            }else if (idade < 50){
                //Mulher
                img.setAttribute('src', 'mulheradulta.png')
            }else {
                // Idosa
                img.setAttribute('src', 'idosa.png')
            }
        
        }
        ress.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        ress.appendChild(img)
        
    }
}