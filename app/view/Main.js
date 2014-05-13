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
	align: 'center'
		},
		items: [
			    {
 				xtype: 'label',
				cls: ['font--small'],
				html: '<p> Buenos Aires, Argentina</p>',
		            },
 			    {
  				xtype: 'label',
				cls: ['font--big','font--bold'],
 				html: '<p>35° C</p>',
 			    },
 			    {
  				xtype: 'label',
				cls: ['font--medium','font--bold'],
 				html: '<p>It&apos;s pretty hot!</p>',
 			    },
 			    {
  				xtype: 'label',
				cls: ['font--small'],
 				html: '<p> Do you like it?</p>',
		            },
			    {
 				layout: {
				type: 'vbox',
				align: 'center'
					},
					items: [
 			    			{
  						xtype: 'label',
						left: '10px',
 						html: '<img src="resources/images/thumb-down.jpg"/width=146 height=166>',
		            			},
 			    			{
  						xtype: 'label',
						right: '10px',
 						html: '<img src="resources/images/thumb-up.jpg"/width=146 height=166>',
			    			},
						]		
 					     }
			]		
 	    	 } 
         	 ]
     	 }
  }); 