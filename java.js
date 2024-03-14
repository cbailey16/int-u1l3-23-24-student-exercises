let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let button = document.querySelector("button");
console.log("button");
console.log("apple");
let results = document.querySelector(".results");
let picture = document.querySelector(".picture");
button.onclick = function(){

    console.log("click check");

    let answer1 = input1.value;
    let answer2 = input2.value;
   

if (answer1 === "Y" && answer2 === "Y"){
    console.log("check");

    //results.innerHTML = "ur mom";
    results.innerHTML= ("img").src="buff_frog.png";
    } 


//else if (answer1 === "Y" && answer2 ==="N"){
  //  console.log("hi")
}



