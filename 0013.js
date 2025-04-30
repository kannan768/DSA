//seprate palidrom number

let numbers = [121, 343, 123, 456, 989, 1001, 234];

let palidrome = [];
let nonpalidrome = [];

for (const num of numbers)
{
    let str = num.toString();
    let res = str.split('').reverse().join('');

    if (str == res)
    {
        palidrome.push(num);
    }
    else {
        nonpalidrome.push(num);
    }
}
console.log(palidrome.map(Number))