let hour = document.getElementById('hour');
console.log(hour);
let minute = document.getElementById('minute')
console.log(minute);
let second = document.getElementById('second');
console.log(second);
let ampm = document.getElementById('ampm');
console.log(ampm);


let isAmPm = function (hours) {
    if (hours >= 12) {
        ampm.innerHTML = "PM"
    } else {
        ampm.innerHTML = "AM"
    }
}


let digitalClock = function () {
    let date = new Date();
    // console.log(date);
    let hourValue = date.getHours();
    let minueValue = date.getMinutes();
    let secondValue = date.getSeconds();
    let ampm = isAmPm(hourValue);
    hour.innerHTML = hourValue;
    minute.innerHTML = minueValue;
    second.innerHTML = secondValue;
}
setInterval(digitalClock, 1000)