//pass by value
let a=1;

function f(x){
   x=3;
}

f(a);
console.log(a);

//pass by reference

let person={
    name:"sachin",
    age:23
}
function f1(obj){
    obj.name="kannan";
    obj.age=25;
}

f1(person);
console.log(person);