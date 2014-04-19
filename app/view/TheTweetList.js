Ext.define("TweetTheWeather.view.TheTweetList", {
    extend: "Ext.Container",
    requires:"Ext.dataview.List",
    alias: "widget.tweetview",

    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "toolbar",
            title: "TweetList",
            docked: "top",
            items: [
               
                {
                    xtype: "button",
                    text: 'Back',
                    ui: 'back',
                    itemId: "backButton"
                },
                 { xtype: 'spacer' },
            ]
        }, {
            xtype: "list",
            store: "TweetStore",
            itemId:"TweetList",
            loadingText: "Loading Notes...",
            emptyText: '<div class="tweet-list-empty-text">No tweets found.</div>',
            onItemDisclosure: true,
           
            itemTpl: '<div class="list-tweet-text">{text}</div>'
        }],
        listeners: [{
            delegate: "#backButton",
            event: "tap",
            fn: "onBackButtonTap"
        }, {
            delegate: "#TweetList",
            event: "disclose",
            fn: "onTweetListDisclose"
        }]
    },
    onBackButtonTap: function () {
        console.log("backTweetCommand");
        this.fireEvent("backTweetCommand", this);
    },
    onTweetListDisclose: function (list, record, target, index, evt, options) {
        console.log("moreTweetCommand");
        this.fireEvent('moreTweetCommand', this, record);
    }
});
