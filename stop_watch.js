let minTag=document.getElementById('min')
let secTag=document.getElementById('sec')
let mSecTag=document.getElementById('m-sec')
let startBtn=document.getElementById('start-btn')
let stopBtn=document.getElementById('stop-btn')
let resetBtn=document.getElementById('reset-btn')

minTag.textContent="00";
secTag.textContent="00";
mSecTag.textContent="00";

let mSec=0;
let sec=0;
let min=0;
let temp=false;

//timer Function
function timer()
{
    mSec=mSec+10;
    if(mSec===1000)
    {
        sec=sec+1;
        mSec=0;
        if(sec===60)
        {
            min=min+1;
            sec=0;
            
        }

    }
    minTag.textContent=concatZero(min);
    secTag.textContent=concatZero(sec);
    mSecTag.textContent=concatZero(mSec);
}

//ConCat Zero

function  concatZero(time)
{
    if(time<=9) return "0"+time;
    else return time;
}

let interval=null;

//Start button

startBtn.addEventListener('click',()=>
{
        if(!temp)
        {
            interval=setInterval(timer,10);
            temp=true;

        }


});

//Stop Button

stopBtn.addEventListener('click',()=>
{
    if(temp)
    {
        clearInterval(interval);
        temp=false;

    }


});

//Reset Button

resetBtn.addEventListener('click',()=>
{
    clearInterval(interval);
    temp=false;
    min=0;
    sec=0;
    mSec=0;
    minTag.textContent="00";
    secTag.textContent="00";
    mSecTag.textContent="00";

});