'use strict';


function Q()
{
  var userPoint = 0;
var userName = prompt('welcome, what is you name ?');
alert('Nice to meet you ' + userName);


function Q1() {
  var fatherName = prompt('can you guess what is my fathers name(y/n)?');

  if (fatherName.toUpperCase() === 'Y') {
    alert('you are a charm');
    console.log('you are right');
    userPoint++;
  }
  else {
    alert('no one know anyway');
    console.log('you are wrong');
  }

  var favFood = prompt('can you guess if my favorite food is pizzan ?(y/n)');

  if (favFood.toUpperCase() === 'Y') {
    alert('so that, I love you');
    console.log('you are right');
    userPoint++;
  }
  else {
    alert('Is there anyone who dont like pizza');
    console.log('you are wrong');
  }
}
Q1();



function Q2() {
  var favGame = prompt('can you guess what is my favorite game?(y/n)');

  if (favGame.toUpperCase() === 'Y') {
    alert('Every one know that');
    console.log('you are right');
    userPoint++;
  }
  else {
    alert('so you have never play soduko with me yet');
    console.log('you are wrong');
  }
}
Q2();


function Q3() {
  var jaz = prompt('Do you like Jaz music?(y/n)');

  switch (jaz.toUpperCase()) {
    case 'Y':
      alert('you are amazing like me');
      console.log('you are right');
      userPoint++;

      break;

    default:
      alert('No man! , I dont like them');
      console.log('you are wrong');

      break;
  }
}
Q3();

function Q4() {
  var page = prompt('Do you like our page?(y/n)');

  switch (page.toUpperCase()) {
    case 'Y':
      alert('Thank you');
      console.log('you are right');
      userPoint++;

      break;

    default:
      alert('Me to');
      console.log('you are wrong');
      break;
  }
}
Q4();

function Q5() {
  alert('Lets play another game');
  alert('you have to guess my number, its between 0 and 10');
  alert('Enter the number in the next prompt');

  var userGuess = prompt();

  while (userGuess > 10) {
    alert(' You should type a number between 0 and 10');
    userGuess = prompt();

  }
}
Q5();


function Q6() {
  var myNumber = 0;

  for (var i = 0; i <= 3; i++) {
    if (myNumber === userGuess) {
      alert('You are a charm ,thats Right !!');
      userPoint++; break;

    } else if (10 >= userGuess > 4) {
      alert('thats wrong,thats high,Tray again.now you have onle' + (4 - i) + 'chances');
      userGuess = prompt();

    } else {
      alert('thats wrong,thats low,Tray again.now you have onle' + (4 - i) + 'chances');
      userGuess = prompt();
    }
  }
}
Q6();


function Q7() {
  alert('Dont go away ..there is another game ');
  alert('can you gues the right answer');
  alert('from A to Z ,4 there are 4 letters are right4 letter is right ');

  var userAnswer = prompt();

  var answers = ['A', 'B', 'C', 'D'];

  for (var j = 0; j <= 5; j++) {
    console.log('pass loop1');
    for (var k = 0; k !== answers.length; k++) {
      console.log('pass loop1');

      if (userAnswer !== answers[k]) {

        alert('Wrong,Tray again , you just have ' + (6 - j) + ' times to try');
        userAnswer = prompt();
        break;

      }

      else {
        alert('you are right');
        userPoint++;
        j = 5;
        break;

      }
    }
  }

  alert('the Right Answers was A B C D and E');
  alert('your totally points is' + userPoint);
}
Q7();

alert('gald to see you ' + userName + ' again ');

}
Q();