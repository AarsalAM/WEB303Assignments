/*
	WEB 303
	Starting file for Assignment 1 
	Aarsal Masoodi
*/

$(document).ready(function() {
	$('#salary, #percent').keyup(function() { //The keyup function detects anytime a key is pressed it seems. It's a better fit for this assignment.
		var $sal = $('#salary').val();
		var $per = $('#percent').val();
		
		var $total = ($sal * $per) / 100;


		$('#spend').text($total.toFixed(2));
	});
});