var missile;
var positionMissile;
var missileVisibility
var positionMissileX;

function initMissile(){
	missile = document.getElementById('missile');
	missile.style.display = 'none';
	missileVisibility = 0;
}

function missileUp(){
	if (positionMissile<window.innerHeight) {
		positionMissile+=2;
		missile.style.bottom = positionMissile + 'px';
		setTimeout(missileUp, 5);
	}
	else {
		missileVisibility = 0;
		missile.style.display = 'none';
	}
}

function shoot(){
	if(event.keyCode == 32 && missileVisibility == 0){
		missileVisibility = 1;
		missile.style.display = 'block';
		positionMissile = 100;
		missile.style.bottom = positionMissile + 'px';
		positionMissileX = position;
		missile.style.left = positionMissileX + 'px';
		missileUp();
	}
}

window.addEventListener('keypress', function(){shoot();});