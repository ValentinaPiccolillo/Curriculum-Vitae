//Animacion de tipeado en titulo
var i = 0;
var txt = 'Lesa Murray';
var speed = 80;

function typeWrite(){
    if(i < txt.length){
        document.getElementById('texto').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWrite, speed);
    }
}

typeWrite();
