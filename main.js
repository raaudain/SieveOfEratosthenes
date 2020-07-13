function sieveOfEratosthenes(num){
  const primes = [];

  // Makes all elements in array true
  for (let i = 0; i <= num; i++){
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++){
    for (let j = 2; j * i <= num; j++){
      // Mark each multiply as false
      primes[i * j] = false;
    }
  }

  const result = [];

  for (let i = 0; i < primes.length; i++){
    if(primes[i]){
      result.push(i)
    }
  }

  return result;
}



sieveOfEratosthenes(200);