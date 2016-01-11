//Espacio de nombres global de nuestra
//biblioteca (object{})
var unJsPorDia=(function(window,undefined){
	//Metodo isNumber (Valida un numero),
	//y necesita de un argumento n
	function isNumber(n){
		//Haciendo uso del operador ternario de javascript
		//se retorna true si n es numero (No es NaN y es Finito)
		//y false en caso de no ser un numero.
		return (!isNaN(parseFloat(n))&&isFinite(n))?true:false;
	}
	//Función getModule, retorna el módulo de
	//dos numeros.
	//Aunque javascript tiene el
	//operador módulo (%) este no es funcional para
	//números negativos, por eso la existencia de
	//esta función.
	function getModule(a,b){
		//Verifica si a y b son numeros
		if(isNumber(a)&&isNumber(b)){
			//Retorna el valor de a%b
			return (a-Math.floor(a/b)*b);	
		}
		//Si no son numeros retorna null y muestra un alert
		else{
			alert("No se puede obtener módulo de los datos proporcionados");
			return null;
		}
	}
	//Función que cifra un texto usando el
	//algoritmo de cesar
	function encryptCesar(text,n){
		//Verificamos si n es un numero
		if(isNumber(n)){
			//n contiene el desplazamiento
			n=parseInt(n);
			//Variable que contendra
			//el texto cifrado
			cryptogram='';
			//Recorremos todo el texto
			for(index in text){
				//Usamos la función getModule para obtener
				//el valor decimal del carácter cifrado
				//correspondiente al carácter actual
				var c=getModule((text[index].charCodeAt()+n),256);
				//Concatenamos con cryptogram el carácter que corresponde
				//al decimal obtenido anteriormente
				cryptogram+=String.fromCharCode(c);
			}
			//Retornamos el texto cifrado (cryptogram)
			return cryptogram;
		}
		//Si n no es un numero
		else{
			//Informamos con un alert
			alert('El desplazamiento debe ser un número');
			//Ponemos el foco al elemento con ID igual a n 
			//si este elemento esta en el DOM
			if(document.getElementById('n')){document.getElementById('n').focus()};
			//Retornamos null
			return null;
		}
	}
	//Funcion que descifra un cryptograma cifrado con
	//la funcion encryptCesar de esta biblioteca
	function decryptCesar(cryptogram,n){
		//Verificamos si n es un numero
		if(isNumber(n)){
			//n contiene el desplazamiento
			n=parseInt(n);
			//Variable que contendra
			//el texto descifrado
			text='';
			//Recorremos todo el criptograma
			for(index in cryptogram){
				//Usamos la función getModule para obtener
				//el valor decimal del carácter descifrado
				//correspondiente al carácter cifrado actual
				var c=getModule((cryptogram[index].charCodeAt()-n),256);
				//Concatenamos con text el carácter que corresponde
				//al decimal obtenido anteriormente
				text+=String.fromCharCode(c);
			}
			//Retornamos el texto descifrado (text)
			return text;
		}
		//Si n no es un numero
		else{
			//Informamos con un alert
			alert('El desplazamiento debe ser un número');
			//Ponemos el foco al elemento con ID igual a n 
			//si este elemento esta en el DOM
			if(document.getElementById('n')){document.getElementById('n').focus()};
			//Retornamos null
			return null;
		}
	}
	//API publica de nuestra
	//Biblioteca (Object{})
	//============================
	//Es decir, que lo que se retorne
	//es lo unico a lo que se podra
	//acceder desde fuera usando
	//nuestro namespace global
	//como por ejemplo:
		//unJsPorDia.propiedad o
		//unJsPorDia.metodo
	return{
		"encryptCesar":encryptCesar,
		"decryptCesar":decryptCesar
	}
})(window);
//Registramos el evento load para el objeto window
//en otras palabras, nos aseguramos que antes de ejecutar
//cualquier otra instrucción, la pagina web cargue completamente.
window.addEventListener("load",function(){ 
	//Guardamos una referencia al Objeto del DOM 
	//que tenga como ID el valor encrypt.
	var encrypt=document.getElementById('encrypt');
	//Guardamos una referencia al Objeto del DOM 
	//que tenga como ID el valor decrypt.
	var decrypt=document.getElementById('decrypt');
	//Registramos el evento click al objeto encrypt
	//es decir, que cuando se haga click en el elemento
	//con ID igual a encrypt se ejecutara la función callback
	encrypt.addEventListener('click',function(){//Función callback
		//Guardamos en data el valor que se escribio en
		//el textarea con id igual a data
		var data=document.getElementById('data').value;
		//Guardamos una referencia al Objeto del DOM 
		//que tenga como ID el valor result.
		var result=document.getElementById('result');
		//Guardamos en data el valor que se escribio en
		//el input con id igual a n
		var n=document.getElementById('n').value;
		//Cambiamos el valor de el input con ID igual a
		//result por el valor que retorna la función encryptCesar
		//que se encuentra disponible desde nuestra biblioteca unJsPorDia.
		result.value=unJsPorDia.encryptCesar(data,n);
	});
	//Registramos el evento click al objeto decrypt
	//es decir, que cuando se haga click en el elemento
	//con ID igual a decrypt se ejecutara la función callback
	decrypt.addEventListener('click',function(){//Función callback
		//Guardamos en data el valor que se escribio en
		//el textarea con id igual a data
		var data=document.getElementById('data').value;
		//Guardamos una referencia al Objeto del DOM 
		//que tenga como ID el valor result.
		var result=document.getElementById('result');
		//Guardamos en data el valor que se escribio en
		//el input con id igual a n
		var n=document.getElementById('n').value;
		//Cambiamos el valor de el input con ID igual a
		//result por el valor que retorna la función decryptCesar
		//que se encuentra disponible desde nuestra biblioteca unJsPorDia.
		result.value=unJsPorDia.decryptCesar(data,n);
	});
});
