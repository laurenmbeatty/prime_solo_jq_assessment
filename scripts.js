$(document).ready(function() {

//use generate button to create new div on click
var newNum= 1;



var $colorButton = $("<button>" + "Change Color" + "</button>");

var $removeButton = $("<button>" + "Remove" + "</button>");

var $myDiv = $("<div class>"+ "Line # " + newNum + "</div>"); 

//console.log($myDiv);

$(".generate").on("click", function() {

	//console.log(newNum);

	$($myDiv).clone().appendTo(".whereToAppend");

	$($colorButton).clone().appendTo(".whereToAppend");

	$($removeButton).clone().appendTo(".whereToAppend");

	newNum = newNum + 1;
	//not sure why newNum doesn't increment, but otherwise it seems to work

});
			
//change color button

$($colorButton).on("click", function() {
	$($colorButton).parent().css("background-color", "red");
});

//remove div

//I wonder if when I set the text to append $myDiv, if I could have assigned that
//a new class, and then I could remove the parent class with this function:

$($removeButton).on("click", function() {

	//$(this).parent().remove();  ???????????
	//$("div").empty();  ?????????
	$removeButton.remove();
	$colorButton.remove();



});

















});