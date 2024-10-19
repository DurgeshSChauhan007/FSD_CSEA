// console.log("Hello World");

// var a = 12;
// console.log("a "+ a);
// if (a > 10) {
//     a = 30; 
//     console.log("Hi", a);
// }

// console.log("Hello", a);

// let a ="12";
// let b = 12;
// let sin = Symbol("122");
// let today = Date();
// console.log(today)
// console.log(typeof today)

// if (a == b) {
//     console.log("Hello ");
// }
// else {
//     console.log("Java ");
// }

// function hi() {
//     console.log("Hi Function Calling");
// }

// hi();

// function hi(str="Hello") {
//     console.log("Hi Function Calling " + str);
// }

// hi("Abhishek");

// let d = function (str="hello") {
//     console.log("Hi Functional Calling " + str)
// }
// d()

// function sum (a, b) {
//     return a + b;
// }

// console.log("Sum " + sum(4, 5, 5));

// function cCompiler() {
//     return "c compiler";
// }

// function javaCompiler() {
//     return "java compiler";
// }
// function selectLanguage(lang) {
//     if (lang == 'c') {
//         let data;
//         function cCompiler() {
//             return "c compiler";
//         }
//         data = cCompiler();
//         console.log(data);
//     } else if (lang == 'java') {
//         function javaCompiler() {
//             return "java compiler";
//         }
//         let data = javaCompiler();
//         console.log(data);
//     } else {
//         console.log("You need to select a valid language first.");
//     }
// }

// selectLanguage("c");

// const foo = () => {
//     return {bar: "baz"};
// }
// console.log(foo().bar)

// console.dir(document);
// const div = document.getElementsByClassName("parent");
// console.log(div);
// div[0].innerText = "Rahul and Virat got duck.";
// div[0].innerHTML = "<h2 style=color:red>Duck</h2>";
// const h1 = document.createElement("h1");
// h1.innerText = "Element is created by DOM function";
// h1.style.backgroundColor="magenta";
// div[0].appendChild(h1);
// console.log(h1);

// const img = document.createElement('img');
// img.src='download.jpeg';
// img.setAttribute("height","400px");
// console.log(img);
// div[0].appendChild(img);
// // div[0].removeChild(img);

// const button = document.getElementById("btn");
// console.log(button);

// const display = document.getElementById('disp');
// console.log(display);
// // function getData() {
// //     console.log("calling getdata function");
// //     display.innerHTML = "<h3 style=color:red>WELCOME TO CSE Department</h3>"
// // }

// getData=()=> {
//     console.log("calling getdata function");
//     display.innerHTML = "<h3 style=color:red>WELCOME TO CSE Department</h3>"
// }



// button.addEventListener("click",getData);

// const promise1 = new Promise(
// (resolve, reject) => {
// let a = 12;
// if (a > 10) {
// resolve("value of a is resolved");
// }
// else {
// reject("a is rejected");
// }


// }

// );

// promise1
// .then((msg) => console.log(msg))
// .catch((error) => console.log(error))
// .finally(() => console.log("All resources have been closed"));



// const myPromise = new Promise(
// (resolve, reject) => {
//     let a = Math.random() * 3;

//     if (a > 5) {
//         resolve("Value of a is resolved");
//     }
//     else {
//         reject("a is rejected");
//     }
// }
// );

// myPromise
// .then((msg) => console.log(msg))
// .catch((error) => console.log(error))
// .finally(() => console.log("All resources have been closed"));

// const promise2 = new Promise(
// (resolve, reject) => {
//     resolve({name:"Amit", branch:"CSE"});
// }

// );

// promise2
// .then((data) => console.log(data.name))
// .catch((error) => console.log(error));



response = fetch("https://dummyjson.com/products");
response.then (
    data => {
        console.log(data);
        data.json().then(res => (console.log(res.products[0].id + " " + res.products[0].title)))
    }
)
