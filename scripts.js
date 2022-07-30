function checkTime(){
    let body = document.querySelector('body');
    let message = document.querySelector('.message');
    let img = document.querySelector('img.photo');

    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds  = new Date().getSeconds()
    if (minutes < 10) {
        message.innerHTML = `It's ${hours}:0${minutes}:${seconds}`
    } else if (seconds < 10) {
        message.innerHTML = `It's ${hours}:${minutes}:0${seconds}`
    } else {
        message.innerHTML = `It's ${hours}:${minutes}:${seconds}`
    }

    if (hours>= 5 && hours < 12){
        body.style.backgroundImage = "url('assets/morning.png')";
        img.src = "assets/morninggif.gif"
    } else if(hours >= 12 && hours <= 18){
        body.style.backgroundImage = "url('assets/afternoon.png')";
        img.src = "assets/afternoongif.gif"
        body.style.color = "#fefefe"
    } else {
        body.style.backgroundImage = "url('assets/night.png')";
        img.src = "assets/nightgif.gif"
        body.style.color = "#fefefe"
    }
    
    setTimeout(checkTime, 1000);
}


