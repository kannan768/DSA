let items = [
  { name: "apple", category: "fruit" },
  { name: "carrot", category: "vegetable" },
  { name: "banana", category: "fruit" },
  { name: "spinach", category: "vegetable" },
  { name: "mango", category: "fruit" },
];

let grouped = items.group((item) => item.category);

console.log(grouped);
