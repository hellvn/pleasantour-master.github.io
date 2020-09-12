window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("logo").className="w50";
    } else {
        document.getElementById("logo").className="w100";
    }
}