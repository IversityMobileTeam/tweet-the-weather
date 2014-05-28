Ext.define('TweetTheWeather.view.AboutSection', {
    extend: 'Ext.Container',
    requires: [
        'Ext.List',
        'Ext.Label',
        'Ext.Image'
    ],
    alias: 'widget.AboutSectionView',
    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'list',
                itemId: 'AboutPage',
                ui: 'round',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'image',
                                src: 'http://www.gravatar.com/avatar/2b0aa71e3d31c0c4709ad2718655c2ac'
                            },
                            {
                                xtype: 'label',
                                text: 'My Name1'
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'image',
                                src: 'http://www.gravatar.com/avatar/2b0aa71e3d31c0c4709ad2718655c2ac'
                            },
                            {
                                xtype: 'label',
                                text: 'My Name2'
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'image',
                                src: 'http://www.gravatar.com/avatar/2b0aa71e3d31c0c4709ad2718655c2ac'
                            },
                            {
                                xtype: 'label',
                                text: 'My Name3'
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'image',
                                src: 'http://www.gravatar.com/avatar/2b0aa71e3d31c0c4709ad2718655c2ac'
                            },
                            {
                                xtype: 'label',
                                text: 'My Name4'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});