var min=0;
var sec=0;
var msec=0;
var minhead=document.getElementById("min");
var sechead=document.getElementById("sec");
var msechead=document.getElementById("msec");
function timer(){
    msec++;
    msechead.innerHTML=msec;
    if(msec>=100){
        sec++;
        msec=0;
        sechead.innerHTML=sec;
    }
    else if(sec>60){
        min++;
        sec=0;
        minhead.innerHTML=min;
    }
}
function start(){
interval=setInterval(timer,10);
}
function stop(){
    clearInterval(interval);
}
function reset(){
    sec=0;
    msec=0;
    min=0;
    minhead.innerHTML=min;
    sechead.innerHTML=sec;
    msechead.innerHTML=msec;
}