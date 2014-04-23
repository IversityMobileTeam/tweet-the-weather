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
        button.up('navigationview').push({
            xtype: 'tweetlist',
            title: 'Positive Tweet'
        });
    },

    onDislikeButton: function(button, event, options) {
        button.up('navigationview').push({
            xtype: 'tweetlist',
            title: 'Negative Tweet'
        });
    }
});
