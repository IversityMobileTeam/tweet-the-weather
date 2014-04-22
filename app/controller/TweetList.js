Ext.define("TweetTheWeather.controller.Main", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            backBtn: "#back-btn"
        },
        control: {
            backBtn: {
                tap: "onBackBtn"
            }
        }
    },
    onBackBtn: function () {
        console.log("onBackBtn");
    }
});
