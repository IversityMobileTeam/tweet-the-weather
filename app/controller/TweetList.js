Ext.define('TweetTheWeather.controller.TweetList', {
    extend: 'Ext.app.Controller',
    requires: [
        'TweetTheWeather.view.TweetList'
    ],
    config: {
        views: [
            'TweetList'
        ],
        refs: {
            backButton: '#backButton'
        },
        control: {
            backButton: {
                tap: 'onBackButton'
            }
        }
    },

    onBackButton: function(button, event, options) {
        // TODO
    }

});
