$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').on('click', function() { // event listener
    thermostat.increaseTemp(); // update model
    updateTemperature(); // update view
  })

  $('#temp-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.decreaseTemp();
    updateTemperature();
  })

  $('#temp-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  })

  $('#psm-on').click(function() {
    thermostat.powerSaveModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.powerSaveModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature);
    $('#temperature').attr('class', thermostat.colour());
  }

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=1d4c0b4fffcce18c6d389b6d114d489b';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }
})
