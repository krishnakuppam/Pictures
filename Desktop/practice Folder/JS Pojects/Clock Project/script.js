function  updateClock() {

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "AM";
    let DateString = now.toDateString();



    if (hours >= 12) {
        ampm = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timestring = `${hours}:${minutes}:${seconds} ${ampm} - ${DateString}`;

    document.getElementById("clock").textContent = timestring;

}
setInterval(updateClock, 1000);
updateClock();