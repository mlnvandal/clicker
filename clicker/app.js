"use strict";

var total;

// Коэффициенты (улучшения)
var multFirst;
var multSecond;
var multThird;
var multFourth;

// Переменные значений
var counter;
var mult;

// Переменная клика по основной кнопке
var click;

// Константа основной кнопки
var BUTTON = document.getElementById('clickbut');

// Переменная кнопки увеличения актуального коэффициента First, Second и т.д
var buttonMultFirst = document.getElementById('multfirst');
var buttonMultSecond = document.getElementById('multsecond');
var buttonMultThird = document.getElementById('multthird');
var buttonMultFourth = document.getElementById('multfourth');

// Переменная поля счетчика
var resultSpan = document.getElementById('resultspan');

// Переменная поля коэффициента
var multSpan = document.getElementById('multspan');

// Переменные активации бонусова
var secondBonusActivate = false;
var thirdBonusActivate = false;
var fourthBonusActivate = false;

var secondBonusEvent = 0;
var thirdBonusEvent = 0;
var fourthBonusEvent = 0;

// Переменные стоимости бонусов
var multFirstPrice = 10;
var multSecondPrice = 1000;
var multThirdPrice = 1000000;
var multFourthPrice = 1000000000;

// Переменные вывода стоимости бонусов во фронт
var multFirstPriceSpan = document.getElementById('multfirstprice');
var multSecondPriceSpan = document.getElementById('multsecondprice');
var multThirdPriceSpan = document.getElementById('multthirdprice');
var multFourthPriceSpan = document.getElementById('multfourthprice');

// Переменная денег
var $baks = 0;


// Переменные UI
var handLeft = document.getElementById('handleft');
var handRight = document.getElementById('handright');
var eyes = document.getElementById('eyes');
var handshake = 0;
var firstSkill = document.getElementById('firstskill');
var secondSkill = document.getElementById('secondskill');
var thirdSkill = document.getElementById('thirdskill');
var fourthSkill = document.getElementById('fourthskill');
var $baksUi = document.getElementById('baks');

// Присваиваем начальное значение счетчика и коэффициента
counter = 0;
mult = 0;

// Присваиваем значения коэффициентов улучшения
multFirst = 2;
multSecond = 20;
multThird = 100;
multFourth = 2000;

// Получаем событие с кнопки для активации скрипта
BUTTON.addEventListener("mousedown", clickEvent);

// Основная функция увеличения счетчика
function clickEvent() {
	counter = ++counter + mult;
	resultSpan.innerHTML = counter;
	if (!handshake == 0) {
		handshake = 0;
		handLeft.setAttribute('style', 'transform: scaleY(1.2);transform-origin: top;');
		setTimeout(function() {
			handLeft.setAttribute('style', 'transform: scaleY(1);transform-origin: top;')
		}, 100);
	}
	else {
		handshake = 1;
		handRight.setAttribute('style', 'transform: scaleY(1.2);transform-origin: top;');
		setTimeout(function() {
			handRight.setAttribute('style', 'transform: scaleY(1);transform-origin: top;')
		}, 100);
	};
};

// Получаем событие с кнопки увеличения коэффициента First, Second и т.д.
buttonMultFirst.addEventListener("mousedown", addMultFirst);
buttonMultSecond.addEventListener("mousedown", addMultSecond);
buttonMultThird.addEventListener("mousedown", addMultThird);
buttonMultFourth.addEventListener("mousedown", addMultFourth);

// Функция увеличения коэффициента First, Second и т.д.
function addMultFirst() {
	if (counter >= multFirstPrice) {
		mult = ++mult;
		counter = counter - multFirstPrice;
		multFirstPrice = ++multFirstPrice + mult;
		multFirstPriceSpan.innerHTML = 'need ' + multFirstPrice + 'strings';
		resultSpan.innerHTML = counter;
		multSpan.innerHTML = mult;
		firstSkill.setAttribute('style', 'transform: scale(1) translateY(-50%) translateX(-50%);');
		setTimeout (function() {
			firstskill.setAttribute('style', 'transform: scale(5) translateY(-50%) translateX(-50%); visibility: hidden;')
		}, 200);
		$baks = $baks + mult;
		$baksUi.innerHTML = '$' + $baks;
	};
};

