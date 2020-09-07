'use strict';

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


alert ('gald to see you ' + userName + ' again ');






















