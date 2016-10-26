'use strict';

function Thermostat(){
  this.temperature = 20
  this.MIN_TEMPERATURE = 10
  this.MAX_TEMPERATURE = 32
}

Thermostat.prototype.increaseTemp = function(amount){
  this.temperature += amount;
}

Thermostat.prototype.decreaseTemp = function (amount) {
  this.temperature -= amount;
}

Thermostat.prototype.powerSaveModeOn = function() {
  this.MAX_TEMPERATURE = 25;
}

Thermostat.prototype.powerSaveModeOff = function() {
  this.MAX_TEMPERATURE = 32;
}
