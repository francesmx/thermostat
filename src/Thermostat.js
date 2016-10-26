'use strict';

function Thermostat(){
  this.temperature = 20
  this.MIN_TEMPERATURE = 10
  this.MAX_TEMPERATURE = 32
  this.powerSaveMode = true
}

Thermostat.prototype.increaseTemp = function(amount){
  this.temperature += amount;
}

Thermostat.prototype.decreaseTemp = function (amount) {
  this.temperature -= amount;
}

Thermostat.prototype.powerSaveModeOn = function() {
  this.MAX_TEMPERATURE = 25;
  this.powerSaveMode = true;
}

Thermostat.prototype.powerSaveModeOff = function() {
  this.MAX_TEMPERATURE = 32;
  this.powerSaveMode = false;
}
