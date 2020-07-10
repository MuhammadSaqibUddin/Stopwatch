var min = 0, sec = 0, mili = 0, interval;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var miliHeading = document.getElementById("mili");

function timer() {
    mili++;
    miliHeading.innerHTML = mili;
    if (mili == 100) {
        sec++;
        mili = 0;
        miliHeading.innerHTML = mili;
        
        if (sec == 60) {
            min++;
            sec = 0;
            secHeading.innerHTML = sec;

            if(min == 60){
                min = 0;
                minHeading.innerHTML = min;
            }
            else{
                minHeading.innerHTML = min;
            }
        }
        else {
            secHeading.innerHTML = sec;
        }
    }
}

function startStop() {
    if (document.getElementById("btn").innerHTML == "Start") {
        document.getElementById("btn").innerHTML = "Stop";
        interval = setInterval(timer, 10);
    }
    else {
        document.getElementById("btn").innerHTML = "Start";
        clearInterval(interval);
    }
}

function reset() {
    if(document.getElementById("btn").innerHTML == "Stop"){
        document.getElementById("btn").innerHTML = "Start";
    }
    min = 0;
    sec = 0;
    mili = 0;
    miliHeading.innerHTML = mili;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    clearInterval(interval);
}

















