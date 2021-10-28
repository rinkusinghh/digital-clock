let newDate;
let date;
let currentTime;

const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long',
    day: 'numeric'
}
setInterval(() => {
    newDate = new Date();
    date = newDate.toLocaleDateString(undefined, options);
    currentTime = newDate.getHours() + ":" + newDate.getMinutes() +
        ":" + newDate.getSeconds();
    document.getElementById('setTime')
        .innerHTML = `${currentTime} on <br/> ${date}`
}, 1000);