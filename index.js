/* confirm("are you sure you wanna delete this?") // simple confirmation
prompt("are you sure you wanna delete this?")
alert("are you sure you wanna delete this?")
let result= confirm("are you sure you wanna delete this?");
console.log(result);
*/ 

//try and Catch------
//Try and catch are keywords used in JavaScript to handle errors that can occur during program execution. The try block contains the code that may throw an error, and the catch block contains the code that will execute if an error occurs within the try block. Here's an example code snippet:

try {
  // some code that may throw an error
} catch (error) {
  // code to handle the error
}
//If an error occurs in the try block, control will be transferred to the catch block. The error object passed to the catch block provides information about the error, which can be used to handle the error appropriately.

//Event Handler---------------
const ele= document.getElementById('name');
// 
ele.onclick= function(){
    console.log("Clicked!");
}



// etElementById----
// is another commonly used method to traverse the DOM tree in JavaScript. It returns the element with the specified id attribute.
document.getElementById("name").innerText= "My name is Pratshtha Singh Rathore, changed by get elementbyid";
let selectors= document.getElementsByClassName("name");
selectors[0].innerText= "First class element";
selectors[1].innerText= "second class element";
// let elemnets[0].innerText= " value from <p> changed through innertextt";
//' value from <p> changed through innertextt' comes in output;

// DOM---------
// In JavaScript, DOM stands for Document Object Model. It is a tree-like structure that represents the web page in memory, and allows JavaScript to interact with and manipulate the page's content, structure, and styles dynamically.
//Each element in the tree corresponds to a node object, which JavaScript can access and modify through the Document Object Model API.
//With the DOM, JavaScript can add, remove, or modify elements and their attributes, change their CSS styles, respond to user events like clicks and keystrokes, and perform many other dynamic actions on the web page. This makes JavaScript a powerful tool for creating interactive and dynamic web applications.

// == & === -----------
//In JavaScript, there are two types of equality operators: double equal (==) and triple equal (===).
//The double equal operator compares values without considering their data types. It performs type coercion, which means that if the data types of the two values being compared are different, JavaScript tries to convert one or both values to a common type before making the comparison. For example:

console.log(5 == "5"); // true
console.log(true == 1); // true
console.log(null == undefined); // true


//In all the above examples, the double equal operator returns true because JavaScript has coerced the values to match each other by converting them to a compatible type.

//On the other hand, the triple equal operator compares values with their data types. It returns true only if both values being compared have the same type and the same value. For example:


console.log(5 === "5"); // false
console.log(true === 1); // false
console.log(null === undefined); // false


// The triple equal operator is more strict and precise than the double equal operator because it considers the data types of the values being compared.

//In TypeScript, both the double equal and triple equal operators work the same way as in JavaScript. However, TypeScript adds type checking during compile time to ensure that the variables being compared have compatible types before the code is executed. This helps to catch potential issues early and avoid unexpected behaviors at runtime.



// The forEach() method is used to iterate over an array in JavaScript. It executes a provided function once for each array element. Here's an example of how to use forEach():
//In this example, the forEach() method is called on the nu array with a callback function that logs each element to the console. The output will be:
//Note that the forEach() method does not return a new array, but is instead used for performing a particular action on each element of the array.
// In the forEach example, number represents the current element being iterated over in the nu array. 
const nu = [1, 2, 3, 4, 5];
nu.forEach(number => console.log(number));

// array reduce
//In this example, the reduce() method is called on the numbers array with a callback function that takes two arguments: the accumulator (which stores the value accumulated so far) and the currentValue (which represents the current element being processed). The callback function returns the sum of the accumulator and currentValue.

//The reduce() method returns a single value which is the result of applying the callback function to each element of the array. In this case, the output will be:
const reducearr = [1, 2, 3, 4, 5]; 
const res= reducearr.reduce((accumulator, currentValue) =>{
    return accumulator+ currentValue; //initially accumulator would have 1 value and current value= 2
});                                   // acc= 3, curr= 3
console.log(res);


