//Parthkumar Patel
//101399114

//Question 1
let greeter = (myArray, counter) => {
    const greetText = 'Hello';
    for (const name of myArray) {
      console.log(`${greetText} ${name}`);
    }
  };
  console.log("question 1 output")
  greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
  

  //Question 2
  let capitalzeFirstLetter = str =>{
    const[first, ...rest] = str;
    return first.toUpperCase() + rest.join('').toLowerCase();
  }
  console.log("question 2 output")
  console.log(capitalzeFirstLetter('fooBar'));
  console.log(capitalzeFirstLetter('nodeJs'));

  //Question 3
  let colors = ['red', 'green','blue'];
  const capitalizedletter = colors.map(color =>capitalzeFirstLetter(color));
  console.log("question 3 output")
  console.log(capitalizedletter);

  //Question 4
  let filterLessThan20 = (arr) => arr.filter(num => num>=20);

  let numbers = [1,60,34,30,20,5]
  let filteredNumbers = filterLessThan20(numbers);
  console.log("question 4 output")
  console.log(filteredNumbers);

//Question 5

var array =[1,2,3,4]
let calculateSum = array.reduce((acc, curr) => acc + curr , 0);
let calculateProduct = array.reduce((acc, curr) => acc * curr, 1);
console.log("question 5 output")
console.log(calculateSum);
console.log(calculateProduct);

//Question 6
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details () {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    information() {
        return`${this.details()}, Balance: ${this.balance}`;
    }
}
console.log("question 6 output")
let car = new Car('Thar_Roxx', 2024);
console.log(car.details());

let sedan = new Sedan('Honda Accord', 2024, 25000);
console.log(sedan.information());