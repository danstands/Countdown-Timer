var newYears ="1 Jan 2023";


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

function setNewYears() {
    newYears = "1 Jan 2023";
    document.getElementById('h1title').innerHTML = "New Years";
    console.log("button new");
    document.body.style.backgroundImage = 'url("./bgSydney.jpg")'
    timer();
}

function setChristmas(){
    newYears = "25 Dec 2022";
    document.getElementById('h1title').innerHTML = "Christmas";
    console.log("button xmas");
    document.body.style.backgroundImage = 'url("./bgChristmas.jpg")'
    timer();
}

function setEOFY(){
    newYears = "01 Jul 2022";
    document.getElementById('h1title').innerHTML = "End of Financial Year";
    console.log("button eofy");
    document.body.style.backgroundImage = 'url("./bgEOFY.jpg")'
    timer();
}