const anniversaryDate = new Date("Jul 24, 2021 00:00:00").getTime();

// Run myfunc every second
const countDownToDate = setInterval(function() {

let now = new Date().getTime();
let timeleft = anniversaryDate - now;
    
// Calculating the days, hours, minutes and seconds left
let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("days").innerHTML = `
<b style='font-size: 3em; color:white'>\ ${days}</b>` + 
`<b style='font-size: 1.2em; color:white'>\ días </b>`; 

document.getElementById("hours").innerHTML = `
<b style='font-size: 3em; color:white'>\ ${hours}</b>` +
 `<b style='font-size: 1.2em; color:white'>\ horas </b>`; 

 document.getElementById("mins").innerHTML = `
<b style='font-size: 3em; color:white'>\ ${minutes}</b>` +
 `<b style='font-size: 1.2em; color:white'>\ minutos </b>`;  

 document.getElementById("secs").innerHTML = `
<b style='font-size: 3em; color:white'>\ ${seconds}</b>` +
 `<b style='font-size: 1.2em; color:white'>\ segundos </b>`;  
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(countDownToDate);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 1000);

