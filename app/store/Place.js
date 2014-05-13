Ext.define('TweetTheWeather.store.Place', {
    extend: 'Ext.data.Store',
    
    config: {
        storeId: 'PlaceStore',    
        model: 'TweetTheWeather.model.Place',
        autoLoad:true, 
            proxy: {
                type: 'jsonp',
                url: 'http://api.worldweatheronline.com/free/v1/weather.ashx?q='+coords.latitude+'%2C'+coords.longitude+'&format=json&num_of_days=5&callback=callback&key=tsd3famkb4qeau8d9fx7gmjt',
                callbackKey: 'callback',
                callback: function(data){
                    console.log(data.search_api.result[0].areaName[0].value);
                },
                reader: {
                    type: 'json',
                    rootProperty: 'search_api',
                    record: 'result'
                }
            }
    },
    initialize: function(){
        Geolocation.getCurrentCoordinates(function(err, coords) {
            if(err && err.message === 'User denied Geolocation') {
                return alert('You have to allow Geolocation!');
            }
        });
    }
});
