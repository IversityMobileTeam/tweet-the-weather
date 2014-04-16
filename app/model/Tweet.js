Ext.define('TweetTheWeather.model.Tweet', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'text', type: 'string' },
            { name: 'positive', type: 'boolean' },
            { name: 'tags', type: 'auto' }
        ]
    }
});
