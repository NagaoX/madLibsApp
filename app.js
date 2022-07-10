let userInputs = [];

let numberOfQuestions = 6

let questionArray = [`Enter a day of the week:`, `Enter a color:`, `Enter an animal:`, `Enter a verb:`, `Enter a country:`, `Enter an adjective:`];

let questionCounter = 0;
let questionTotal = 6;
for (let i = questionCounter; i < numberOfQuestions; i++) {
  console.log(questionArray[i] + ` (${questionTotal} questions left)`)
  userInputs.push(prompt(questionArray[i] + ` (${questionTotal} questions left)`))
  questionTotal--;
}

console.log('All done! Ready for your mad-lib story??');

let originalStory = `${userInputs[0]} we went to the Zoo. The first thing we saw was a ${userInputs[1]} ${userInputs[2]} ${userInputs[3]}ing. The zookeeper told us that was normal, except in ${userInputs[4]}. I had a ${userInputs[5]} time. Next time, I will remeber that if I ever see a ${userInputs[1]} ${userInputs[2]}, I should ${userInputs[6]} the other way.`;

/*
originalStory = `(dayOfTheWeek) we went to the Zoo. The first thing we saw was a (color) (animal) (verb)ing. The zookeeper told us that was normal,except in (country). I had a (adjective) time. Next time, I will remeber that if I ever see a (color) (animal), I should (verb) the other way.`;
*/ 
