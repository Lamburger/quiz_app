var state = {
  currentQuestion: 0
};


var correctUserAnswer = 0;


function userSelection(){

    if(questions[state.currentQuestion].correctAnswer === true) 
        correctUserAnswer++;
}

function handleStartQuiz(){
    // hide start quiz button
    // show questions
    // show counter
    // show next

    $('#check').addClass('hidden');
    $('#score').removeClass ('hidden');
    $('#question').removeClass ('hidden');
    $('#next').removeClass ('hidden');
    $('#radioButtons').removeClass ('hidden');

    $('#score1').text(correctUserAnswer);
    
    // var question1 = questions[0];

   
setQuestions();

}


function setQuestions() {
     $('#question').text(questions[state.currentQuestion].question);

    $("input[value='0']").next().text(questions[state.currentQuestion].choices[0]);
    $("input[value='1']").next().text(questions[state.currentQuestion].choices[1]);
    $("input[value='2']").next().text(questions[state.currentQuestion].choices[2]);
    $("input[value='3']").next().text(questions[state.currentQuestion].choices[3]);
}


function handleNext() {
    // show prev button
    // show next question
    // show next choices

    if( true /* should only do this if currentQuestion is within range of questions */ ) {

    

    

        state.currentQuestion++;


        setQuestions();



        if (state.currentQuestion >= questions.length -1) {
            $('#next').addClass('hidden');
        }
    }

}

function handlePrev(){

   state.currentQuestion--;

   setQuestions(); 


}


var questions = [{
    question: "What is the relationship between Ana and Phara?",
    choices: ["They're Sisters", "They are Cousins", "They're not related!", "Mother and daughter",],
    correctAnswer: "Mother and daughter"
  }, {
    question: "When do heroes die?",
    choices: ["High noon", "Never", "Right now", "Tomorrow",],
    correctAnswer: "Never"
  }, {
    question: "Where does justice rain from?",
    choices: ["Pharah", "the Sky", "Above", "The Clouds",],
    correctAnswer: "Above"
  }, {
    question: "This character is British Nationality",
    choices: ["Pharah", "Widowmaker", "Tracer", "D.Va",],
    correctAnswer: "Tracer"
  }, {
    question: "Which character is a giant German who wields a rocket-powered hammer and giant shield?",
    choices: ["Ana", "Reaper", "Reinhardt", "Lucio",],
    correctAnswer: "Reinhardt"
  }];




$('#check').click(handleStartQuiz);
$('#next').click(handleNext);
$('#prev').click(handlePrev);