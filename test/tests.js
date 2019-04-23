const test = QUnit.test;
function scoreResult(questionOne, questionTwo, questionThree, questionFour, questionFive) {
    let score = 0;   

    if(questionOne === 'night') {
        score += 1;
    }

    if(questionTwo === 'rainbows') {
        score += 1;
    }

    if(questionThree === 'one') {
        score += 1;
    }

    if(questionFour === 'fruit') {
        score += 1;
    }

    if(questionFive === 'a lot') {
        score += 1;
    }

   
// questionOne = questionOne.toLowerCase();
   // questionTwo = questionTwo.toLowerCase();
   // questionThree = questionThree.toLowerCase();
   // questionFour = questionFour.toLowerCase();
   // questionFive = questionFive.toLowerCase();

   return score;


}


test('all answers wrong', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const questionOne = '';
    const questionTwo = '';
    const questionThree = '';
    const questionFour = '';
    const questionFive = '';
    const expected = 0;

    //Act 
    const result = scoreResult(questionOne, questionTwo, questionThree, questionFour, questionFive);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(result, expected);
});

test('all answers right', (assert) => {
    //Arrange
    const questionOne = 'night';
    const questionTwo = 'rainbows';
    const questionThree = 'one';
    const questionFour = 'fruit';
    const questionFive = 'a lot';
    const expected = 5;
    //Act
    const result = scoreResult(questionOne, questionTwo, questionThree, questionFour, questionFive);
    //Assert
    assert.equal(result, expected);
});
