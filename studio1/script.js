'use strict';

console.log ('reading.js');

document.querySelector('#s').addEventListener('click', processForm);
document.querySelector('#r').addEventListener('click', resetForm);

function processForm(evt) {

var cupcone = document.querySelector('#cupcone').value;
console.log('cupcone: '+ cupcone);

var flavor = document.querySelector('#flavor').value;
console.log('flavor: '+ flavor);

var candy = document.querySelector('#candy').value;
console.log('candy: '+ candy);

var fruit = document.querySelector('#fruit').value;
console.log('fruit: '+ fruit);

var sauce = document.querySelector('#sauce').value;
console.log('sauce: '+ sauce);

var myMsg = document.querySelector('#myMsg');
var msgSection = document.querySelector('#msgSection');

myMsg.innerHTML = 'Get ready to enjoy your <i>' + cupcone + '</i> filled to the brim with the richest <i>' + flavor + '</i> ice cream. Your sweet treat is topped off with the most decadent <i>' + candy + '</i>, the juiciest selection of <i>' + fruit + '</i>, and perfected with an elegant <i>' + sauce + '<i> drizzle.'

msgSection.className = 'show';

evt.preventDefault();
}

function resetForm() {
  msgSection.className= 'hide';
}
