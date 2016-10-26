'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20
  this.MIN_TEMPERATURE = 10
  this.MAX_TEMPERATURE = 32
  this.powerSaveMode = true
  this.currentTemperature = this.DEFAULT_TEMPERATURE
}

Thermostat.prototype.increaseTemp = function(amount){
  if(this.currentTemperature + amount >= this.MAX_TEMPERATURE) {
    throw new Error("Cannot increase temperature beyond the maximum.");
  }
  this.currentTemperature += amount;
}

Thermostat.prototype.decreaseTemp = function (amount) {
  if(this.currentTemperature - amount <= this.MIN_TEMPERATURE) {
    throw new Error("Cannot decrease temperature beyond the min.");
  }
  this.currentTemperature -= amount;
}

Thermostat.prototype.powerSaveModeOn = function() {
  this.MAX_TEMPERATURE = 25;
  this.powerSaveMode = true;
}

Thermostat.prototype.powerSaveModeOff = function() {
  this.MAX_TEMPERATURE = 32;
  this.powerSaveMode = false;
}

Thermostat.prototype.resetTemp = function() {
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.colour = function() {
  if(this.currentTemperature < 18) {
    return 'Green';
  }

}
