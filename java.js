let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let button = document.querySelector("button");
console.log("button");
console.log("apple");
let results = document.querySelector(".results");
let picture = document.querySelector(".picture");
button.onclick = function(){

    

    let answer1 = input1.value;
    let answer2 = input2.value;
   

if (answer1 === "Y" && answer2 === "Y"){
  console.log("mom");
    results.innerHTML = 
    `
    <p> You're a buff frog!</p>
    <img src= "buff_frog.png">
    `
    ;}

else if(answer1 === "Y" && answer2 ==="N"){
  results.innerHTML = 
  `
  <p> You're a sad frog :( </p>
  <img src = "sad_frog.png">
  `
;}
else if (answer1 ==="N" && answer2 === "Y"){
  results.innerHTML = 
  `
  <p> You're a sassy frog! </p>
  <img src = "sassy_frog.png">
  `
;}
else if (answer1 ==="N" && answer2 === "N"){
  results.innerHTML =  
  `
  <p> You're a chill frog! </p>
  <img src = "chill_frog.png">
  `
;}
}

