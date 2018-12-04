$("#down span").on("click",function(){
    var t=$("#header").next().offset().top;
    $("html, body").animate({scrollTop:t+"px"},500)
});