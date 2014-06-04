Ext.define('TweetTheWeather.view.AboutSection', {
    extend: 'Ext.dataview.List',
	requires: [
        'TweetTheWeather.store.Developers'
    ],
	id: 'developerList',

    config: {
		items: [
            {
                xtype: 'titlebar',
                title: 'Developers',
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
                xtype: 'list',
                store: 'Developers',
                itemHeight: 89,
                emptyText: 'Loading list of Developers...',
                itemTpl: [
                    '<div class="developer-list-item">',
                        '<img src="http://www.gravatar.com/avatar/{image_src}.jpeg">&nbsp{lastName}, {firstName}',
                    '</div>'
                ]
            }
        ]
    }
});