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
				cls: 'font--small',
				html: ['Buenos Aires, Argentina'],
		            },
 			    {
  				xtype: 'label',
				cls: ['font--big','font--bold'],
 				html: '35° C',
 			    },
 			    {
  				xtype: 'label',
				cls: ['font--medium','font--bold'],
 				html: 'It&apos;s pretty hot!',
 			    },
 			    {
  				xtype: 'label',
				cls: 'font--small',
 				html:'Do you like it?',
		            },
			    {
 				layout: {
				type: 'hbox',
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