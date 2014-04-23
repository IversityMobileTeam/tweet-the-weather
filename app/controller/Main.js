Ext.define('TweetTheWeather.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [
        'TweetTheWeather.view.TweetList'
    ],
    config: {
        views: [
            'Main'
        ],
        refs: {
            likeButton: 'likeButton',
            dislikeButton: 'dislikeButton'
        },
        control: {
            '#likeButton': {
                tap: 'onLikeButton'
            },
            '#dislikeButton': {
                tap: 'onDislikeButton'
            }
        }
    },

    onLikeButton: function(button, event, options) {
        // TODO
    },

    onDislikeButton: function(button, event, options) {
        // TODO
    }
});
