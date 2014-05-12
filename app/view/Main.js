 Ext.define('TweetTheWeather.view.Main', {
	extend: 'Ext.NavigationView', 
    xtype: 'main',
    requires: [
     	'Ext.TitleBar',
    ],
    config: {       
		items: [
			{
	      		title: 'Tweet the Weather'
 	   		},
 	   		{
 	      		layout: {
 	      			type: 'vbox',
					cls: 'my-class',
					align: 'center'
	      		},
	      		items: [
	         		{
 						xtype: 'label' ,
						html: '<p class ="small"> Buenos Aires, Argentina</p>'
		            },
 			    	{
  						xtype: 'label' ,
 						html: '<p class ="big"> <b>35° C </b> </p>'
 			    	},
 			    	{
  						xtype: 'label' ,
 						html: '<p class ="medium"><b>It&apos;s pretty hot!</b></p>'
 			    	},
 			    	{
  						xtype: 'label' ,
 						html: '<p class ="small"> Do you like it? <br><br> </p>'
		            },
			    	{
 						layout: {
							type: 'vbox',
							align: 'center'
						},
						items: [
 			    			{
  								xtype: 'label' ,
								left: '10px',
 								html: '<img src="app/view/thumb-down.jpg"/width=146 height=166>'
		            		},
 			    			{
  								xtype: 'label' ,
								right: '10px',
 								html: '<img src="app/view/thumb-up.jpg"/width=146 height=166>'
			    			},
						]		
 					}
				]		
 	     	} 
         ]
      }
  });
 
