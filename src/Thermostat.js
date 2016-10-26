function Thermostat(){
  this.temperature = 20
}

Thermostat.prototype.increaseTemp = function(amount){
  this.temperature += amount;
}
