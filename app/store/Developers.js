Ext.define('TweetTheWeather.store.Developers', {
    extend: 'Ext.data.Store',
    config: {
        model: 'TweetTheWeather.model.Developers',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: '/resources/developers.json',
            reader: {
                type: 'json',
                rootProperty: 'developers'
            }
        }
    }
});