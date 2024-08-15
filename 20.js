let mintag=document.getElementById('min')
let sectag=document.getElementById('sec')
let misectag=document.getElementById('m-sec')
let startbtn=document.getElementById('start-btn')
let endbtn=document.getElementById('end-btn')
let restartbtn=document.getElementById('restart-btn')

mintag.textContent='00';
sectag.textContent='00';
misectag.textContent='00';

let msec=0;
let sec=0;
let min=0;
let temp=false

function timer()
{
    msec+=10;
    if(msec==1000){
        sec=sec+1
        msec=0
        if(sec==60){
            min=min+1
            sec=0
        }
    }
    mintag.textContent=conc(min)
    sectag.textContent=conc(sec)
    misectag.textContent=conc(min)
}
function conc(time){
    if(time<=9) return "0" +time;
    else return time;
}
