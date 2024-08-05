
// DOM Elements 

let user_stone = document.querySelector(".game__choice__player img");
let cpu_stone = document.querySelector(".game__choice__computer img");
let user_score = document.querySelector(".user_score");
let comp_score = document.querySelector(".comp_score");

let choice = document.querySelectorAll(".option img");

// Defining functions and objects
let user = 0;
let comp = 0;
let obj = {
  0: "images/stone.png",
  1: "images/paper.png",
  2: "images/scissor.png",
};

let opt = {
  "images/stone.png": "stone",
  "images/paper.png": "paper",
  "images/scissor.png": "scissor",
};
function cpu() {
  let a = Math.floor(Math.random()*3);
  let b = Math.floor(Math.random()*3);
  let ch = Math.random() > 0.5 ? a : b;
  return obj[ch];
}

function result(user, cpu) {
  if (
    (user == "stone" && cpu == "scissor") ||
    (user == "scissor" && cpu == "paper") ||
    (user == "paper" && cpu == "stone")
  ){
    return "You Win!";
  }
  else if (user == cpu){ 
    return "Draw!";
  }
  else {
    return "CPU Win!";
  }
}

// Adding eventListener
choice.forEach((element) => {
  element.addEventListener("click", () => {

    cpu_stone.src = "images/stone.png";
    user_stone.src = "images/stone.png";

    cpu_stone.classList.toggle("hand_animation2");
    user_stone.classList.toggle("hand_animation1");

    setTimeout(() => {
      user_stone.classList.toggle("hand_animation1");
      cpu_stone.classList.toggle("hand_animation2");
    }, 1500);


    let user_choice = element.getAttribute("src");
    let cpu_choice = cpu();

    let res = result(opt[user_choice], opt[cpu_choice]);
    let heading = document.querySelector('.result h2');
    if(res == "You Win!") user++;
    else if(res == "CPU Win!") comp++
    else{
      user++;
      comp++;
    }
    setTimeout(() => {
      cpu_stone.src = cpu_choice;
      user_stone.src = user_choice;
      heading.innerHTML = res;
      user_score.textContent = user;
      comp_score.textContent = comp;
    }, 1500);
  });
});
