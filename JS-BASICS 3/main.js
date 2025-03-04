const elementTxt = document.getElementById("elements");
const sumTxt = document.getElementById("sum");

let arr = [];
let sum = 0;
let high = 0;
let low = 0;



for(let i=0; i<arr.length; i++ ) {
    sum += arr[i];
    high += arr[i];
    low += arr[i];
}

elementTxt.innerHTML = arr.join("<br>");
sumTxt.innerHTML = sum;
console.log(arr);