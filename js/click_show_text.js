var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("😀", "🙄", "😯", "🐷", "🤓", "🙈", "😈", "🤞", "🤣", "🙆‍♀️", "👴", "🎏","🍍");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            
        });
        $("body").append($i);
        $i.animate({
         
        },
			3000,
			function() {
			    $i.remove();
			});
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}

