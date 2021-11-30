
    $(document).ready(function(){
    	        $( "#loader-wrapper" ).fadeOut( "slow" );
                
      });
    $(function () {
  $("[data-toggle=popover]").popover({html:true})
  $("#upgrade-pro").popover('show')

})



   document.getElementById("percent").innerHTML = "5";
   document.getElementById("percent-loaded").innerHTML = "5";

   $('#progress-bar').css({ "width" : "5%"});

   document.getElementById("progresstext").innerHTML = "Retrieving server info...";
   document.getElementById("progresstext-loaded").innerHTML = "Retrieving server info...";


      

        var bguse = ["https:\/\/i.imgur.com\/wmpejUk.png"        ,"https:\/\/i.imgur.com\/wmpejUk.png","https:\/\/i.imgur.com\/wmpejUk.png","https:\/\/i.imgur.com\/wmpejUk.png"        ];
     
    	//Change Progress
	$(document).ready(function(){

		$("#progresstext").text('Retrieving server info');
	
	for (let progress = 0; progress < 11; progress++) {
		setTimeout( function timer(){
	
	if(progress == 1){



	$("#progress-bar").animate({width: '10%'});
	
	$('#percent').each(function() {
  var $this = $(this),
      countTo = 10;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 2){
		
	$("#progresstext").text('Downloading files...');
	$("#progress-bar").animate({width: '20%'});
	
	
	$('#percent').each(function() {
  var $this = $(this),
      countTo = 20;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 3){
	
	$("#progress-bar").animate({width: '30%'});
	
	
	$('#percent').each(function() {
  var $this = $(this),
      countTo = 30;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 4){
	
	$("#progress-bar").animate({width: '40%'});
	
	
	$('#percent').each(function() {
  var $this = $(this),
      countTo = 40;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 5){
	
	$("#progress-bar").animate({width: '50%'});
	
	
	$('#percent').each(function() {
  var $this = $(this),
      countTo = 50;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	/*
	if(progress == 6){
	
	$("#progresstext").text('Workshop complete');
	$("#progress-bar").animate({width: '60%'});
	
	
	$('#percent').each(function() {
  var $this = $(this),
      countTo = 60;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	} */
	
	if(progress == 6){
		
	$("#progresstext").text('Finishing downloads...');
	$("#progress-bar").animate({width: '70%'});
	
	
	$('#percent').each(function() {
  var $this = $(this),
      countTo = 70;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 8){
	
	$("#progress-bar").animate({width: '80%'});
	
	
	$('#percent').each(function() {
  var $this = $(this),
      countTo = 80;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 9){
		
	$("#progresstext").text('Joining server...');
	$("#progress-bar").animate({width: '90%'});
	
	
	$('#percent').each(function() {
  var $this = $(this),
      countTo = 90;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 10){
	
	$("#progress-bar").animate({width: '100%'});
	
	
	$('#percent').each(function() {
  var $this = $(this),
      countTo = 100;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}


	if(progress == 1){
	
	$('#percent-loaded').each(function() {
  var $this = $(this),
      countTo = 10;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 2){
		
	$("#progresstext-loaded").text('Downloading files...');
	
	
	$('#percent-loaded').each(function() {
  var $this = $(this),
      countTo = 20;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 3){
	
	
	
	$('#percent-loaded').each(function() {
  var $this = $(this),
      countTo = 30;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 4){
	
	
	
	$('#percent-loaded').each(function() {
  var $this = $(this),
      countTo = 40;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 5){
	
	
	
	$('#percent-loaded').each(function() {
  var $this = $(this),
      countTo = 50;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	/*
	if(progress == 6){
	
	$("#progresstext").text('Workshop complete');
	$("#progress-bar").animate({width: '60%'});
	
	
	$('#percent').each(function() {
  var $this = $(this),
      countTo = 60;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	} */
	
	if(progress == 6){
		
	$("#progresstext-loaded").text('Finishing downloads...');
	
	
	$('#percent-loaded').each(function() {
  var $this = $(this),
      countTo = 70;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 8){
	
	
	
	$('#percent-loaded').each(function() {
  var $this = $(this),
      countTo = 80;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 9){
		
	$("#progresstext-loaded").text('Joining server');
	
	
	$('#percent-loaded').each(function() {
  var $this = $(this),
      countTo = 90;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}
	
	if(progress == 10){
	
	
	
	$('#percent-loaded').each(function() {
  var $this = $(this),
      countTo = 100;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 300,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
	
	}

	}, progress*2000 );
	} 

});


   
    	var currenttoggle = 0;
    	function toggleAudio(){
    		if(currenttoggle == 0){
    			$('#now-playing-icon-play').fadeOut('fast', function(){
	    			$('#now-playing-icon-mute').fadeIn('fast');
	    		});
	    		if(playerset == true){
	          		player.mute();
	          	}
	    		$('body audio').each(function(){
		             /*** Do it here globally ***/
		             $(this).prop('muted', true);
		          });
	    		currenttoggle = 1;
    		}else{
    			$('#now-playing-icon-mute').fadeOut('fast', function(){
	    			$('#now-playing-icon-play').fadeIn('fast');
	    		});
	    		if(playerset == true){
          			player.unMute();
          		}
	    		$('body audio').each(function(){
		             /*** Do it here globally ***/
		             $(this).prop('muted', false);
		          });
	    		currenttoggle = 0;
    		}

    	}

		//showDemo();
    $("#showDemo").fadeOut(0);
		function showDemo(){
			$("#showDemo").fadeIn(2000);
			setTimeout(function(){
				$("#showDemo").fadeOut(2000);
				setTimeout(showDemo, 4000);
			}, 4000);
		}
	