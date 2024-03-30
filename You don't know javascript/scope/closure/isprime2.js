const howMany = 120;

function findPrimes(howMany) {
    var sieve = Array(howMany).fill(true);
    var max = Math.sqrt(howMany);

    for (let i = 2; i < max; i++) {
        if (sieve[i]){
            let j = Math.pow(i, 2);
            for (let k = j; k< howMany; k += i) {
                sieve[k] = false;
            }

        }
    }

    return sieve
    .map(function getPrime(flag, prime)
    {
        if (flag) return prime;
        return flag;
    })
    .filter(function onlyPrimes(v) {
        return !!v;
    })
    .slice(1)
}
findPrimes(howMany);