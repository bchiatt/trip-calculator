var prompt = require('sync-prompt').prompt;

//user prompt space

console.log('***TRIP CALCULATOR***');

var mile = prompt('How far will you be travelling in miles? ');
mile = parseInt(mile);

var price = prompt('How much does gas currently cost? $');
price = parseFloat(price);

var auto = prompt('Which will you be driving: car or truck? ');

var tank = prompt('How large is your gas tank in gallons? ');
tank = parseInt(tank);

var mpg = prompt('How many miles per gallon (mpg) is your car rated? ');
mpg = parseInt(mpg);

var speed = prompt('How fast will you be driving in mph? ');
speed = parseInt(speed);

//calculations

var mpgReal
var mpgAdj

switch (auto) {
  case 'car':
    if (speed <= '55'){
      mpgReal = mpg;
    }else{
      mpgAdj = speed - 55;
      mpgReal = mpg - mpgAdj;
    };
    break;
  case 'truck':
    if (speed <= '55'){
      mpgReal = mpg;
    }else{
      mpgAdj = (speed - 55)*3;
      mpgReal = mpg - mpgAdj;
    };
    break;
  default:
    console.log("Please retry and enter 'car' or 'truck'.");
}

if (mpgReal <10) {
  mpgReal = 10;
}else{
};

var cost = (mile / mpgReal) * price;

var fillup = mile / (mpgReal * tank);

//final console.log

console.log();
console.log();
console.log();
console.log('***RESULTS***');
console.log('You will be driving', mile, 'miles.');
console.log('Your real world mpg will be', mpgReal, 'mpg.');
console.log('You can expect to pay $' + cost, 'on this trip.');
console.log('You will need to fill your tank', fillup, 'times.');
