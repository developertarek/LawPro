// small navbar 
let openbtn = document.getElementById("openbtn")
let clsbtn = document.getElementById("clsbtn")
let smallnav = document.getElementById("small-nav")

openbtn.onclick = function(){
  clsbtn.style.display = "block"
  openbtn.style.display = "none"
  smallnav.style.display = "block"
}
clsbtn.onclick = function(){
  clsbtn.style.display = "none"
  openbtn.style.display = "block"
  smallnav.style.display = "none"
}
// for large screen automatically of all beahvior
window.addEventListener('resize', function() {
  if (window.innerWidth >= 992) {
    clsbtn.style.display = "none"; 
    openbtn.style.display = "none"; 
    smallnav.style.display = "none"; 
  }
  else{
    openbtn.style.display = " block"
  }
});


// for the tab from team section

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();



