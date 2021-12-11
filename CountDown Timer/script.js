const daysCount = document.getElementById("days");
const hoursCount = document.getElementById("hours");
const minsCount = document.getElementById("mins");
const secondsCount = document.getElementById("seconds");
const miliSecondsCount=document.getElementById("miliseconds");

const newYears="23 May 2022";

const countdown=()=>{
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
     const milisecondDifference=(newYearsDate-currentDate);
    

     const days=Math.floor(milisecondDifference/1000/86400);
     const hours=Math.floor(milisecondDifference/1000/3600)%24;
     const mins=Math.floor(milisecondDifference/1000/60)%60;
     const seconds=Math.floor(milisecondDifference/1000)%60;
     const miliSeconds=Math.floor(milisecondDifference)%1000;
   
     
     daysCount.innerHTML = days;
     hoursCount.innerHTML = formatTime(hours);
     minsCount.innerHTML = formatTime(mins);
     secondsCount.innerHTML = formatTime(seconds);
     miliSecondsCount.innerHTML=miliSeconds;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown,1000)