function showPrimes(n){
    let prime = []
    for (let i = 2; i < n; i++){
    if(!isPrime(i)) continue;
        prime.push(i)
     }
     alert(`For n = ${n} prime numbers are ${prime}`);
    }

function isPrime(n) {
    for (let i = 2; i <n; i++){
    if ( n % i == 0) return false;
     }
    return true

    }
function getInput() {
    do{
        let strinput = prompt("Enter a positive integer");
        input = Number(strinput)
        if (isNaN(input) || input <= 0 || !Number.isInteger(input)){
            continue;  
        }
        else{
            showPrimes(input)
            break
        }
        
} while (true) ;
    }
getInput()