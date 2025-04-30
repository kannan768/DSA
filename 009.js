//camel cases

//camelcases
let s1 = "kanna is a good";
let res = s1.toLowerCase().split(' ');
console.log(res);
let camelcases = res[0];
console.log(camelcases);

for (let i = 1; i < res.length; i++)
{
    camelcases += res[i].charAt(0).toUpperCase() + res[i].slice(1);
}
console.log(camelcases)