Ext.define('TweetTheWeather.view.Tweet', {
    extend: 'Ext.form.Panel',
    xtype: 'tweet',
    requires: [
        'Ext.form.*',
        'Ext.TitleBar',
        'Ext.field.*',
        'Ext.Button',
        'Ext.TextArea'
    ],
    config: {
        title: 'Tweet',
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
                name: 'tweetText',
                xtype: 'textareafield',
                grow: true,
                placeHolder: 'Put your text here...'
            },
            {
                xtype: 'button',
                text: 'Tweet!!',
                id: 'tweetButton',
                ui: 'confirm'
            }
        ]
    }
});