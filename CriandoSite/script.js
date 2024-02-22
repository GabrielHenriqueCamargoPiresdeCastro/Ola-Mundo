function pesquisar(){
   
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours() 

    msg.innerHTML = `Agora são ${hora} horas.`

}