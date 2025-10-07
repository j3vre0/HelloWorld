function turnOn(){
    document.getElementById('myImage').src='img/bulbon.jpg';
    document.querySelector('#myMessage').innerHTML='The light is turn On';
    document.querySelector('.myMessage').innerHTML='The light is turn On';
}

function turnOff(){
    document.getElementById('myImage').src='img/bulboff.jpg';
    document.querySelector('#myMessage').innerHTML='The light is turn Off';
    document.querySelector('.myMessage').innerHTML='The light is turn Off';
}

