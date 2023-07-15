const days=document.getElementById('days');
const hours=document.getElementById('hours');
const mins=document.getElementById('mins');
const secs=document.getElementById('secs');


const updateTime=(date)=>{
    const current=new Date();
    const timeremain=date-current;
    let cSecs=Math.floor(timeremain/1000)%60;
    let cMins=Math.floor(timeremain/1000/60)%60;
    let cHours=Math.floor(timeremain/1000/60/60)%24;
    let cDays=Math.floor(timeremain/1000/60/60/24);
    const formatTimes = (time) =>{
        return time<10?`0${time}`:time;
    }
    days.textContent=formatTimes(cDays);
    hours.textContent=formatTimes(cHours);
    mins.textContent=formatTimes(cMins);
    secs.textContent=formatTimes(cSecs);
}

const countDown=(date)=>{
    setInterval(()=>updateTime(date),1000);
}

const date=new Date("April 01 2025 03:03");
countDown(date);
