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
    results.innerHTML = "ur mom";
    results.insertAdjacentHTML('beforeend' <img src= "sad_frog.png">;)
    }

else if(answer1 === "Y" && answer2 ==="N"){
  results.innerHTML = "A";
}
else if (answer1 ==="N" && answer2 === "Y"){
  results.innerHTML = "B";
}
else if (answer1 ==="N" && answer2 === "N"){
  results.innerHTML = "C";
}
}

