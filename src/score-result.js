
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
export default scoreResult;