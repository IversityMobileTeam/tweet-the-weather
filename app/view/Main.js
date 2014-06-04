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
		title: 'Tweet the Weather'
	     },
	     {
		layout:{
			type: 'vbox',
			align: 'center'
			},
			items: [
			    {
 				xtype: 'label' ,
				html: '<font size = "3"> Buenos Aires, Argentina</font>',
			    },
			    {
 				xtype: 'label' ,
				html: '<font size = "7"> <b>35° C </b> </font>',
			    },
			    {
 				xtype: 'label' ,
				html: '<font size = "5"><b>It&apos;s pretty hot!</b></font>',
			    },
			    {
 				xtype: 'label' ,
				html: '<font size = "3"> Do you like it? <br><br> </font>',
			    },
			    {
 				xtype: 'label' ,
				html: '<img src="app/view/thumb-up.jpg"/width=146 height=166>       <img src="app/view/thumb-down.jpg"/width=146 height=166>',
			    },
			]
	     }
      
            
        ]
    }
});

