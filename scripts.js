function checkTime(){
    let body = document.querySelector('body');
    let message = document.querySelector('.message');

    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    message.innerHTML = `It's ${hours}:${minutes}`

    if (hours>= 5 && hours < 12){
        body.style.backgroundImage = "url('assets/morning.png')";
    } else if(hours >= 12 && hours <= 18){
        body.style.backgroundImage = "url('assets/afternoon.png')";
    } else {
        body.style.backgroundImage = "url('assets/night.png')";
    }
    
}


