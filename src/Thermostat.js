'use strict';

function Thermostat(){
  this.MIN_TEMPERATURE = 10
  this.MAX_TEMPERATURE = 25
  this.DEFAULT_TEMPERATURE = 20
  this.powerSaveMode = true
  this.currentTemperature = this.DEFAULT_TEMPERATURE
}

Thermostat.prototype.getCurrentTemp = function(){
  return this.currentTemperature;
}

Thermostat.prototype.increaseTemp = function(){
  if(this.currentTemperature + 1 > this.MAX_TEMPERATURE) {
    throw new Error("Cannot increase temperature beyond the maximum.");
  }
  this.currentTemperature += 1;
}

Thermostat.prototype.decreaseTemp = function () {
  if(this.currentTemperature - 1 < this.MIN_TEMPERATURE) {
    throw new Error("Cannot decrease temperature beyond the min.");
  }
  this.currentTemperature -= 1;
}

Thermostat.prototype.powerSaveModeOn = function() {
  this.MAX_TEMPERATURE = 25;
  if(this.currentTemperature > this.MAX_TEMPERATURE) {
    this.currentTemperature = 25;
  }
  this.powerSaveMode = true;
}

Thermostat.prototype.powerSaveModeOff = function() {
  this.MAX_TEMPERATURE = 32;
  this.powerSaveMode = false;
}

Thermostat.prototype.togglePowerSaveMode = function() {
  if(this.powerSaveMode === true) {
    this.powerSaveModeOff();
  } else {
    this.powerSaveModeOn();
  };
};

Thermostat.prototype.resetTemp = function() {
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.colour = function() {
  if(this.currentTemperature < 18) {
    return 'green';
  }
  if(this.currentTemperature < 25) {
    return 'yellow';
  }
  return 'red';
}
