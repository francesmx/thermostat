$(document).ready(function() {
    var thermostat = new Thermostat();
    $('#temperature').text(thermostat.temperature());

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature());
        $('#temperature').attr('class', thermostat.energyUse());
    }

    $('#temp-up').click(function() {
        if ((thermostat.temperature() > 24) && (thermostat._powerSaving == true)) {
            alert("Power saving on - maximum thermostat temperature reached: 25 degrees")
        } else if ((thermostat.temperature() > 31) && (thermostat._powerSaving == false)) {
            alert("Power saving off - maximum thermostat temperature reached: 32 degrees")
        }
        thermostat.up();
        updateTemperature();
    });

    $('#temp-down').click(function() {
        if ((thermostat.temperature() < 11)) {
            alert("Power saving on - minimum thermostat temperature reached: 10 degrees")
        }
        thermostat.down();
        updateTemperature();
    });

    $('#psm-on').click(function() {
        thermostat.powerSavingOn();
        $('#power-saving-status').text('ON')
        updateTemperature();
    });

    $('#psm-off').click(function() {
        thermostat.powerSavingOff();
        $('#power-saving-status').text('OFF')
        updateTemperature();
    });

    $('#reset').click(function() {
        thermostat.reset();
        updateTemperature();
    });

    displayWeather('London');

    $('#select-city').submit(function(event) {
        event.preventDefault();
        var city = $('#current-city').val();
        displayWeather(city);
    });

    function displayWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
        var units = '&units=metric';
        $.get(url + token + units, function(data) {
            $('#current-temperature').text(data.main.temp);
        })
    }
})