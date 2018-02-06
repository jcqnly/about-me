'use strict';

var userName = prompt('Hello.  What is your name?');

alert('Hi, meatbag.  I mean ' + userName + '. I am going to ask you a few fun questions.  Answer with y/n or yes/no.');

var answer1 = prompt('Am I a robot?').toLowerCase().trim();

if (answer1 === 'yes' || answer1 === 'y') {
  alert('That\'s right, ' + userName + '! Death to all humans!');
} else if (answer1 === 'no' || answer1 === 'n') {
  alert('Wrong, ' + userName + '! Look at the picture in the back!');
} else {
  alert('Read the directions next time, organ sack.  Let\'s move on.');
}
console.log('The first question. Bender is a robot.');

var answer2 = prompt('Next question! Do I have an evil twin?').toLowerCase().trim();

if (answer2 === 'yes' || answer2 === 'y'){
  alert('Yea, ' + userName + '. Flexo\'s alright.');
} else if(answer2 === 'no' || answer2 === 'n'){
  alert('Watch more Futurama, ' + userName + '.  His name\'s Flexo.');
} else {
  alert('Can\'t you coffin-stuffers read directions?');
}
console.log('The second question. Bender is the more evil one according to the Robot Devil.');

var answer3 = prompt('Alrighty.  Was I made in Mexico?').toLowerCase().trim();

if(answer3 === 'yes' || answer3 === 'y'){
  alert('Soy uno Mexicano!!!');
} else if(answer3 === 'no' || answer3 === 'n'){
  alert('Read my wiki, ' + userName + '!');
} else {
  alert('Duly noted.  Directions are not your forte.');
}
console.log('The third question.  Bender was manufactured in Tijuana, Mexico.');

var answer4 = prompt('My cooking is the best, right?!').toLowerCase().trim();

if(answer4 === 'yes' || answer4 === 'y'){
  alert('It\'s definitely better than Elzar\'s!');
} else if(answer4 === 'no' || answer4 === 'n'){
  alert('NO?!  How can you say that?!');
} else {
  alert('Again, Fleshrod.  Follow the directions!');
}
console.log('The fourth question.  Bender\'s cooking is terrible according to an episode, but he thinks highly of himself.');

var answer5 = prompt('Do I have kids?').toLowerCase().trim();

if(answer5 === 'yes' || answer5 === 'y'){
  alert('Yea, ' + userName + '. I\'ve got 2 little runts.  Can\'t remember their names, though!');
} else if(answer5 === 'no' || answer5 === 'n'){
  alert('No???  I\'ll have you know that I\'ve made the rounds!  Hehe.');
} else {
  alert('Thank goodness this is over!  You\'re tearing me apart, ' + userName + '!');
}
console.log('The fifth question.  Bender is not a very good father figure, sadly.');