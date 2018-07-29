var connect = false;
var latitudeVar = '';
var longitudeVar = '';
var timestampVar = '';
var positionGlobal = {};

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
      document.getElementById("getPositionBtn").addEventListener("click", getPosition);
      document.getElementById("printLocationBtn").addEventListener("click", printLocation);
    }
};

function printLocation(){
  alert('Latitude: ' + latitudeVar + '\n' +
        'Longitude: ' + longitudeVar + '\n' +
        'timeStamp: ' + timestampVar);
}

function getPosition(){
  var onSuccess = function(position) {
    latitudeVar = position.coords.latitude;
    longitudeVar = position.coords.longitude;
    timestampVar = position.timestamp;

    alert('Sucessfully retrieved geoLocation');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

app.initialize();
