let originalStory = `${userInputs[0]} we went to the Zoo. The first thing we saw was a ${userInputs[1]} ${userInputs[2]} ${userInputs[3]}ing. The zookeeper told us that was normal, except in ${userInputs[4]}. I had a ${userInputs[5]} time. Next time, I will remeber that if I ever see a ${userInputs[1]} ${userInputs[2]}, I should ${userInputs[6]} the other way.`;

let userInputs = [];

let numberOfQuestions = 6

let questionArray = [prompt(`Enter a day of the week:`), prompt(`Enter a color:`), prompt(`Enter an animal:`), prompt(`Enter a verb:`), prompt(`Enter a country`), prompt(`Enter an adjective:`)];

for (let i = numberOfQuestions; i >= 0; i--) {
  console.log(i);
}

/*
originalStory = `(dayOfTheWeek) we went to the Zoo. The first thing we saw was a (color) (animal) (verb)ing. The zookeeper told us that was normal,except in (country). I had a (adjective) time. Next time, I will remeber that if I ever see a (color) (animal), I should (verb) the other way.`;
*/ 
