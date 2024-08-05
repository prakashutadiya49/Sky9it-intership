// variables in js

// var a=5;
// console.log(a);
// var a; 
// console.log(a);
const a=5;

console.log(a);

console.log(eval("3 + 5"));

let arr=[1,'prakash','utadiya',2,true];
console.log(arr);

//foreach method is a part of the prototype 
//object which assosiate with all object which contain all predefine method

arr.forEach((element,index)=>{
    console.log(index);
    console.log(element);
})



// js oprators

//+ operator follow oprator overoading concept
let x=5+10;
console.log("value of x:"+x);
let fullname="prakash"+" "+"utadiya";
console.log(fullname);

//automatic self calling functions

//simple function

function add(num1,num2){
    console.log(num1+num2);
    return num1+num2;
}
let sum=add(5,6);
console.log(sum);

//Functions are a way of packaging functionality that you wish to reuse. It's possible to define a body of code as a function that executes when you call the function name in your code. This is a good alternative to repeatedly writing the same code.
(function () {
  "use strict";
  function greetMe(yourName) {
    alert(`Hello ${yourName}`);
  }

  greetMe("prakash utadiya");
})();

(()=>{
    //for beginner use strict means follow tightly copled javascript
    "use strict";
    function getname(name){
        alert(`welcome to sky9it ${name}`)
    }
    getname("prakash utadiya");
}
    )();

// Dom manupulation

/*This can be anything. 
Everything in JavaScript is an object 
and can be stored in a variable. */
const h1=document.querySelector("h1");

//inner html add entire html tag
// h1.innerHTML=`<h6> prakash utadiya</h6>`;

// inner text add as String not tag
// h1.innerText=`<h6> prakash utadiya</h6>`;


//event in js
//event is a task perform when spacific action perform.

document.querySelector('html').addEventListener('click',()=>{
    alert("stop clicking screen...");
})


/*
The function we just passed to addEventListener() 
here is called an anonymous function, 
because it doesn't have a name.
 There's an alternative way of writing anonymous functions, 
  we call an arrow function.
 An arrow function uses () => instead of function ():
*/ 
document.querySelector('h1').addEventListener('click',()=>{
    document.querySelector('body').style.background='red';
});

let btn=document.querySelector('#btn');
let img=document.querySelector('img');
btn.onclick=()=>{
    let src=img.getAttribute("src");
    if(src==="images/1.jpg"){
        img.setAttribute("src","images/2.jpg")
    }
    else{
        img.setAttribute("src","images/1.jpg");
    }
}


//api that store data in loca browser
const changerbtn=document.querySelector("#changerbtn");

function setuser(){
    const username=prompt("Enter new user name..");
    localStorage.setItem("name",username);
    h1.innerHTML=`<h6> ${username}</h6>`;
}

changerbtn.addEventListener('click',()=>{
    if(!localStorage.getItem('name')){
      setuser();
    }
    else{
        const storename=localStorage.getItem("name");
        h1.innerHTML=`<h6> ${storename}</h6>`;
    }
})