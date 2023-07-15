let hour=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
let xm=document.getElementById('xm');

function fun(){
    currTime=new Date();
    currSec=currTime.getSeconds();
    currMin=currTime.getMinutes();
    currHour=currTime.getHours();
    sec.innerText=currSec<10?`0${currSec}`:currSec;
    min.innerText=currMin<10?`0${currMin}`:currMin;
    hour.innerText=currHour<10?`0${currHour}`:currHour;
    let xhour=Number(hour.innerText);

    if(xhour>=0 && xhour<=11){
        xm.innerText='AM';
    }
    else{
        xm.innerText='PM';
    }
}

setInterval(fun,1000);
