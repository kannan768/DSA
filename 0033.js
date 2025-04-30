function isprime(n)
{
    if (n <= 1)
        return false;
    if (n === 2)
        return false;
    if (n % 2 == 0)
        return false;

    for (let i = 3; i * i <= n; i += 2)
    {
        if (n % i == 0)
            return false;
    }
    return true;
}
console.log(isprime(5));