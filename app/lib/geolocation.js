/*

Usage:

Geolocation.getCurrentCoordinates(function(err, coords) {
  if(err && err.message === 'User denied Geolocation') {
    return alert('You have to allow Geolocation!')
  }

  console.log(coords);
});

 */

if(!navigator.geolocation) {
  throw new Error('Geolocation not supported in this device');
}

var Geolocation = (function(geolocation) {
  return {

    getCurrentCoordinates: function(callback) {
      geolocation.getCurrentPosition(function(position) {

        var response = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };

        return callback(null, response);
      }, function(error) {
        return callback(error);
      });
    }

  };
})(navigator.geolocation);