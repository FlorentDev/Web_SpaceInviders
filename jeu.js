var vitesse = 1;

function reset(){
	alien.style.display = 'block';
	explosion.style.display = 'none';
	vitesse++;

}

function colision(){
	if (positionAlien<positionMissileX
		&& positionAlien+alien.width>positionMissileX
		&& hauteurAlien<window.innerHeight-positionMissile
		&& hauteurAlien+alien.height>window.innerHeight-positionMissile
		||
		positionAlien<positionMissileX
		&& positionAlien+alien.width>positionMissileX
		&& hauteurAlien<window.innerHeight-positionMissile-missile.height
		&& hauteurAlien+alien.height>window.innerHeight-positionMissile-missile.height
		||
		positionAlien<positionMissileX+missile.width
		&& positionAlien+alien.width>positionMissileX+missile.width
		&& hauteurAlien<window.innerHeight-positionMissile
		&& hauteurAlien+alien.height>window.innerHeight-positionMissile
		||
		positionAlien<positionMissileX+missile.width
		&& positionAlien+alien.width>positionMissileX+missile.width
		&& hauteurAlien<window.innerHeight-positionMissile-missile.height
		&& hauteurAlien+alien.height>window.innerHeight-positionMissile-missile.height
		)
	{
			alien.style.display = 'none';
			explosion.style.left = alien.style.left;
			explosion.style.display = 'block';
			setTimeout(reset, 3000);
			setTimeout(colision, 3000);
	}
	else{
		setTimeout(colision, 1);
	}
}

function init(){
	initShip();
	initMissile();
	initAlien();
	colision();
}

window.onload = init;