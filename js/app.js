'use strict';
// var userName = prompt('Hello.  What is your name?');

// alert('Hi, meatbag.  I mean, ' + userName + '. Let\'s answer some questions.  Use y/n or yes/no.');

// var answer1 = prompt('Am I a robot?').toLowerCase().trim();
// console.log('The first question asks whether or not Bender is a robot. The user responded with ' + answer1 + '.');

// var tally = 0;

// if (answer1 === 'yes' || answer1 === 'y') {
//   alert('That\'s right, ' + userName + '! Death to all humans!');
//   tally++;
//   console.log(tally);
// } else if (answer1 === 'no' || answer1 === 'n') {
//   alert('Wrong, ' + userName + '! I\'m completely insane in the mainframe!');
// } else {
//   alert('Read the directions, organ sack.  Let\'s move on.');
// }

// var answer2 = prompt('Next question! Do I have an evil twin?').toLowerCase().trim();
// console.log('The second question asks if Bender has an evil twin. The user responded with ' + answer2 + '.');

// if (answer2 === 'yes' || answer2 === 'y') {
//   alert('Yea, ' + userName + '. Flexo\'s alright.');
//   tally++;
//   console.log(tally);
// } else if(answer2 === 'no' || answer2 === 'n'){
//   alert('Watch more Futurama, ' + userName + '.  His name\'s Flexo.');
// } else {
//   alert('Can\'t you coffin-stuffers read directions?');
// }

// var answer3 = prompt('Alrighty.  Was I made in Mexico?').toLowerCase().trim();
// console.log('The third question asks where Bender was made. The user responded with ' + answer3 + '.');

// if(answer3 === 'yes' || answer3 === 'y') {
//   alert('Soy numero uno Mexicano!!!');
//   tally++;
//   console.log(tally);
// } else if(answer3 === 'no' || answer3 === 'n'){
//   alert('Read my wiki, ' + userName + '!');
// } else {
//   alert('Duly noted.  Directions are not your forte.');
// }

// var answer4 = prompt('My cooking is the best, right?!').toLowerCase().trim();
// console.log('The fourth question asks about Bender\'s cooking. The user responded with ' + answer4 + '.');

// if(answer4 === 'yes' || answer4 === 'y') {
//   alert('That\'s right!  I\'m better than Elzar!');
//   tally++;
//   console.log(tally);
// } else if(answer4 === 'no' || answer4 === 'n'){
//   alert('NO?!  How can you say that?!');
// } else {
//   alert('Follow the directions, fleshrod!');
// }

// var answer5 = prompt('Do I have kids?').toLowerCase().trim();
// console.log('The fifth question asks if he has kids. The user responded with ' + answer5 + '.');

// if(answer5 === 'yes' || answer5 === 'y') {
//   alert('Yea, ' + userName + '. I\'ve got 2 little runts.  Can\'t remember their names, though!');
//   tally++;
//   console.log(tally);
// } else if(answer5 === 'no' || answer5 === 'n'){
//   alert('No???  I\'ll have you know that I\'ve made the rounds!  Hehe.');
// } else {
//   alert('Thank goodness this is over!  You\'re tearing me apart, ' + userName + '!');
// }

var x = true;
var guess = 5;
while (x === true) {
  var answer6 = prompt('How many deliveries have I made throughout the lifespan of Futurama?');
  if(answer6 === '33') {
    alert('Damn, you\'re good!');
    tally++;
    console.log(tally);
    x = false;
  } else if (answer6 < 33) {
    if(guess > 1) {
      alert('Go higher!  You have ' + guess-- + ' guesses left.');
    } else if(guess === 1) {
      alert('You\'ve got one shot left.');
      guess = 0; //break
    } else {
      alert('Faaaaaaail.');
      x = false;
    }
  } else {//for when the guess is lower
    if(guess > 1) {
      alert('Go lower!  You have ' + guess-- + ' guesses left.');
    } else if(guess === 1) {
      alert('You\'ve got one shot left.');
      guess = 0;//break
    } else {
      alert('Faaaaaaaaaaaaaaail.');
      x = false;
    }
  }
}

var words = ['bite', 'my', 'shiny', 'metal', 'ass'];
var guess = 5;
while (guess <= 5 && guess >= 0){
  var answer7 = prompt('What were some of my favorite words? Choose from: Fry, bite, Zoidberg, my, Leela, shiny, Farnsworth, metal, Amy, ass, Hermes').toLowerCase().trim();
  for (var i = 0; i < words.length; i++){
    if(answer7 === words[i]) {
      alert('Yea, I love "' + words[i] + '"!');
      tally++;
      console.log(tally);
      guess = 0;
    }
  }
  if(guess > 1){
    alert('You have ' + guess + ' guesses left.');
  } else if(guess === 1) {
    alert('Last shot!');
  } else {
    alert('Fail!');
  }
  guess--;
}

for(var y = 0; y < words.length; y++){
  alert('Words you could\'ve picked were: ' + words[y]);
}

if(tally > 4){
  alert('Not bad, ' + userName + '. You got ' + tally + ' out of 7 correct!');
} else {
  alert('You got ' + tally + 'correct!  That\'s terrible!');
}