let userSeq=[];
let gameSeq=[];

let level=0;
let started=false;
let h2=document.querySelector("h2");

let btns=["red","blue","green","yellow"];

document.addEventListener("keypress",function(){
if (started== false){
    console.log("Game started");
    started=true;
    levelup();
}
});

function levelup(){
    userSeq=[]; // reset user sequence
    level++;
    h2.innerText=`level ${level}`;

    let randInx=Math.floor(Math.random()*4);
    let randColor=btns[randInx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameFlash(randbtn);
    gameSeq.push(randColor);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 300);
}

function checkAns(idx){
    // console.log("curr level: " , level);
   

    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
       setTimeout(levelup,1000);
       }
    }else{
        h2.innerHTML=`Game Over! Your Score was<b> ${level}</b> Press any key to restart`;
        reset();
    }
}

function btnPress(){
 console.log(this);
 let btn=this;
 userFlash(btn);


 let userColor=btn.getAttribute("id");
 userSeq.push(userColor);
 checkAns(userSeq.length-1);
 console.log(userColor);
}

let allbtns= document.querySelectorAll(".btn");
for (btn of allbtns){
        btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

