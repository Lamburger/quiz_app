function run(){
    var state = {
      currentQuestion: 0, correctUserAnswer: 0
    };

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

        setQuestions();
    }


    function setQuestions() {
        $('#question').text(questions[state.currentQuestion].question);

        $("input[value='0']").next().text(questions[state.currentQuestion].choices[0]);
        $("input[value='1']").next().text(questions[state.currentQuestion].choices[1]);
        $("input[value='2']").next().text(questions[state.currentQuestion].choices[2]);
        $("input[value='3']").next().text(questions[state.currentQuestion].choices[3]);

        $('#score1').text(state.correctUserAnswer);
    }

    function handleNext() {
        var radioInput = $('input[name="choices"]:checked').val();

        if( state.currentQuestion < questions.length - 1 ) {
            if (radioInput === questions[state.currentQuestion].correctAnswer) 
                state.correctUserAnswer++;
            
        
            state.currentQuestion++;
            setQuestions();
        }
        else {
            // show the alert
            alert('you scored ' + state.correctUserAnswer + ' out of ' + questions.length);
            // reset state to initial
            state.currentQuestion = 0;
            state.correctUserAnswer = 0;
            setQuestions();

        }
    }

    var questions = [
        {
            question: "What is the relationship between Ana and Phara?",
            choices: ["They're Sisters", "They are Cousins", "They're not related!", "Mother and daughter",],
            correctAnswer: "3"
        },
        {
            question: "When do heroes die?",
            choices: ["High noon", "Never", "Right now", "Tomorrow",],
            correctAnswer: "1"
        },
        {
            question: "Where does justice rain from?",
            choices: ["Pharah", "the Sky", "Above", "The Clouds",],
            correctAnswer: "2"
        },
        {
            question: "This character is British Nationality",
            choices: ["Pharah", "Widowmaker", "Tracer", "D.Va",],
            correctAnswer: "2"
        },
        {
            question: "Which character is a giant German who wields a rocket-powered hammer and giant shield?",
            choices: ["Ana", "Reaper", "Reinhardt", "Lucio",],
            correctAnswer: "2"
        }
    ];

    $('#check').click(handleStartQuiz);
    $('#next').click(handleNext);
}

$(document).ready(run);