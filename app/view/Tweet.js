Ext.define('TweetTheWeather.view.Tweet', {
    extend: 'Ext.Container',
    requires: [
        'Ext.TitleBar',
        'Ext.Button',
		'Ext.TextArea'
    ],
    alias: 'widget.TweetView',
    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'titlebar',
                title: 'Editing Tweet',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        ui: 'back',
                        id: 'backButton'
                    }
                ]
            },
            {
                xtype: 'textareafield',
				grow: true,
                name: 'TweetText'                
            },
			{
                xtype: 'button',
                text: 'Tweet!',
                ui: 'confirm',
                id: 'tweetButton'
            }
        ]
     }
});
