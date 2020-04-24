var timer = null;
var countdownNumber = 10;



var changeState = function (state) {
	document.body.className = 'body-state'+state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;


	// countdown
	if (state == 2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber-1;
			document.getElementById('countdown').innerHTML = countdownNumber;

			if (countdownNumber > 5 && countdownNumber <= 9) {
				// be nervous
				document.getElementById('earth').className = 'earth show';
			} else{
				document.getElementById('earth').className = 'earth';
			}

			if (countdownNumber > 1 && countdownNumber <= 5) {
				// can't wait
				document.getElementById('tacos').className = 'tacos show';
			} else {
				document.getElementById('tacos').className = 'tacos';
			}

			if (countdownNumber <= 0) {
				changeState(3);
			};
		}, 500);


	} else if (state == 3) {
		var success = setTimeout(function () {
				var randomNumber = Math.round(Math.random()*10);

				console.log('randomNumber:', randomNumber)

				// succes
				if (randomNumber > 7) {
					changeState(4);

				} else {
					changeState(5); // oh no!

				}
		}, 2500);
	};
	
	if (state == 1) {
		document.getElementById('ufo').className = 'startup';
		document.getElementById('tacos').className = 'tacos';
		document.getElementById('earth').className = 'earth';
		document.getElementById('worry').className.baseVal = 'worry';
	    document.getElementById('smile').className.baseVal = 'smile';
	    document.getElementById('shock').className.baseVal = 'shock';
	    document.getElementById('truster').className.baseVal = 'truster';
		document.getElementById('trusterC').className.baseVal = 'truster C';
		document.getElementById('trusterB').className.baseVal = 'truster B';
		document.getElementById('rightleg').className.baseVal = 'rightleg';
		document.getElementById('leftleg').className.baseVal = 'leftleg';
		document.getElementById('explode').className = 'explode';
	

	};

	if (state == 2) {
	document.getElementById('worry').className.baseVal = 'worryon';
	document.getElementById('smile').className.baseVal = 'smileoff';
	document.getElementById('shock').className.baseVal = 'shock';
    document.getElementById('truster').className.baseVal = 'truster trusterstart';
	document.getElementById('trusterC').className.baseVal = 'truster C trusterstart';
	document.getElementById('trusterB').className.baseVal = 'truster B trusterstart';	
	};

	if (state == 3) {
	document.getElementById('worry').className.baseVal = 'worry';
	document.getElementById('smile').className.baseVal = 'smileoff';
	document.getElementById('shock').className.baseVal = 'shockon';
    document.getElementById('truster').className.baseVal = 'truster inmotiontruster';
	document.getElementById('trusterC').className.baseVal = 'truster C inmotiontruster';
	document.getElementById('trusterB').className.baseVal = 'truster B inmotiontruster';
	document.getElementById('rightleg').className.baseVal = 'rightleg rightlegon';
	document.getElementById('leftleg').className.baseVal = 'leftleg leftlegon';


	}

    if (state == 5) {
	document.getElementById('ufo').className = 'hide';
	document.getElementById('explode').className = 'explodeshow';




	}
}






