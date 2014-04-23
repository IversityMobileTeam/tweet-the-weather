Ext.define('TweetTheWeather.view.TweetList', {
    extend: 'Ext.Container',
    requires: [
        'Ext.dataview.List',
        'Ext.TitleBar',
        'Ext.Button',
        'TweetTheWeather.store.Tweet',
    ],
    alias: 'widget.tweetlist',
    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'titlebar',
                title: 'Tweets',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        ui: 'back',
                        id: 'back-btn'
                    }
                ]
            },
            {
                xtype: 'list',
                store: 'TweetStore',
                itemId: 'TweetList',
                loadingText: 'Loading Tweets...',
                emptyText: '<div class="tweet-list__empty">No tweets found.</div>',
                onItemDisclosure: true,
                itemTpl: '<div class="tweet-list__item">{text}</div>'
            }
        ]
     }
});
