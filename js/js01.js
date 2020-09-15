function booked(){
    location.replace("../../index.html")
}
// readmore script
$(document).ready(function(){
    var maxLength = 300;
    $(".show-read-more").each(function(){
        var myStr = $(this).text();
        if($.trim(myStr).length > maxLength){
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append(' <a href="javascript:void(0);" class="read-more"> Read more...</a>');
            $(this).append('<span class="more-text">' + removedStr + '</span>');
        }
    });
    $(".read-more").click(function(){
        $(this).siblings(".more-text").contents().unwrap();
        $(this).remove();
    });
});
//readmore script end
// load more button script
$(function () {
    $(".loadmore").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".loadmore:hidden").slice(0, 3).slideDown();
        if ($(".loadmore:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});
//load more btn end
// back to top script
var mybutton = document.getElementById("backtotop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function backtop() {
    $("html, body").animate({scrollTop: "0"});
}
// back to top end