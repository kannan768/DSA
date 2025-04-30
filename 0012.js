//short word in string

let str = "kanna is a good boy in the world t";

let res= str.split(' ');
console.log(res);

let shortestWord = res[0];
for (let i = 0; i < res.length; i++)
{
    if (res[i].length < shortestWord.length) {
        shortestWord= res[i];
    }
}
console.log(shortestWord)