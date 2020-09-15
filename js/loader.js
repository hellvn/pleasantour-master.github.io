var x;

function spiner() {
    x = setTimeout(contentvisibility, 3000);
}

function contentvisibility() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("successalert").style.display = "block";
}
//redirecting
var y = 10;
document.getElementById('time').innerHTML = y;
function stime(){document.getElementById('time').innerHTML = y;    y = y - 1;
    if(y == 0){clearInterval(timing); location.replace('index.html')}
}
var timing = setInterval("stime();",1000);