// // 'use strict';

var userName = prompt('welcome, what is you name ?');
alert('Nice to meet you ' + userName);

var fatherName = prompt('can you guess what is my fathers name(y/n)?');

if(fatherName.toUpperCase()==='Y')
{
  alert('you are a charm');
  console.log('you are right');
}
else
{
  alert('no one know anyway');
  console.log('you are wrong');
}

var favFood = prompt('can you guess if my favorite food is pizzan ?(y/n)');

if (favFood.toUpperCase() === 'Y' )
{
  alert('so that, I love you');
  console.log('you are right');
}
else
{
  alert('Is there anyone who dont like pizza');
  console.log('you are wrong');
}


var favGame = prompt('can you guess what is my favorite game?(y/n)');

if (favGame.toUpperCase() === 'Y')
{
  alert('Every one know that');
  console.log('you are right');
}
else
{
  alert('so you have never play soduko with me yet');
  console.log('you are wrong');
}

var jaz = prompt('Do you like Jaz music?(y/n)');

switch (jaz.toUpperCase()) {
case 'Y':
  alert('you are amazing like me');
  console.log('you are right');

  break;

default:
  alert('No man! , I dont like them');
  console.log('you are wrong');

  break;
}

var page = prompt('Do you like our page?(y/n)');

switch (page.toUpperCase())
{
case 'Y':
  alert('Thank you');
  console.log('you are right');

  break;

default:
  alert('Me to');
  console.log('you are wrong');
  break;
}


alert('Lets play another game');
alert('you have to guess my number, its between 0 and 10');
alert('Enter the number in the next prompt');

var userGuess = prompt();
var myNumber = 0;


while ( userGuess>10)
{
  alert (' You should type a number between 0 and 10');
  userGuess = prompt();

}


for (var i = 0; i <= 3; i++)
{
  if (userGuess === myNumber)
  { alert('You are a charm ,thats Right !!'); break; }

  else if(10>=userGuess >4) {
    alert('thats wrong,thats high,Tray again.now you have onle'+ (4-i) +'chances');
    userGuess = prompt();
  }
  else if( 4>= userGuess >=1) {
    alert('thats wrong,thats low,Tray again.now you have onle'+ (4-i) +'chances');
    userGuess = prompt();
  }
}
alert ('gald to see you ' + userName + ' again ');
alert('Dont go away ..there is another game ');
alert('can you gues the right answer');
alert('what is bal bla bla?');
alert('A -> Z');

var userAnswer = prompt();

var answers = ['A','B','C','D'];

for ( var j = 0 ; j <= 5 ; j++ )
{
  for ( var k=0 ; k!==answers.length ;k++ )
  {

    if ( userAnswer !== answers[k] )
    {

      alert('Wrong,Tray again , you just have ${6-j} times to try');
      userAnswer = prompt();
      break;

    }

    else
    {
      alert('you are right');
      j =5;
      break;

    }

  }

  break;

}

alert('the Right Answers A B C D and E');
