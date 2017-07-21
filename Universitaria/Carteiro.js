function mailman(){
	var time = 0, count = 0, i = 0;	

	// FAZ A LEITURA DOS DADOS COMO STRINGS
		var first = prompt("");
		var numCasas = prompt("");
		var numDest = prompt("");	

	// CONVERTE OS DADOS DE STRINGS PARA ARRAYS DE STRING
	first = first.split(" ");
	numCasas = numCasas.split(" ");
	numDest = numDest.split(" ");

	// CONVERTE OS ARRAYS DE STRING PARA ARRAYS DE INTEIROS
	for(var y = 0; y < numCasas.length; y++){
		numCasas[y] = parseInt(numCasas[y]);
	}
	for(var y = 0; y < numDest.length; y++){
		numDest[y] = parseInt(numDest[y]);
	}

	// CHECA AS RESTRIÇÕES
	if(first[0]<1 || first[0]>45000){
		alert("O numero de casas a serem atendidas deve estar entre 1 e 45000!");
		return 0;
	}
	if(first[1]<1 || first[1]>45000){
		alert("O numero de encomendas a serem entregues deve estar entre 1 e 45000!");
		return 0;
	}
	for(var y = 0; y < numCasas.length; y++){
		if(numCasas[y]<1 || numCasas[y]>1000000){
			alert("O numero de cada casa deve estar entre 1 e 1000000!");
			return 0;
		}
	}

	// FAZ A AVALIAÇÃO DO PERCURSO DO CARTEIRO
	do{
		if(numCasas[count] == numDest[i]){
			if(i!=first[1]-2)
				time++;
			i++;			
		}
		else if(numCasas[count] < numDest[i]){
			count++;
			time++;
		}
		else if(numCasas[count] > numDest[i]){
			count--;
			time++;
		}
		
	}while(i<first[1]-1);

	// RETORNA O TEMPO
	alert(time);

}



window.onload = function(){
	mailman();
document.getElementById('resultado').innerHTML = "";
}