//indexof find
let myfood=["pizza", "Burger", "Pasta"];
console.log(myfood.indexOf("Burger")); // indexof tells the index of the elemet
console.log(myfood.includes("Burger")); // includes tell wether an element exist in an array or not in a boolean value

//The find() method returns the first element in the array that satisfies the condition specified in the function. If no elements satisfy the condition, the method returns undefined.
// if there's not any condition it just print the value if present otherwise prints undefined
console.log(myfood.find(food=> food==="pizzaaa"));  

var findarr =[10,20,30,40,50];
//  condition checks if the currentValue is greater than 40.
console.log(findarr.find(find => find > 40));  


//function (normal)
//function sum(a, b) {
//   return a + b;
//  }
//Arrow function:
//const sum = (a, b) => a + b;



//The code above declares an array named array1 with 5 elements (1, 2, 3, 4 and 4). Then, it declares another array called array2 which is the result of applying the map method to array1.

//The map method is used to transform each element of the array into another value, in this case, each element of array1 is multiplied by 2 using an arrow function ((element) =>{ return element*2;}), which takes one parameter called element, multiplies it by 2 and returns the result. Therefore, array2 contains [2, 4, 6, 8, 8]
let array1=[1,2,3,4,4]
let array2= array1.map((element)=>{
    return element*2;

})
console.log(array2);
//filter on arrays
// In this example, the filter() method is called on the numbers array with a callback function that checks if each element is even. The resulting filteredNumbers array contains only the even numbers from the original array.
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(number => number % 2 === 0);
console.log(filteredNumbers); // Output: [2, 4]




// switch condition 

let num=6;
let num2=3;
console.log(num+num2);
let myAge=21;  // switch case if falling down scenario
switch(myAge){
    case 21 :          // once it matches the value, it prints all the case values below that case if break is not apllied
    console.log("You are 21");
    break;
    case 22: 
    console.log("you are 22");
    break;
}

let arr =["hello", "world"];
arr[2]="!!";
console.log(arr);
// Objects with let, var and cont
var obj={               // it would work with var perfectly
    key1:"value1",
    key2: "value2"
};

console.log(obj.key1); // one way to aaccess the values
console.log(obj["key2"]); // 2nd  way v
obj.key1= "value_changed";
console.log(obj.key1);    // we can change the keys value through objects

console.log(obj);     // displaying all the keys.

const names={
    first: "prats",
    second: "Krats"
};
console.log(names.first);
console.log(names.second);
 names.second="valuechanged";
 console.log(names.second);
 // with cont object key value can be change because const is only apllicable on object not on the key values.
// in some browser it is not supported due to update issues.

let person={              // it would work with let perfectly
    name1: "Mehul",
    channel: "Codedamm",
    website: "Codedamn.com",
    languages:true
}
console.log(person)
delete person.channel; // deleted the channel key.

// let var cont = these are the variables
let myname="Pratishtha";
var ilike= "Dosa";
const PI= 3.14;  // it can't be defined again
let string= "My name is Pratishtha ";
let no= 42;
let bool= false;
let array= [1,2,85,23,12];
let _undefined= undefined;
//objects stores key value pair, it's declaration is:
let object ={
    "keyname": "Value",   // to access object like this= object[keyname]
     keyname: "value" ,   // to access this  object= object.keyname
     "key name": 'value'  // to access object like this= object["keyname"]
}

//Functions
function myFunction (){
    console.log("abcd"); //  code
}
myFunction();
myFunction();
myFunction();// using above function

//Block  scoping (it contains if, while, else conditions not Functions)
var myvariable=100;
var myage=20;
const vari= 20;

if(myage==20){
    var iwant="Pizza";
    let name2 ="prats";
    console.log(iwant);
    console.log(name2);
    const pa =20;
    console.log(pa);
    
}
let outname ="prats";
console.log(myvariable);
console.log(myage);
console.log(iwant);   // I want decalred as var and it is usable outside the function.
console.log(name2);    // not usable because it is decalared as let in a function and it can't be used outside the function
console.log(outname); // when let decalred outside the function it's value is printed.
console.log(pa); 
console.log(vari); 

