// when the button is clicked, this will show the image
$("#show").click(function(){
	$("img").show();
});
// when the button is clicked, this will hide the image
$("#hide").click(function(){
	$("img").hide();
});
// when the button is clicked, it will toggle the image on and off
$("#toggleImg").click(function(){
	$("img").toggle();
});
// when the button is clicked, it will toggle fade on and off the image 
$("#fadeImg").click(function(){
	$("img").fadeToggle();
});
// when the image is hovered over, the image will change
$(".tree").hover(function(){
	this.src = "img/tree1.jpg";
}, function() {
	this.src = "img/tree2.jpg";
});

// when this button is clicked, add a new list-item with some text content to the unordered list
$("#buttList").click(function(){
	$("#list").append("<li>Third Thing</li>");
});

$("#red").click(function(){
	$("#redbck").css("background-color", "red");
});