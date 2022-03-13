$(document).ready(function(){
    $("#design-icon").click(function(){
        $("#design").toggle()
    })

    $("#product-icon").click(function(){
        $("#product").toggle()
    })

    $("#develop-icon").click(function(){
        $("#develop").toggle()
    })

    // $("y").click(function(){
    //     var x=("title1","title2","title3","title4","title5","title6","title7","title8");
    //     var y=("work1","work2","work3","work4","work5","work6","work7","work8");
    //     $("x").toggle()
    // })

    $("#work4").hover(function(){
        $(".title1").toggle();
    })
    $("#work3").hover(function(){
        $(".title2").toggle();
    })
    $("#work2").hover(function(){
        $(".title3").toggle();
    })
    $("#work1").hover(function(){
        $(".title4").toggle();
    })
    $("#work5").hover(function(){
        $(".title5").toggle();
    })
    $("#work6").hover(function(){
        $(".title6").toggle();
    })
    $("#work7").hover(function(){
        $(".title7").toggle();
    })
    $("#work8").hover(function(){
        $(".title8").toggle();
    })

    // form alert
    $("#submit").click(function(){
        var name= document.getElementById("name").value;
        alert("Hello "+ name +", We have received your message. We will get back to you as soon as we can.")
    })
    
    
});