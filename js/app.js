'use strict';

let mark=0;

let userName=prompt('Hey, What is our BEAUTIFUL customer name?');
alert('we hope you are well  ' + userName +'  Wellcom to FOODI FOOD');


let myName=prompt('so CAN you guess who is  the best future developer , who made this webpage ?');

if(myName.toLocaleLowerCase()==='yes' || myName.toLocaleLowerCase()=== 'y')
{ alert('There are those who have high confidence here ,okayyyy  lets start ');}
else if (myName.toLocaleLowerCase() ==='no'|| myName.toLocaleLowerCase() ==='n')
{alert('just try it dear!!');}
else alert ('Accept  yes/y or no/n only!! ');



function qqq(loco){
  if(loco.toLocaleLowerCase()==='yes' || loco.toLocaleLowerCase()=== 'y'){
    alert('Erreur *--* mean wrong in English ');}
  else if (loco.toLocaleLowerCase() ==='no'|| loco.toLocaleLowerCase() ==='n'){
    alert('correct , Merci beaucoup');
    mark = mark + 1;}
  else {alert ('Accept  yes/y or no/n only!! ');}
}

function nnn(){
  if(age.toLocaleLowerCase()==='yes' || age.toLocaleLowerCase()==='y')

  
  { //console.log('incorrect');
    alert('NOooo, I am not old ');}
  else if (age .toLocaleLowerCase() ==='no'|| age.toLocaleLowerCase()==='n')
  { //console.log('correct');

    alert('correctttt, i think you know me *--* ');
    mark = mark + 1; }
  else alert ('Accept yes/y or no/n only!! ');
}
function bbb(){
  if(phase.toLocaleLowerCase()==='yes'|| phase.toLocaleLowerCase()==='y')

  {
    alert('perfect - you Know me well  ');
    mark = mark + 1;}
  else if (phase .toLocaleLowerCase() ==='no'|| phase.toLocaleLowerCase()=== 'n')
  { //console.log('incorrect');

    alert('that is wrong  '+ userName);}
  else alert ('Accept yes/y or no/n only!! ');
}
function nbn(){
  if(dark.toLocaleLowerCase()==='yes' || dark.toLocaleLowerCase()==='y')
  {
    alert('incorrect, i live in dark actually');}
  else if (dark.toLocaleLowerCase() ==='no'|| dark.toLocaleLowerCase()==='n'){

    alert('correct, you trust mee ');
    mark = mark + 1;}
  else alert ('Accept yes/y or no/n only !!');
}
function bnb(){
  if(love.toLocaleLowerCase()==='yes' || love.toLocaleLowerCase()==='y'){
    alert('yaaaa, Absolutly i love food ');
    mark = mark + 1;}
  else if (love.toLocaleLowerCase() ==='no' || love.toLocaleLowerCase()==='n'){

    alert('nuppp, i loveee it');}
  else alert ('Accept yes/y or no/n only !!');
}

function niv() {
  for (let i = 0; i < 4; i++) {
    let name = parseInt( prompt ('so lets make it harder , How many letters my name is ??','number'));
    if (name < 6) {
      alert ('Try again : Too Low babe');
    }
    else if (name> 6) {
      alert ('Try again:Too High Broo');
    }
    else if (name === 6) {
      alert ('Congrats!! You  kill it !! , its 6 ');
      mark = mark + 1;
      break; }
    else {
      alert ('O0o0opss you did not guess it ! Its 6 Broo ');
    }
  }
}

function bas(){
  let favCity =[ 'london' ,'bali' ,'japan'];
  let userAnswer ;
  for(let i=0; i<6;i++) {
    userAnswer = prompt('What is  My favorite City').toLowerCase ();{

      if(userAnswer === favCity[0] || userAnswer === favCity[1] || userAnswer === favCity[2] ){
        alert ('Congrats! You are Amazing ! MY Favorite citys are  : london , bali ,japan ');
        mark = mark + 1;
        break;}
      else if (userAnswer !== favCity[0] && userAnswer !== favCity[1] && userAnswer !== favCity[2])
      {
        alert ('Try again ');} }}
  //console.log ('ohhh , you didnt git me right , my Favorite Citys are : UK , Turkey ,japan  ');
  return mark;
}


let loco=prompt('so Do I am from france ?');
qqq(loco);

let age =prompt('so guess my age , is my age 25??');
nnn(age);

let phase =prompt('Am I student ??');
bbb(phase);

let dark=prompt(' Am I afraid of the dark?');
nbn(dark);

let love=prompt('Do i love food??');
bnb(love);

niv();

bas();

alert (' its ok , good job ' + userName +'  press ok to know your mark ');
alert('You git ' + mark + '  out of 7 and i will give u 1 more  mark Because of your beautiful eyes *--* ');
