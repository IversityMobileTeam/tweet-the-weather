Ext.define('TweetTheWeather.store.Tweet', {
    extend: 'Ext.data.Store',
    requires: [
        'TweetTheWeather.model.Tweet'
    ],
    model: 'TweetTheWeather.model.Tweet',
    storeId: 'TweetStore',
    proxy: {
		type: 'ajax',
		url: '/resources/tweets.json',
		reader: {
			type: 'json'
		}
	}
});