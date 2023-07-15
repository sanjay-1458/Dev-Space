const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('reset');
const sec=document.getElementById('sec');
const min=document.getElementById('min');
const hour=document.getElementById('hour');
let Stop=0;
let check=0;
function timer(){
    check+=1;
    if(check>=2){
        return
    }
    counter1=Number(sec.innerHTML);
    counter2=Number(min.innerHTML);
    counter3=Number(hour.innerHTML);
    function incrementseconds(){
        counter1+=1;
        if(counter1>=60){
            counter2+=1;
            if(counter2>=60){
                counter3+=1;
                hour.innerText=counter3<10?`0${counter3}`:counter3;
                counter2=0;
                if(counter3>=99){
                    counter3=0;
                    hour.innerText=counter3<10?`0${counter3}`:counter3;
                }
            }
            min.innerText=counter2<10?`0${counter2}`:counter2;
            counter1=0;
        }
        sec.innerText=counter1<10?`0${counter1}`:counter1;
    }
    Stop=setInterval(incrementseconds,1000);
}
start.addEventListener('click',timer);
function rst(){
    check=0;
    clearInterval(Stop);
    sec.innerText='00';
    hour.innerText='00';
    min.innerText='00';
}
reset.addEventListener('click',rst);
function hold(){
    check=0;
    clearInterval(Stop);
}
stop.addEventListener('click',hold);
