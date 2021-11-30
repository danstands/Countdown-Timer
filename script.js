const newYears ="1 Jan 2022";


function timer(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor((totalSeconds / 3600 ) / 24);
    console.log(seconds, minutes, hours, days);

    document.getElementById('pDays').innerHTML = days; 
    document.getElementById('pHours').innerHTML = formatTime(hours); 
    document.getElementById('pMinutes').innerHTML = formatTime(minutes); 
    document.getElementById('pSeconds').innerHTML = formatTime(seconds); 
}

function formatTime(time) {
    return time < 10 ? '0'+ time : time;
}

setInterval(timer, 1000);
