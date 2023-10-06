let primes = [1];

    function largestPrimeFactor(number) {

        for (let i=2; i<=number; i++) {
            for (let j=2; j<=i; j++) {
                        
                if (i % j == 0 && i != 2) {
                    break;
                }
                else if (i == 2 && j == 2) {
                    primes.push(2);
                }
                else if (j == i-1 && number % i == 0) {
                    primes.pop();
                    primes.push(i);
                }
            }     
        }
        return primes[primes.length-1]
    }
        
largestPrimeFactor();