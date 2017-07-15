function check(nums){
	var result = 0;
	var arr = nums.split(" ");
	// Converte de uma string para um array de inteiros
	for (var i = 0; i < arr.length; i++){
		arr[i] = parseInt(arr[i]);
	}
	for (var i = 0; i < arr.length; i++){
		// Verifica se está na ordem crescente
		if(i < arr.length-1){
			if(arr[i]<arr[i+1]){
				result +=1;
			}			
		}
		// Verifica se está na ordem decrescente
		if(i < arr.length-1){
			if(arr[i]>arr[i+1]){
				result -=1;
			}			
		}		
	}	
	if(result == 4){
		return "C";
	} 
	else if(result == -4)
		return "D";
	else
		return "N";
}

window.onload = function(){
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
document.getElementById('resultado').innerHTML = p;
}