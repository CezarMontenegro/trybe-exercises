function fizzBuzz(roof) {
	let somatorio = 0;
	for (i = 1; i < roof; i += 1) {
		if (i % 3 === 0 && i % 5 === 0) {
			somatorio += i;
		} else if ( i % 3 === 0) {
			somatorio += i;
		} else if ( i % 5 === 0) {
			somatorio += i;
		}
	}
	return somatorio;
}

function fahrenheit_to_celsius(temp_fahrenheit) {
  return ((temp_fahrenheit - 32) / 1.8).toFixed(2);
}

function difference(x) {
	return x > 10 ? x - 10 : 10 - x; 
}

function count_down(x) {
	let acumulador = x
	for (let index = x - 1; index >= 0; index -= 1) {
		acumulador = `${acumulador}...${index}`;
	}
	return `${acumulador}!!!`;
}

function nth_prime(n) {
	contador = 3;
	primo = true;
	somaPrimo = 1;
	while(somaPrimo <= n-1) {
		for(let index = contador - 1; index >= 2; index -= 1) {
			if (contador % index === 0) primo = false;
		}
		if (primo === true) {
			somaPrimo += 1;
		}	
		contador +=1;
		primo = true;
	}	
	return contador - 1;
} 

function llargest_prime_factor(number) {
	
}


function largest_prime_factor(number) {
	acumulador = [];
	primos = [];
	primo = true;
	for(let index = number - 1; index >= 2; index -= 1) {
		if(number % index === 0) {
			acumulador.push(index);
		}
	}
	acumuladorPrimos = acumulador.filter((num) => {
		for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
		return num > 1;
	})
	return acumuladorPrimos[0];
};

function caixa(values) {
	let array = [];
	for (let index = 0; index < values.length; index += 1) {
		if (values[index] === 0) {
			array.pop();
		} else {array.push(values[index])};
	}
	return array.reduce((acc, curr) => {
		return acc = acc + curr
	},0)
}

function sum_square_difference(n) {
	quadradoSomatorio = 0;
	somatorioQuadrado = 0;
	somatorio = 0;
	somatorio2 = 0;
	for (let index = 1; index <= n; index += 1) {
		somatorio += index;
	}
	quadradoSomatorio = somatorio * somatorio;
	for (let index = 1; index <= n; index += 1) {
		somatorioQuadrado += (index*index);
	}
	return quadradoSomatorio - somatorioQuadrado;
}

function even_fibonacci_numbers(roof) {
	let  i;
	let  fib = [];
	fib[0] = 0;
	fib[1] = 1;
	array = [];

	for (index = 2; index <= roof; index += 1) {
		fib[index] = fib[index - 2] + fib[index - 1];
		array.push(fib[index])
		if (fib[index] > roof) {
			array.pop();
			break;
		}
	}
	return array.reduce((acc, curr) => {
		if (curr % 2 === 0) {
			acc = acc + curr;
		}
		return acc;
	},0)
}

function digits_sum(number_s) {
	let digito1 = 0;
	let digito2 = 0;
	let digito3 = 0;
	let contador = 0;
	for (let index = 0; index <= 1000; index += 1) {
		if (index >= 10 && index <= 99) {
			digito1 = (Math.trunc(index/10));
			digito2 = (index % 10);
				if (digito1 + digito2 === number_s) {
					contador += 1;
				}
		} else if (index >= 100 && index <= 999) {
			digito1 = (Math.trunc(index/100));
			digito2 = (Math.trunc((index % 100)/10));
			digito3 = ((index % 100)%10);
				if (digito1 + digito2 + digito3 === number_s) {
					contador +=1
				}
		}	
	}
	return contador;
}


