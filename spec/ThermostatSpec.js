'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });


  it('starts with temperature at 20', function(){
    expect(thermostat.temperature).toBe(20)
  });

  describe('changing temperature', function(){
    it('increasing the temperature', function(){
      thermostat.increaseTemp(2);
      expect(thermostat.temperature).toBe(22)
    });
  });
});
