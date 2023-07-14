window.onload = function() {
  loadCalculator();//loading calculator
  var questions = document.querySelectorAll('.question');//selecting all questions
  var currentQuestion = 0;
  let addQuestion = Array.prototype.indexOf.call(questions, questions[currentQuestion]);
  //const radios = document.querySelectorAll('input[type="radio"]');//retrieve
  questions[currentQuestion].style.display = "block"; // Show the first question
  //questionBlock.style.color = 'red'; // Set the color to red on click
  let totalQuestion = questions.length;
  let currentNum = 1;//intial question ui number
  var totalNumber = questions.length;//total question ui number
  document.getElementById("No").innerHTML = 'Question ' + currentNum + ' of ' + totalNumber;//inital question ui
  
  function changeQuestionBlockColor(selectedBlock) {
  if (selectedBlock !== null) {
    selectedBlock.style.color = 'black'; // Change the color back to black
    selectedQuestionBlock = null; // Reset the selected question block
   }
  };
    /*questions.forEach((questionBlock) => {
    questionBlock.style.color = 'red'; // Set the color to red on click
    selectedQuestionBlock = questionBlock;
   });*/
  function selectedQuestion(){
      if(questions[addQuestion]){
     questionBlock.style.color = 'red';
     selectedQuestionBlock = questionBlock;
    };
  };
  document.querySelector("#Next").onclick = function() {
    //questions[currentQuestion].style.display = "none";
    if (addQuestion < questions.length - 1) {
    questions[addQuestion].style.display = "none"; // Hide the current question
    addQuestion++; // Move to the next question
    questions[addQuestion].style.display = "block"; // Show the next question
    stopLastNum(); // stop at number 40
    changeQuestionBlockColor(selectedQuestionBlock); // Change the question block color
  } else if(addQuestion === questions.length) {
  } else if(addQuestion === questions.length) {
      questions[totalQuestion].style.display = "block";
   }else{
       console.log("interesting");
   };
   let currentNum = Array.prototype.indexOf.call(questions, questions[addQuestion]) + 1;
   document.getElementById("No").innerHTML = 'Question ' + currentNum + ' of ' + totalNumber;//updating the ui
   solutionDisplay();    
  };
  
  document.querySelector("#Back").onclick = function() {
  if (addQuestion > 0) {
    questions[addQuestion].style.display = "none"; // Hide the current question
    addQuestion--; // Move to the previous question
    questions[addQuestion].style.display = "block"; // Show the previous question  
    document.getElementById("No").innerHTML = 'Question ' + (addQuestion + 1) + ' of ' + totalNumber; // Update the UI
    changeQuestionBlockColor(selectedQuestionBlock); // Change the question block color
  } else {
    console.log("Can't go back!"); // Already at the first question
  }
};
  
  //for displaying solutions still has problems
  //let currentSolution = 0;
  var solutions = document.querySelectorAll(".Explanation");
  document.getElementById("explain").onclick = function() {
    solutions.forEach(solution => {
	  solution.style.display = "block";
	});
  };
   document.getElementById("HideExplain").onclick = function() {
      solutions.forEach(solution => {
	  solution.style.display = "none";
	});
  };
  
  //Lets the number not go beyond the questions number;
  function stopLastNum(){
      currentNum =  1; //This line of code not flexible yet for ui remaining in the last number
      document.getElementById("No").innerHTML = 'Question ' + currentNum + ' of ' + totalNumber;// updating the ui
  };
  //for checking display
  function solutionDisplay(){
      solutions.forEach(solution => {
	   if (solution.style.display == 'block'){
          solution.style.display = 'none';
      }else {
        solutions.style.display = 'none';
      };
	});
     
  };
  
      //let currentQuestion = 0;
     const numQuestions = totalQuestion; // Change this to the desired number of questions
     const questionGrid = document.getElementById('question-grid');
     let selectedQuestionBlock = null;
     for (let i = 1; i <= numQuestions; i++) {
	 const questionBlock = document.createElement('div');
     questionBlock.classList.add('question-block');
	 questionBlock.innerText = i;
     questionBlock.style.color = 'black'; // Set the initial color to black
     questionBlock.onclick = function() {
     if (selectedQuestionBlock !== null) {
      selectedQuestionBlock.style.color = 'black';// change back to black
     }    
     document.getElementById("No").innerHTML = 'Question ' + i + ' of ' + totalQuestion; 
     goToQuestion(i); 
     questionBlock.style.color = 'red'; // Set the color to red on click
     selectedQuestionBlock = questionBlock;
   };
      //var question = document.querySelectorAll('questions');
     questionGrid.appendChild(questionBlock);
  };
   
   function goToQuestion(num) {
      addQuestion = num - 1;
     for (let i = 0; i < questions.length; i++) {
     const element = questions[i]; // Get the element at the current index
     // Do something with the element...
     element.style.display = "none";
    }
    let question = num
    questions[question - 1].style.display = "block";
    currentQuestion = question - 1; // update the currentQuestion variable
    addQuestion = currentQuestion; // update the addQuestion variable to match the currentQuestion
    document.getElementById("No").innerHTML = 'Question ' + num + ' of ' + totalNumber; // update the UI
    
  };
  
};



  