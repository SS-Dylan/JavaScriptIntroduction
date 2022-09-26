"use strict";
let h1s = document.getElementsByTagName("h1");
h1s[0].style.backgroundColor = "green";

let tax = 0;
let tax2 = 3.4;
let $tax3 = 5.6;
let _tax4 = 7.8;
console.log(tax2);

let o1 = {};
let o2 = { name: "John", age: 30, grades: ["A", "B", "C"] };
console.log(o2);
console.log(o2.name);
console.log(o2["name"]);
console.log(o2.grades[1]);
o2.address = "101";