function largest_palindrome_product(digits) {
	let inicial = (10 ** digits) - 1;
	let final = (10 ** digits) / 10;
	let resultadoMutiplicacao = 0;
	let digito1 = 0;
	let digito2 = 0;
	let digito3 = 0;
	let digito4 = 0;
	let palindromo = [];

	for (index = inicial - 1; index >= final; index -= 1) {
		resultadoMutiplicacao = inicial * index;
		digito1 = (Math.trunc(resultadoMutiplicacao / 1000));
		digito2 = (Math.trunc((resultadoMutiplicacao % 1000) / 100));
		digito3 = (Math.trunc((resultadoMutiplicacao % 100) / 10));
		digito4 = ((resultadoMutiplicacao % 10));

		if(`${digito1}${digito2}${digito3}${digito4}`
			=== `${digito4}${digito3}${digito2}${digito1}`) {
				palindromo.push(resultadoMutiplicacao);
		}
	}
	return palindromo;
}

function smallest_multiple(roof) {
	let contador = 1;
	let divisorWhile = false;
	let loopContador = 3;
	let test = false;

	while(divisorWhile === false) {

		for(let index = 2; index <= roof; index +=1) {
			if (loopContador % index === 0) {
				contador += 1;
				if (contador === roof) {
					divisorWhile = true;
				}
			} 
			contador = 0;
		}
		
		loopContador +=1;
	}
	return loopContador;
}

function diagonalDifference(arr) {
    let sumArray = 0;
    sumArray = (arr[0] + arr[4] + arr[8] - (arr[2] + arr[4] + arr[6]));
    
    if (sumArray < 0) {
        sumArray = sumArray * -1;
    }

    return sumArray;
}

function plusMinus(arr) {
	let positive = 0;
	let negative = 0;
	let zero = 0;
	let positiveRatio = 0;
	let negativeRatio = 0;
	let zeroRatio = 0;
	
	for (let index = 0; index < arr.length; index += 1) {
	  if (arr[index] > 0) {
		positive += 1;
	  } else if (arr[index] < 0) {
		negative += 1;
	  } else {
		zero += 1;
	  }
	}
	positiveRatio = (positive / arr.length).toFixed(6);
	negativeRatio = (negative / arr.length).toFixed(6);
	zeroRatio = (zero / arr.length).toFixed(6);
	return [positiveRatio, negativeRatio, zeroRatio];
}

function staircase(n) {
  let espaco = '';
  let tag = ''
  for (let index = n; index >= 1; index -=1 ) {
    for (let jotex = index - 1; jotex >= 1; jotex -=1) {
      espaco = espaco + '0'
    }
    tag = tag + '#'
    espaco = espaco + tag
    console.log(espaco);
    espaco = ''
  }
}

function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  arr = arr.sort();
  min = arr[0] + arr[1] + arr[2] + arr[3];
  max = arr[4] + arr[1] + arr[2] + arr[3];
  return `${min} ${max}`
}

function birthdayCakeCandles(candles) {
	let tallest = candles[0];
	let contador = 1;
	  for (let jotex = 1; jotex < candles.length; jotex += 1) {
		if (candles[jotex] > tallest) {
		  tallest = candles[jotex]
		  contador = 1;
		} else if (candles[jotex] === tallest) {
		  contador += 1;
		}
	  }
	return contador;
  }

  function timeConversion(s) {
    let splited = '';
    let integer = 0;
    let sliced = '';
    let concat = '';
    if (s[s.length-2] === 'P') {
      splited = s.split(':');
      if (splited[0] !== '12') {
        integer = parseInt(splited[0]) + 12;
      } else {
        integer = parseInt(splited[0]) - 12;
      }
      sliced = splited[2].slice(0,2)
      concat = `${integer}:${splited[1]}:${sliced}`
    } else if (s[s.length-2] === 'A') {
      splited = s.split(':');
      if (splited[0] === '12') {
        integer = parseInt(splited[0]) - 12;
        sliced = splited[2].slice(0,2);
        concat = `${integer}:${splited[1]}:${sliced}`;
        return concat;
      }
      sliced = splited[2].slice(0,2);
      concat = `${splited[0]}:${splited[1]}:${sliced}`;
    }
    return concat;
  }
  

 console.log(timeConversion('12:40:22AM'));