let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["red","yellow","green","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){ // step1
    if(started==false){
        console.log("game started");
        started=true;
        
    }
    levelup();
});
function gameflash(btn){
btn.classList.add("flash"); //step3
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}
function userflash(btn){
btn.classList.add("userflash"); //step5
setTimeout(function(){
    btn.classList.remove("userflash");
},250);
}

function levelup(){ // step 2 and recursive
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
let ranidx=Math.floor(Math.random()*4);
let rancolor=btns[ranidx];//color select ka rhe hai yellow green red purple me se
let ranbtn=document.querySelector(`.${rancolor}`);// jo color aaya hai uska class select kar rhe hai document btn red purple green yellow se
gameseq.push(rancolor);
console.log(gameseq);
    gameflash(ranbtn);
}
function checkans(idx){ // step5,
//console.log(level);
if(userseq[idx]==gameseq[idx]){ // step5=> step4
   if(userseq.length==gameseq.length){ // step5=>step2
    setTimeout(levelup,1000); // in case same color do baar flash hoga to dikhega nhi isliye humne timeout daal diya hai taki flash dikhe
    // levelup();
   }
}
else{ // step5=>final step
    h2.innerHTML=`Game Over! Your score was <b>${level}</b> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
}
}
function btnpress(){
   
    let btn=this; // user ne koi bhi button press kar diya hai setp4,b
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn"); //step4,a
    for(btn of allbtns){
        btn.addEventListener("click",btnpress);
    }
function reset(){ //game over
  started=false;
  gameseq=[];
  userseq=[];
  level=0;  
}