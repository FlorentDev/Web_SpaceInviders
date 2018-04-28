var vaisseau;
var position;
var direction = 0;

function press() {
	if (event.keyCode == 81) {
		direction = -1;
	}
	else if(event.keyCode == 68){
		direction = 1
	}
}

function release(){
	if(event.keyCode == 81 || event.keyCode == 68){
		direction = 0;
	}
}

window.addEventListener('keydown', function(){press();});
window.addEventListener('keyup', function(){release();});

function deplacement(){
	switch(direction){
		case -1:
			position-=1;
			vaisseau.style.left = position + "px";
			break;
		case 0:
			break;
		case 1:
			position+=1;
			vaisseau.style.left = position + "px";
			break;
	}
	setTimeout(deplacement, 3);
}

function initShip(){
	vaisseau = document.getElementById('vaisseau');
	position = window.innerWidth;
	direction = 0;
	position=position/2
	vaisseau.style.left = position+"px";
	setTimeout(deplacement, 3);
}