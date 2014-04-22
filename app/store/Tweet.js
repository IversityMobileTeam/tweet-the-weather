Ext.define('TweetTheWeather.store.Tweet', {
    extend: 'Ext.data.Store',
    requires: [
        'TweetTheWeather.model.Tweet'
    ],
    config: {
        model: 'TweetTheWeather.model.Tweet',
        storeId: 'TweetStore',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: '/resources/tweets.json',
            reader: {
                type: 'json'
            }
        }
    }
});