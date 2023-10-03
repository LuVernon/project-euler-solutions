let fibNums = [1, 2]; 
        let evenSum = 2; 

        function listFibs (n) {
            for (i=2; i<n; i++) {  
                if (fibNums[i-2] + fibNums[i-1] > n) {
                    return evenSum;
                }
                else if (fibNums[i-2] + fibNums[i-1] <= n) {
                    fibNums.push(fibNums[i-2] + fibNums[i-1]);
                    if (Number(fibNums[i]) % 2 == 0) {
                        evenSum += Number(fibNums[i]);
                    }
                }
            }
        }

        listFibs(34);