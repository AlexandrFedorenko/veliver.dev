$(document).ready(function() {
    //assignment of the upper and lower range of the class activeCalk, and makes it possible to uplift one element of a number of
    //присвоение верхнему и нижнему ряду клас activeCalk, и делаем возможность выпора одного элемента из ряда
    $("#bt1").click(function(){
        $(this).toggleClass("activeCalk");
        $("#bt2").removeClass('activeCalk');
        $("#bt3").removeClass('activeCalk');
        $("#bt4").removeClass('activeCalk');
    });
    $("#bt2").click(function(){
        $(this).toggleClass("activeCalk");
        $("#bt1").removeClass('activeCalk');
        $("#bt3").removeClass('activeCalk');
        $("#bt4").removeClass('activeCalk');
    });
    $("#bt3").click(function(){
        $(this).toggleClass("activeCalk");
        $("#bt2").removeClass('activeCalk');
        $("#bt1").removeClass('activeCalk');
        $("#bt4").removeClass('activeCalk');
    });
    $("#bt4").click(function(){
        $(this).toggleClass("activeCalk");
        $("#bt2").removeClass('activeCalk');
        $("#bt3").removeClass('activeCalk');
        $("#bt1").removeClass('activeCalk');
    });
    $("#bt5").click(function(){
        $(this).toggleClass("activeCalk");
        $("#bt6").removeClass('activeCalk');
        $("#bt7").removeClass('activeCalk');
        $("#bt8").removeClass('activeCalk');
    });
    $("#bt6").click(function(){
        $(this).toggleClass("activeCalk");
        $("#bt5").removeClass('activeCalk');
        $("#bt7").removeClass('activeCalk');
        $("#bt8").removeClass('activeCalk');
    });
    $("#bt7").click(function(){
        $(this).toggleClass("activeCalk");
        $("#bt5").removeClass('activeCalk');
        $("#bt6").removeClass('activeCalk');
        $("#bt8").removeClass('activeCalk');
    });
    $("#bt8").click(function(){
        $(this).toggleClass("activeCalk");
        $("#bt5").removeClass('activeCalk');
        $("#bt6").removeClass('activeCalk');
        $("#bt7").removeClass('activeCalk');
    });
});
function raschitat() {
//We check the availability of the class activeCalk, and write the value to a variable
    //expres

    if($("#bt1").hasClass("activeCalk") && $('#bt5').hasClass("activeCalk") ){
        var res = 960;
      
    }else if($("#bt1").hasClass("activeCalk") && $('#bt6').hasClass("activeCalk")){
        var res = 1460;
    }else if($("#bt1").hasClass("activeCalk") && $('#bt7').hasClass("activeCalk")) {
        var res = 2960;
    }else if($("#bt1").hasClass("activeCalk") && $('#bt8').hasClass("activeCalk")) {
        var res = 3960;
    }else {
        var res = 0;
    };
//standart
    if($("#bt2").hasClass("activeCalk") && $('#bt5').hasClass("activeCalk") ){
        var res1 = 1460;
    }else if($("#bt2").hasClass("activeCalk") && $('#bt6').hasClass("activeCalk")){
        var res1 = 2460;
    }else if($("#bt2").hasClass("activeCalk") && $('#bt7').hasClass("activeCalk")) {
        var res1 = 3960;
    }else if($("#bt2").hasClass("activeCalk") && $('#bt8').hasClass("activeCalk")) {
        var res1 = 4960;
    }else {
        var res1 = 0;
    };
    //vip
    if($("#bt3").hasClass("activeCalk") && $('#bt5').hasClass("activeCalk") ){
        var res2 = 2460;
    }else if($("#bt3").hasClass("activeCalk") && $('#bt6').hasClass("activeCalk")){
        var res2 = 3460;
    }else if($("#bt3").hasClass("activeCalk") && $('#bt7').hasClass("activeCalk")) {
        var res2 = 4960;
    }else if($("#bt3").hasClass("activeCalk") && $('#bt8').hasClass("activeCalk")) {
        var res2 = 5960;
    }else {
        var res2 = 0;
    };
    //next
    if($("#bt4").hasClass("activeCalk") && $('#bt5').hasClass("activeCalk") ){
        var res3 = 4460;
    }else if($("#bt4").hasClass("activeCalk") && $('#bt6').hasClass("activeCalk")){
        var res3 = 5460;
    }else if($("#bt4").hasClass("activeCalk") && $('#bt7').hasClass("activeCalk")) {
        var res3 = 7960;
    }else if($("#bt4").hasClass("activeCalk") && $('#bt8').hasClass("activeCalk")) {
        var res3 = 9960;
    }else {
        var res3 = 0;
    };

//calculates and displays the page
    document.getElementById("pole-text").innerHTML= res + res1 + res2 + res3 + "  " + "РУБ";
};