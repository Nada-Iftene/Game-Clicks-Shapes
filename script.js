$(document).ready(function(){
	var score = 0;
	var circlesRemaining = 8;
	var clicksRemaining = 15;
	var remaining = true;

	$("html").click(function(){
		if (clicksRemaining > 0 && remaining == true) {
			clicksRemaining--;
		$("label#clicks-moins span").text(clicksRemaining);
	}
	 if (clicksRemaining == 0 && circlesRemaining > 0) {
		$("h2.lose").fadeIn();
		$("div.lvl-1").fadeOut();
		
	}

	});

	$("div.lvl-1-circle").click(function(){
		$(this).remove();
		score+=2;
		circlesRemaining--;
		$("label#plus span").text(score);
		$("label#moins span").text(circlesRemaining);
		if (score == 16) {
			$(".lvl-1-win").fadeIn();
			remaining = false;

		}else if (score == 32) {
			$(".lvl-2-win").fadeIn();
			remaining = false;
		}
	});
	$("div.lvl-2-circle").click(function(){
		$(this).remove();
		score+=2;
		circlesRemaining--;
		$("label#plus span").text(score);
		$("label#moins span").text(circlesRemaining);
		if (score == 32) {
			$(".lvl-2-win").fadeIn();
			remaining = false;

		}else if (score == 48) {
			$(".lvl-3-win").fadeIn();
			remaining = false;	
			


		}
	});

	$("div.lvl-3-ayes").click(function(){
		$(this).remove();
		score+=2;
		circlesRemaining--;
		$("label#plus span").text(score);
		$("label#moins span").text(circlesRemaining);
		if (score == 48) {
			$(".lvl-3-win").fadeIn();
			remaining = false;

		}else if (score == 64) {
			$(".lvl-3-win").fadeIn();
			remaining = false;


		}
	});
	var min = -50;
	var max = 120;
	var random1 ;
	var random2;
////////////////////////////////////////////////////////////////////////
/////////////////////////////LEVEL ONE START
////////////////////////////////////////////////////////////////////////
	function lvlOne(){
		setInterval( function(){
		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);

		$("div.lvl-1-circle:nth-child(1)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-1-circle:nth-child(2)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-1-circle:nth-child(3)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-1-circle:nth-child(4)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-1-circle:nth-child(5)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-1-circle:nth-child(6)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-1-circle:nth-child(7)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-1-circle:nth-child(8)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);


	},5000);

	}
	lvlOne();
	$(".lvl-1-win span").click(function(){
		$(".lvl-1-win").hide();
		$(".lvl-2").fadeIn();
		remaining = true;
		circlesRemaining = 8;
		clicksRemaining+=20;
		$("label#moins span").text(circlesRemaining);
		$("label#clicks-moins span").text(clicksRemaining);
		lvlTow();

	});

	////////////////////////////////////////////////////////////////////////
    /////////////////////////////LEVEL ONE END
    ////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////
/////////////////////////////LEVEL TOW START
////////////////////////////////////////////////////////////////////////
	function lvlTow(){
		setInterval( function(){
		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);

		$("div.lvl-2-circle:nth-child(1)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-2-circle:nth-child(2)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-2-circle:nth-child(3)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-2-circle:nth-child(4)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);

		$("div.lvl-2-circle:nth-child(5)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-2-circle:nth-child(6)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-2-circle:nth-child(7)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-2-circle:nth-child(8)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);


	},0);

	}
	$(".lvl-2-win span").click(function(){
		$(".lvl-2-win").hide();
		$(".lvl-3").fadeIn();
		remaining = true;
		circlesRemaining = 8;
		clicksRemaining+=20;
		$("label#moins span").text(circlesRemaining);
		$("label#clicks-moins span").text(clicksRemaining);
		
		lvlThree();

	});

	////////////////////////////////////////////////////////////////////////
    /////////////////////////////LEVEL TOW END
    ////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
/////////////////////////////LEVEL THREE START
////////////////////////////////////////////////////////////////////////
	function lvlThree(){
		setInterval( function(){
		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);

		$("div.lvl-3-ayes:nth-child(1)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1000);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-3-ayes:nth-child(2)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1000);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-3-ayes:nth-child(3)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1000);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-3-ayes:nth-child(4)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1500);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);

		$("div.lvl-3-ayes:nth-child(5)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1000);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-3-ayes:nth-child(6)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1000);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-3-ayes:nth-child(7)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1000);

		random1 = Math.floor(Math.random() * (max - min + 1 ) + min);
		random2 = Math.floor(Math.random() * (max - min + 1 ) + min);
		$("div.lvl-3-ayes:nth-child(8)").animate( {
			"left" : random1 + "%",
			"top" : random2 + "%"
		},1000);


	},0);

	}
	$(".lvl-1-win a").click(function(){
		$(".lvl-1-win").hide();
		$(".lvl-2").fadeIn();
		remaining = true;
		circlesRemaining = 8;
		$("label#moins span").text(circlesRemaining);

		

	});

	////////////////////////////////////////////////////////////////////////
    /////////////////////////////LEVEL THREE END
    ////////////////////////////////////////////////////////////////////////

	
	
	


});