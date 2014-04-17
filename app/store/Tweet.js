Ext.define('tweet-the-weather.store.Tweet',{
    extend: 'Ext.data.Store',
    requires:[
        'tweet-the-weather.model.Tweet',
    ],
    config: {
        model: 'tweet-the-weather.model.Tweet',
        storeId: 'Tweet',
        proxy: {
			type: 'ajax',
			url : 'http:/localhost:9000/resources/tweets.json',
			reader: {
				type: 'json',
			},
		autoLoad: 'true'
		}
    }
});