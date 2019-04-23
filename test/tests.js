const test = QUnit.test;
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

test('does lowercase work correctly', (assert) => {
    //Arrange
    const questionOne = 'NIght';
    const questionTwo = 'rainbOWs';
    const questionThree = 'oNe';
    const questionFour = 'FRuit';
    const questionFive = 'a lOt';
    const expected = 5;

    //Act
    const result = scoreResult(questionOne, questionTwo, questionThree, questionFour, questionFive);
    //Assert
    assert.equal(result, expected);
});
