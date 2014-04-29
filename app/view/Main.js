Ext.define('TweetTheWeather.view.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.MainView',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    },
    initialize: function(){
        Geolocation.getCurrentCoordinates(function(err, coords) {
                if(err && err.message === 'User denied Geolocation') {
                    return alert('You have to allow Geolocation!')
                }
            
            Ext.data.JsonP.request(
                { 
                    url: 'http://api.worldweatheronline.com/free/v1/weather.ashx?q='+coords.latitude+'%2C'+coords.longitude+'&format=json&num_of_days=5&key=tsd3famkb4qeau8d9fx7gmjt',
                    method:'GET',
                    success: function(result, request) {
                        console.log(result.data.current_condition[0].temp_C);
                    }
                }
            );
            
            Ext.data.JsonP.request(
                { 
                    url: 'http://api.worldweatheronline.com/free/v1/search.ashx?key=tsd3famkb4qeau8d9fx7gmjt&query='+coords.latitude+'%2C'+coords.longitude+'&num_of_results=1&format=json',
                    method:'GET',
                    success: function(cityname, request) {
                        console.log(cityname.search_api.result[0].areaName[0].value);
                    }
                }
            ); // just send the location name and the temperature to console according to geolocation
        });
    }
});
