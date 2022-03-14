$(document).ready(function(){
    $(".design1").click(function(){
        $("#design-icon").toggle();
        $("#dsn").toggle();
        $("#design").toggle();
    })

    $(".develop1").click(function(){
        $("#develop-icon").toggle();
        $("#dv1").toggle();
        $("#develop").toggle();
    })

    $(".product1").click(function(){
        $("#product-icon").toggle();
        $("#pdct").toggle();
        $("#product").toggle();
    })
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
    $("#btn").click(function(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("mail").value;
        var message = document.getElementById("message").value;
        console.log(message);
        if (name===""||email===""||message==="") {
            alert("Please fill the form!")
        }
        else alert("Hello "+ name +", We have received your message. We will get back to you as soon as we can. Thank you!")
    })
});