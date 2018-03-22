var square = x => x*x;

console.log(square(9));

var person = {
  name:"mohamed",
  sayHI:()  =>{
    console.log(`Hello I am  ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hello I am  ${this.name}`);
  }
}
console.log(person.name);
person.sayHI();
person.sayHiAlt(1,2,3);
