//count each cha
let s = "kannan";

const map = new Map();

for (const char of s) {
  map.set(char, (map.get(char) || 0) + 1);
}

console.log(map);
console.log(Array.from(map));
console.log(Object.fromEntries(map))
//
let arr1 = ['apple', 'apple', 'banana','guaba']

let map1 = new Map();

for (const char of arr1)
{
  map1.set(char, (map1.get(char) || 0) + 1);
}
let res = [...map1];
// console.log(res);
// let ans = res.sort((a, b) => a[1] - b[1]);
// console.log(ans)
let ans1 = res.sort((a, b) => a[0] - b[0])
console.log(Object.fromEntries(ans1))
