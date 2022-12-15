
const date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
let show;

function addZero(item){
    if (item<10){
        return "0" + item
    }

    return item
}

document.querySelector(".hours").innerHTML = addZero(hours)
document.querySelector(".minutes").innerHTML = addZero(minutes)
document.querySelector(".seconds").innerHTML = addZero(seconds)

function timer() {
    function increment() {
        seconds += 1;
        document.querySelector(".seconds").innerHTML = addZero(seconds)
        
        var opac = document.querySelectorAll(".opac")
        opac.forEach(function(item){

            if (seconds % 2 === 0) {
                item.style.opacity = "0"
            }
            else {
                item.style.opacity = "1"
            }
        }) 

        if (seconds === 59) {
            seconds = -1
            minutes += 1;
            document.querySelector(".minutes").innerHTML = addZero(minutes)
        }

        if (minutes === 60) {
            hours += 1;
            document.querySelector(".hours").innerHTML = addZero(hours)
        }
    }
    show = setInterval(increment, 1000);
}

timer()














