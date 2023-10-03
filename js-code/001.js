var sum = 0; 

function multiplesOf3and5(number) {
    for (let i=3; i<number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i; 
        }
    }
    return sum;
}

multiplesOf3and5(1000);