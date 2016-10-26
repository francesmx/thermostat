'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('start conditions', function(){

    it('starts with temperature at 20', function(){
      expect(thermostat.currentTemperature).toEqual(20)
    });

    it('starts with a max temperature of 32', function(){
      expect(thermostat.MAX_TEMPERATURE).toEqual(32)
    });

    it('starts with a minimum temperature of 10', function(){
      expect(thermostat.MIN_TEMPERATURE).toEqual(10)
    });

    it('starts with power saving mode on by default', function(){
      expect(thermostat.powerSaveMode).toBe(true)
    });
  });

  describe('changing temperature', function(){

    it('increasing the temperature', function(){
      thermostat.increaseTemp(2);
      expect(thermostat.currentTemperature).toEqual(22)
    });

    it("won't increase the temperature beyond the maximum", function(){
      expect(function(){ thermostat.increaseTemp(thermostat.MAX_TEMPERATURE); }).toThrowError('Cannot increase temperature beyond the maximum.');
    });

    it('decreasing the temperature', function(){
      thermostat.decreaseTemp(2);
      expect(thermostat.currentTemperature).toEqual(18)
    });
  });

  describe('power saving mode', function(){

    it('if on, max temperature is 25', function(){
      thermostat.powerSaveModeOn();
      expect(thermostat.MAX_TEMPERATURE).toEqual(25);
    });

    it('if off, max temperature is 32', function(){
      thermostat.powerSaveModeOff();
      expect(thermostat.MAX_TEMPERATURE).toEqual(32);
    });
  });

  describe('reset temperature', function(){

    it('resets temperature to 20', function(){
      thermostat.increaseTemp(100);
      thermostat.resetTemp();
      expect(thermostat.currentTemperature).toEqual(20)
    });
  });
});
