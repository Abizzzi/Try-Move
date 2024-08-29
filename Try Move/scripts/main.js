$(window).ready(function e()
{
    var oncedown = false;
    var onceup = false;
    var onceleft = false;
	var onceright = false;
	var right = 0;
	var left = 0;
	var up = 0;
	var down = 0;
	$("#l5-13").css("left", 875);
	$("#l6-9").css("left", 825);
	$("#l6-10").css("left", 875);
	$("#l6-11").css("left", 925);
	$(document).keydown(function (e) 
	{
		var a = "#ffffff";
		if (e.keyCode == 39 && onceright == false)
		{
			right = setInterval(goright, 1);
			onceright = true;
			$("#l6-11").css("background-color", a)
		}
		if (e.keyCode == 37 && onceleft == false)
		{
			left = setInterval(goleft, 1);
			onceleft = true;
			$("#l6-9").css("background-color", a)
		}
		if (e.keyCode == 38 && onceup == false)
		{
			up = setInterval(goup, 1);
			onceup = true;
			$("#l5-13").css("background-color", a)
		}
		if (e.keyCode == 40 && oncedown == false)
		{
			down = setInterval(godown, 1);
			oncedown = 1;
			$("#l6-10").css("background-color", a)
		}
	});
	function goleft()
	{
		$(".player").css("left", "-=2");
	}
	function goup()
	{
		$(".player").css("top", "-=2");
	}
	function godown()
	{
		$(".player").css("top", "+=2");
	}
	function goright()
	{
		$(".player").css("left", "+=2");
	}
	$(document).keyup(function (e) 
	{
		var a = "#000000";
		if (e.keyCode == 40)
		{
			clearInterval(down);
			oncedown = false;
			$("#l6-10").css("background-color", a)
		}
		if (e.keyCode == 39)
		{
			clearInterval(right);
			onceright = false;
			$("#l6-11").css("background-color", a)
		}
		if (e.keyCode == 38)
		{
			clearInterval(up);
			onceup = false;
			$("#l5-13").css("background-color", a)
		}
		if (e.keyCode == 37)
		{
			clearInterval(left);
			onceleft = false;
			$("#l6-9").css("background-color", a)
		}
	});
});