Ext.define('TweetTheWeather.model.Developers', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'firstName', type: 'string' },
            { name: 'lastName', type: 'string' },
            { name: 'imageSrc', type: 'string' }
        ]
    }
});
