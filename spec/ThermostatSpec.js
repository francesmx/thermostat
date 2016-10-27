'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('start conditions', function(){

    it('starts with temperature at 20', function(){
      expect(thermostat.getCurrentTemp()).toEqual(20)
    });

    it('starts with a max temperature of 25', function(){
      expect(thermostat.MAX_TEMPERATURE).toEqual(25)
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
      thermostat.increaseTemp();
      expect(thermostat.getCurrentTemp()).toEqual(21)
    });

    it("won't increase the temperature beyond the maximum", function(){
      thermostat.powerSaveModeOff();
      for (var i = 0; i < 12 ; i++) {
        thermostat.increaseTemp();
      }
      expect(function(){ thermostat.increaseTemp(); }).toThrowError("Cannot increase temperature beyond the maximum.");
    });

    it('decreasing the temperature', function(){
      thermostat.decreaseTemp();
      expect(thermostat.getCurrentTemp()).toEqual(19)
    });

    it("won't decrease the temperature beyond the minimum", function(){
      for (var i = 0; i < 10; i++) {
        thermostat.decreaseTemp();
      }
      expect(function(){ thermostat.decreaseTemp(); }).toThrowError('Cannot decrease temperature beyond the min.');
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

    it('toggles power save mode', function(){
      thermostat.togglePowerSaveMode();
      expect(thermostat.powerSaveMode).toEqual(false);
    });

  });

  describe('reset temperature', function(){

    it('resets temperature to 20', function(){
      thermostat.increaseTemp();
      thermostat.resetTemp();
      expect(thermostat.getCurrentTemp()).toEqual(20)
    });
  });

  describe('display colour', function(){

    it('displays green when below 18 degrees', function(){
      for (var i = 0; i < 4 ; i++) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.colour()).toEqual('green')
    });
  });

  it('displays yellow when 18 to 25 degrees', function(){
    expect(thermostat.colour()).toEqual('yellow')
  });

  it('displays red when over 25 degrees', function(){
    thermostat.powerSaveModeOff();
    for (var i = 0; i < 7 ; i++) {
      thermostat.increaseTemp();
    }
    expect(thermostat.colour()).toEqual('red')
  });
});
