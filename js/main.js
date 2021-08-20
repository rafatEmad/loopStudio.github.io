$(document).ready(function(){
    $(".humMenu").on("click", function(){
        $(".fixedMenu").fadeIn(500);
    });
    $(".close").on("click", function(){
        $(".fixedMenu").fadeOut(500);
    });
});