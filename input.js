const wKey = keyboard(87),
	aKey = keyboard(65),
	sKey = keyboard(83),
	dKey = keyboard(68);
let keyx = 0,
	keyy = 0;

const fKey = keyboard(70);
let fire = false;

function input() {

	aKey.press = function() {
		--keyx;
	};

	aKey.release = function() {
		++keyx;
	};

	wKey.press = function() {
		--keyy;
	};
	wKey.release = function() {
		++keyy;
	};

	dKey.press = function() {
		++keyx;
	};
	dKey.release = function() {
		--keyx;
	};

	sKey.press = function() {
		++keyy;
	};
	sKey.release = function() {
		--keyy;
	};

	fKey.press = function(){
		fire = true;
	}

	fKey.release = function(){
		fire = false;
	}
}

function keyboard(keyCode) {
	var key = {};
	key.code = keyCode;
	key.isDown = false;
	key.isUp = true;
	key.press = undefined;
	key.release = undefined;
	//The `downHandler`
	key.downHandler = function(event) {
		if (event.keyCode === key.code) {
			if (key.isUp && key.press) key.press();
			key.isDown = true;
			key.isUp = false;
		}
		event.preventDefault();
	};

	//The `upHandler`
	key.upHandler = function(event) {
		if (event.keyCode === key.code) {
			if (key.isDown && key.release) key.release();
			key.isDown = false;
			key.isUp = true;
		}
		event.preventDefault();
	};

	//Attach event listeners
	window.addEventListener(
		"keydown", key.downHandler.bind(key), false
	);
	window.addEventListener(
		"keyup", key.upHandler.bind(key), false
	);
	return key;
}