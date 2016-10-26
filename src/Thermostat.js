'use strict';

function Thermostat(){
  this.temperature = 20
}

Thermostat.prototype.increaseTemp = function(amount){
  this.temperature += amount;
}

Thermostat.prototype.decreaseTemp = function (amount) {
  this.temperature -= amount;
}
