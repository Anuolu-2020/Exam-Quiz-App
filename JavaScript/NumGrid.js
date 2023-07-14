var questions = document.querySelectorAll('.question');//selecting all questions
let totalQuestion = questions.length;

let currentQuestion = 0;
const numQuestions = totalQuestion; // Change this to the desired number of questions
const questionGrid = document.getElementById('question-grid');
for (let i = 1; i <= numQuestions; i++) {
	const questionBlock = document.createElement('div');
	questionBlock.classList.add('question-block');
	questionBlock.innerText = i;
	questionBlock.onclick = function() {
	document.getElementById("No").innerHTML = 'Question ' + i + ' of ' + totalQuestion; 
	goToQuestion(i); 
 };
  //var question = document.querySelectorAll('questions');
   questionGrid.appendChild(questionBlock);
};
   
  function goToQuestion(num) {
  for (let i = 0; i < questions.length; i++) {
  const element = questions[i]; // Get the element at the current index
  // Do something with the element...
  element.style.display = "none";
}
	document.getElementById('question' + num).style.display = "block";
};