function addMultSecond() {
	if (counter >= multSecondPrice) {
		counter = counter - multSecondPrice;
		multSecondPrice = multSecondPrice + multSecondPrice;
		multSecondPriceSpan.innerHTML = 'need ' + multSecondPrice + 'strings';
		resultSpan.innerHTML = counter;
		if (!secondBonusActivate) {
			secondBonus();
			secondBonusActivate = true;
		};
		secondBonusEvent = ++secondBonusEvent;
		$baks = $baks + mult * 10;
		$baksUi.innerHTML = '$' + $baks;
	};
};

function addMultThird() {
	if (counter >= multThirdPrice) {
		counter = counter - multThirdPrice;
		multThirdPrice = ++multThirdPrice;
		multThirdPriceSpan.innerHTML = 'need ' + multThirdPrice + 'strings';
		resultSpan.innerHTML = counter;
		if (!thirdBonusActivate) {
			thirdBonus();	
		};
		thirdBonusEvent = ++thirdBonusEvent;
	};
};

function addMultFourth() {
	if (counter >= multFourthPrice) {
		counter = counter - multFourthPrice;
		multFourthPrice = ++multFourthPrice;
		multFourthPriceSpan.innerHTML = 'need ' + multFourthPrice + 'strings';
		resultSpan.innerHTML = counter;
		if (!fourthBonusActivate) {
			fourthBonus();	
		};
		fourthBonusEvent = ++fourthBonusEvent;
	};
};

// Функция для добавляения постоянного бонуса

function secondBonus() {
	setInterval(function() {
		counter = ++counter + secondBonusEvent;
		resultSpan.innerHTML = counter;
		if (!handshake == 0) {
		handshake = 0;
		handLeft.setAttribute('style', 'transform: scaleY(1.2);transform-origin: top;');
			setTimeout(function() {
				handLeft.setAttribute('style', 'transform: scaleY(1);transform-origin: top;')
			}, 100);
		}
		else {
			handshake = 1;
			handRight.setAttribute('style', 'transform: scaleY(1.2);transform-origin: top;');
			setTimeout(function() {
				handRight.setAttribute('style', 'transform: scaleY(1);transform-origin: top;')
			}, 100);
		};
	}, 500);
};

function thirdBonus() {
	setInterval(function() {
		counter = counter + 10 + thirdBonusEvent;
		resultSpan.innerHTML = counter;
		if (!handshake == 0) {
		handshake = 0;
		handLeft.setAttribute('style', 'transform: scaleY(1.2);transform-origin: top;');
			setTimeout(function() {
				handLeft.setAttribute('style', 'transform: scaleY(1);transform-origin: top;')
			}, 100);
		}
		else {
			handshake = 1;
			handRight.setAttribute('style', 'transform: scaleY(1.2);transform-origin: top;');
			setTimeout(function() {
				handRight.setAttribute('style', 'transform: scaleY(1);transform-origin: top;')
			}, 100);
		};
	}, 1000);
};

function fourthBonus() {
	setInterval(function() {
		counter = counter + 100 + fourthBonusEvent;
		resultSpan.innerHTML = counter;
		if (!handshake == 0) {
		handshake = 0;
		handLeft.setAttribute('style', 'transform: scaleY(1.2);transform-origin: top;');
			setTimeout(function() {
				handLeft.setAttribute('style', 'transform: scaleY(1);transform-origin: top;')
			}, 100);
		}
		else {
			handshake = 1;
			handRight.setAttribute('style', 'transform: scaleY(1.2);transform-origin: top;');
			setTimeout(function() {
				handRight.setAttribute('style', 'transform: scaleY(1);transform-origin: top;')
			}, 100);
		};
	}, 1000);
};



