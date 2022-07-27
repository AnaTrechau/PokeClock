function checkTime(){
    let body = document.querySelector('body');
    let message = document.querySelector('.message');
    let img = document.querySelector('img.photo');

    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    if (minutes < 10) {
        message.innerHTML = `It's ${hours}:0${minutes}`
    }
    else {
        message.innerHTML = `It's ${hours}:${minutes}`
    }

    if (hours>= 5 && hours < 12){
        body.style.backgroundImage = "url('assets/morning.png')";
        img.src = "assets/morninggif.gif"
    } else if(hours >= 12 && hours <= 18){
        body.style.backgroundImage = "url('assets/afternoon.png')";
        img.src = "assets/afternoongif.gif"
    } else {
        body.style.backgroundImage = "url('assets/night.png')";
        img.src = "assets/nightgif.gif"
    }
    
}


