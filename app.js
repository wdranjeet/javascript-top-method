//javascript top array method: [push, pop, shift, unshift, splice, slice, concat, forEach, find, filter, map, sort, reverse, join, reduce]

const fruits = ['apple', 'banana', 'grapes'];

//push method add new element to array
fruits.push('orange')
console.log(fruits);
//reusult : ["apple", "banana", "grapes", "orange"]


//array pop method remove an element from the last
fruits.pop()
console.log(fruits);
//output: ["apple", "banana", "grapes"]


//array shift remove the first element from the array and returning that element as well

const books = ['hindi', 'english', 'math'];
const firstelement = books.shift();
console.log(books);
//output: ["english", "math"]
console.log(firstelement);
//output [hindi]


//array unshift, add new element to the first and shift one positon every element to to right

books.unshift('history');
console.log(books);
//["history", "english", "math"]

//array splice: it remove the element from the given positon to the length and it also add the element to the given position

const numbers = [10, 15, 20];
//numbers.splice(1, 1); //remove 1 position element to 1 length
//numbers.splice(1, 1, 50); //remove 1st position element add 50 to same
console.log(numbers); //output [10, 20]

const messup = numbers.slice(1, 2);
console.log(messup);

//concat Statement: conbibe two array into one 
const concatme = fruits.concat(books);
console.log(concatme); //result ["apple", "banana", "grapes", "history", "english", "math"]


//Define Emp array and object
const Emps = [
 { name:'Shyam', age:20},
  { name:'Nikhil', age:25},
 { name:'Krisna', age:22},
 { name:'Topas', age:18}, 
 { name:'Tapon', age:18}
]
//forEach Method: 
console.log(Emps);
//foreach it loop statement similar to for in js
Emps.forEach(emp => console.log(emp.age));

//Find Array Method: this find first matching element

const femp = Emps.find((emp) => {
  if(emp.age > 18){
    return emp.name;
  }
})

console.log(femp); //Object { age: 20, name: "Shyam"}


//Filter ArrayMethod: it return all matching elements
const filterEmp = Emps.filter((emp) => {
  if(emp.age > 20) {
    return emp.name;
  }
});

console.log(filterEmp);


//Map ArrayFunction:

Emps.map((emp, index) => {
  console.log(index+' == '+emp.name);
})

//Sort ArrayFunction

const sortEmps = Emps.sort((a, b) => {
   if(a.age > b.age) {
     return 1;
   }else {
     return -1;
   }
})

console.log(sortEmps);