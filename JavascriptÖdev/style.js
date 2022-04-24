let userName = document.getElementById("myName")
let clock = document.getElementById("myClock")
let weekDay = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

userName = prompt("Adınız nedir?") 
myName.innerHTML = `Hoşgeldin ${userName}`

function Time() {
    const today = new Date();
    let hour = today.getHours();
    let minute= today.getMinutes() ; 
    let second=today.getSeconds() ; 

clock.innerHTML = hour + ":" + minute + ":" + second + " " + today
setTimeout(showTime, 1000)   
} 
Time() 