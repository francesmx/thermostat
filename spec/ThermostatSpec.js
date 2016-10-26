'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('start conditions', function(){

    it('starts with temperature at 20', function(){
      expect(thermostat.temperature).toEqual(20)
    });

    it('has a minimum temperature', function(){
      expect(thermostat.MIN_TEMPERATURE).toEqual(10)
    });
  });

  describe('changing temperature', function(){

    it('increasing the temperature', function(){
      thermostat.increaseTemp(2);
      expect(thermostat.temperature).toEqual(22)
    });

    it('decreasing the temperature', function(){
      thermostat.decreaseTemp(2);
      expect(thermostat.temperature).toEqual(18)
    });
  });
});
