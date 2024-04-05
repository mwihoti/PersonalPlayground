function isPrime(v) {
    if (v <= 3) {
        return v > 1;
    }
    if (v % 2 == 0 || v % 3 == 0)
    {
        return false;
    }
    var vsqrt = Math.sqrt(v);
    for (let i = 5; i <= vsqrt; i += 6) {
        if (v % i == 0 || v % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

function factorize(v) {
    if (!isPrime(v)) {
        let i = Math.floor(Math.sqrt(v));
        while (v % i != 0) {
            i--;
        }
        return [
            ...factorize(i),
            ...factorize(v / i)
        ];

    }
    return [v];
}

const prime = isPrime(11)
console.log(prime);

const factor = factorize(12);
console.log(factor)