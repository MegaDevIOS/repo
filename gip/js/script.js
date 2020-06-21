$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if(scroll>100){
        $("nav").css("background", "rgba(228,63,90,0.8");
    $("nav").css("-webkit-backdrop-filter", "blur(10px) saturate(3)");
    $("nav").css("backdrop-filter", "blur(10px) saturate(3)");
    $("nav>div").css("width","70%");


    }else{

        $("nav").css("background", "rgba(100,40,63,0");
    $("nav").css("-webkit-backdrop-filter", "none");
    $("nav").css("backdrop-filter", "none");
    $("nav>div").css("width","80%");
    }

});