Ext.define('TweetTheWeather.view.Main', {
    extend: 'Ext.NavigationView', 
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        

        items: [
            {
                title: 'Tweet the Weather',
                
		items: [
			
			{xtype: 'label' , 
			html: '<div align = "center"> <font size = "3"> Buenos Aires, Argentina <br><br> </font> <font size = "7"> <b>35° C </b> </font> <br> </font> <font size = "5"><b>It&apos;s pretty hot!</b></font>  <br><br><br><font size = "3"> Do you like it? <br><br> </font></div> <br><br><img src="app/view/thumb-up.jpg"/width=146 height=166>       <img src="app/view/thumb-down.jpg"/width=146 height=166>',
			centered: true},
			
		]
                
                

                
            },
            
        ]
    }
});

