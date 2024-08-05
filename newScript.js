// Configuration and Constants
const IMAGE_PATHS = {
    stone: "images/stone.png",
    paper: "images/paper.png",
    scissor: "images/scissor.png",
  };
  
  const CHOICES = Object.keys(IMAGE_PATHS);

  // DOM Elements
  const userStone = document.querySelector(".game__choice__player img");
  const cpuStone = document.querySelector(".game__choice__computer img");
  const userScoreElement = document.querySelector(".user_score");
  const compScoreElement = document.querySelector(".comp_score");
  const choiceElements = document.querySelectorAll(".option img");
  const resultHeading = document.querySelector('.result h2');
  
  // Game State
  let userScore = 0;
  let compScore = 0;
  
  // Utility Functions
  function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
  }
  
  function getResult(userChoice, cpuChoice) {
    if (
      (userChoice === "stone" && cpuChoice === "scissor") ||
      (userChoice === "scissor" && cpuChoice === "paper") ||
      (userChoice === "paper" && cpuChoice === "stone")
    ) {
      return "You Win!";
    } else if (userChoice === cpuChoice) {
      return "Draw!";
    } else {
      return "CPU Win!";
    }
  }
  
  function updateScores(result) {
    if (result === "You Win!") {
      userScore++;
    } else if (result === "CPU Win!") {
      compScore++;
    } else if (result === "Draw!") {
      userScore++;
      compScore++;
    }
  }
  // function to update the UI
  function updateUI(userChoice, cpuChoice, result) {
    setTimeout(() => {
      userStone.src = IMAGE_PATHS[userChoice];
      cpuStone.src = IMAGE_PATHS[cpuChoice];
      resultHeading.innerHTML = result;
      userScoreElement.textContent = userScore;
      compScoreElement.textContent = compScore;
    }, 1500);
  }
  
  // Event Listener
  choiceElements.forEach((element) => {
    element.addEventListener("click", () => {
      // Reset hands
      cpuStone.src = IMAGE_PATHS.stone;
      userStone.src = IMAGE_PATHS.stone;
  
      // Add animations
      cpuStone.classList.toggle("hand_animation2");
      userStone.classList.toggle("hand_animation1");
  
      // Remove animations
      setTimeout(() => {
        userStone.classList.toggle("hand_animation1");
        cpuStone.classList.toggle("hand_animation2");
      }, 1500);
  
      // Determine choices and result
      const userChoice = CHOICES.find(choice => IMAGE_PATHS[choice] === element.getAttribute("src"));
      const cpuChoice = getRandomChoice();
      const result = getResult(userChoice, cpuChoice);
  
      // Update scores and UI
      updateScores(result);
      updateUI(userChoice, cpuChoice, result);
    });
  });
  