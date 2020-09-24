var slider = document.getElementById("customRange3");
var output = document.getElementById("customRange");
output.innerHTML = slider.value+'$';

slider.oninput = function() {
    output.innerHTML = this.value+'$';
}
var numofrs = document.getElementById("numbofrs");
numofrs.innerHTML = "<i class=\"fas fa-search text-primary\"></i>"+" "+ Math.floor(Math.random()*1999);