let yourScore=0;
let compScore=0;
let tieBtn=document.getElementById('hide')
let tieCount=0

const choices=document.querySelectorAll(".choice");
let userResult=document.getElementById('user-score');
let compResult=document.getElementById('comp-score');

choices.forEach((choice)=>{
  choice.addEventListener("click",(event)=>{
    tieBtn.innerHTML='';
    let usersChoice=event.target.id;
    let compsChoice='';
    let compMove=Math.random();
    if (compMove<1/3) {
      compsChoice='rock';
    }
    else if (compMove<2/3) {
      compsChoice='paper';
    }
    else {
      compsChoice='scissors';
    }
    conditionCheck(usersChoice,compsChoice); 
  })
})
const reset= ()=>{
  yourScore=0;
  compScore=0;
  tieCount=0;
  tieBtn.innerHTML=`Tie ${tieCount}`;
  userResult.innerHTML=`${yourScore}`;
  compResult.innerHTML=`${compScore}`;
}
const conditionCheck=(user,comp)=>{
  if (user===comp) {
    tieCount++;
    tieBtn.innerHTML=`Tie ${tieCount}`;
  }
  else{
    let userWin=true
    if (user==='rock'){
     userWin=comp==='paper'?false:true
    }else if(user=='paper'){
      userWin=comp==='scissors'?false:true
    }else{
      userWin=comp==='rock'?true:false
    }
    winnerCheck(userWin);

  }
}
const winnerCheck=(userWin)=>{
  if (userWin) {
    yourScore++;
    userResult.innerHTML=`${yourScore}`;
  } else {
    compScore++;
    compResult.innerHTML=`${compScore}`;
  }

}


