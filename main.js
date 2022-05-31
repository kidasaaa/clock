//DARK MODE

function darkMode() {
    var element = document.body;
    element.className = "dark-mode";
    document.getElementById("sunImg").src = "images_clock/Moon.png";
}

function lightMode() {
    var element = document.body;
    element.className = "light-mode";
    document.getElementById("sunImg").src = "images_clock/Sun.png";
}

//CLOCK

function showTime(){
     var date = new Date();
     var h = date.getHours(); 
     var m = date.getMinutes(); 
     var s = date.getSeconds(); 
     var session = "AM";
     
     if(h == 0){
         h = 12;
     }
     
     if(h > 12){
         h = h - 12;
         session = "PM";
     }
     
     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;
     
     var time = h + ":" + m + ":" + s + " " + session;
     document.getElementById("CLOCK").innerText = time;
     document.getElementById("CLOCK").textContent = time;
     
     setTimeout(showTime, 1000);
 }
  
showTime();


//CHANGE MODE ACCORDING TO TIME 

$(function() {
    var hour = (new Date).getHours();
    if (hour >= 11) {
      $('.wrapper').removeClass('light-mode').addClass('dark-mode');
    } else {
      $('.wrapper').removeClass('dark-mode').addClass('light-mode');
    }
    console.log(hour);
});


// 
$('button').click(() => {
	$('#circle').toggleClass('rotated')
})