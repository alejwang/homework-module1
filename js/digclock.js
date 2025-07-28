function currentTime() {
    var d = new Date();
    var hr = d.getHours(); 17
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;
    var utchr = d.getUTCHours(); 0
    var timediff = utchr - hr;

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }

    if (hr > 12) {
        hr = hr - 12;
        ampm = 'PM';
    } else if (hr == 12) {
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }


    var adjTimeDiff = (timediff < 0) ? 24 + timediff : timediff;
    var timeZone = '';
    switch (adjTimeDiff) {
        case 4:
            timeZone = 'ET';
            break;
        case 5:
            timeZone = 'CT';
            break;
        case 6:
            timeZone = 'MT';
            break;
        case 7:
            timeZone = 'PT';
            break;
        default:
            timeZone = 'Local';
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    document.getElementById("clock").innerText = time;
}

currentTime();
setInterval(currentTime, 1000);