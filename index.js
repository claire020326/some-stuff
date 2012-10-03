/* Contents of index.js*/

$(function(){
	$(".stuffs").css("color","red")
	$("h1").css("position","absolute");
	setTimeout(function(){
		$("h1").animate({
			left:"400px",
			opacity:0
		},1000)
	},3000)
})();