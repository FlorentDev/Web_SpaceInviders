var positionAlien;
var alien;
var explosion;
var hauteurAlien;

function moveAlien(){
	positionAlien+= vitesse
	positionAlien<window.innerWidth ? alien.style.left = positionAlien + 'px' : positionAlien = -alien.width;
	setTimeout(moveAlien, 1);
}

function initAlien(){
	alien = document.getElementById('alien');
	explosion = document.getElementById('explosion');
	hauteurAlien = 5; //Decrit dans le CSS
	positionAlien = -alien.width;
	explosion.style.display = 'none';
	alien.style.left = positionAlien + 'px';
	setTimeout(moveAlien, 1);
}