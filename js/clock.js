const jsClock = document.querySelector("#clock");

function clock(){
    const date = new Date();
    const clockHours = String(date.getHours());
    const clockMins = String(date.getMinutes());
    const clocksec = String(date.getSeconds());

    jsClock.innerHTML = `${clockHours.padStart(2,"0")}:${clockMins.padStart(2,"0")}:${clocksec.padStart(2,"0")}`
}

clock();
setInterval(clock ,1000)