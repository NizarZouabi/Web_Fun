function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

var hour = document.getElementById("hour")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")

setInterval(function() {
    var time = getSecondsSinceStartOfDay();

    var secRotation = (time%60) * 6;
    var minRotation = Math.floor(time/60) % 60 * 6;
    var hourRotation = Math.floor(time/3600) % 12 * 30;

    seconds.style.transform = 'rotate(' + secRotation + 'deg)';
    minutes.style.transform = 'rotate(' + minRotation + 'deg)';
    hour.style.transform = 'rotate(' + hourRotation + 'deg)';
}, 1000);
