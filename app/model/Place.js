Ext.define('TweetTheWeather.model.Place', {
    extend: 'Ext.data.Model',
    config: {
      fields: [
        { name: 'areaName', type: 'string' },
        { name: 'country', type: 'string' }
      ]
    }
});
