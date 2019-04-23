const questionOne = document.getElementById('question-one');
const questionTwo = document.getElementById('question-two');
const questionThree = document.getElementById('question-three');
const questionFour = document.getElementById('question-four');
const questionFive = document.getElementById('question-five');
const submitButton = document.getElementById('submit-button');

function scoreResult(questionOne, questionTwo, questionThree, questionFour, questionFive) {
    
    questionOne = questionOne.toLowerCase();
    questionTwo = questionTwo.toLowerCase();
    questionThree = questionThree.toLowerCase();
    questionFour = questionFour.toLowerCase();
    questionFive = questionFive.toLowerCase();
    
    let score = 0;   


    if(questionOne === 'night' || questionOne === 'at night') {
        score += 1;
    }

    if(questionTwo === 'rainbows') {
        score += 1;
    }

    if(questionThree === 'one' || questionThree === '1') {
        score += 1;
    }

    if(questionFour === 'fruit') {
        score += 1;
    }

    if(questionFive === 'a lot') {
        score += 1;
    }

   return score;


}