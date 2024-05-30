let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')

function displayTime(){
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hrotation = 30* h + m/2 +s/120;
    let mrotation = 6 * m + s/10;
    let srotation = 6*s;

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform =  `rotate(${srotation}deg)`

}
setInterval(displayTime)