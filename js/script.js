$(document).ready(function(){
    $("#design-icon").click(function(){
        $("#design").toggle()
        $("design-icon").toggle()
    })

    $("#product-icon").click(function(){
        $("#product").toggle()
        $("product-icon").toggle()
    })

    $("#develop-icon").click(function(){
        $("#develop").toggle()
        $("develop-icon").toggle()
    })

    // $("y").click(function(){
    //     var x=("title1","title2","title3","title4","title5","title6","title7","title8");
    //     var y=("work1","work2","work3","work4","work5","work6","work7","work8");
    //     $("x").toggle()
    // })

    $("#work4").mouseover(function(){
        $(".title1").toggle();
    })
    $("#work3").mouseover(function(){
        $(".title2").toggle();
    })
    $("#work2").mouseover(function(){
        $(".title3").toggle();
    })
    $("#work1").mouseover(function(){
        $(".title4").toggle();
    })
    $("#work5").mouseover(function(){
        $(".title5").toggle();
    })
    $("#work6").mouseover(function(){
        $(".title6").toggle();
    })
    $("#work7").mouseover(function(){
        $(".title7").toggle();
    })
    $("#work8").click(function(){
        $(".title8").toggle();
    })
    
});