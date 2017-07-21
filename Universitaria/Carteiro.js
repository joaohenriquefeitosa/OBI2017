function mailman(){
	var n, m, numCasas, numDest;

	var first = prompt("");
	var second = prompt("");
	var third = prompt("");

	first = first.split(" ");
	second = second.split(" ");
	third = third.split(" ");

	console.log(first);
	console.log(second);
	console.log(third);
}



window.onload = function(){
	/*
	var p = "";
	var p = p.concat("1 2 3 5 6");
	var p = p.concat("<br>");
	var p = p.concat(check("1 2 3 5 6"));
	var p = p.concat("<br>");
	var p = p.concat("<br>");

	var p = p.concat("5 7 10 9 11");
	var p = p.concat("<br>");
	var p = p.concat(check("5 7 10 9 11"));
	var p = p.concat("<br>");
	var p = p.concat("<br>");

	var p = p.concat("12 10 4 3 2");
	var p = p.concat("<br>");
	var p = p.concat(check("12 10 4 3 2"));
	var p = p.concat("<br>");
	var p = p.concat("<br>");
	*/
	mailman();
//document.getElementById('resultado').innerHTML = p;
}
