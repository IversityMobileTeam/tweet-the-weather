Ext.define('TweetTheWeather.controller.Main', {
extend: 'Ext.app.Controller',

config: {
    views: [
        'Main'
    ],

    refs: {
        upBtn: 'upBtn',
        downBtn: 'downBtn'
        
    },

    control: {
        '#upBtn': {
            tap: 'onUpBtn'
        },
        '#downBtn': {
            tap: 'onDownBtn'
        }
    }
},

onUpBtn: function(button, e, options) {
    button.up('navigationview').push({
        xtype: 'tweetlist',
        title: 'Positive Tweet'
    });
},

onDownBtn: function(button, e, options) {
    button.up('navigationview').push({
        xtype: 'tweetlist',
        title: 'Negative Tweet'
    });
}

});
