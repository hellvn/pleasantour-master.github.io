function newsletterform() {
    var x = document.forms["newsletter"]["fmail"].value;
    if (x == "" || x == null) {
        alert("Enter your email address to subscribe");
        return false;
    }
    else{
        alert("Thank you for subscribe!");
    }
}
function searchform(){
    var x = document.forms["searcher"]["topsearch"].value;
    if (x == "" || x == null) {
        alert("Where you want to go?");
        return false;
    }
}