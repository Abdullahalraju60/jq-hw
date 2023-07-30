$(document).ready(function(){

    $(".bttn").click(function(){
      $("#div1").fadeIn(1000);
      $("#div2").fadeIn(2000);
      $("#div3").fadeIn(3000);
      });
    //
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
    //  
    $(".p1").click(function(){
      $(this).hide();
    });
    // 
    $("button").click(function(){
      $(".p2").hide();
    });
    //   
    $("#p3").mouseenter(function(){
      alert("You entered p3!");
    });
    //   
    $("input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
      $(this).css("background-color", "green");
    });
    // 
    $(".btttn").click(function(){
      $(".box").animate({
        left: '150px',
        opacity: '1.5',
        height: '150px',
        width: '150px'
      });
    });
    // 
    $(".bbttnnn").click(function(){
      $(".ppp").hide("slow", function(){
        alert("The paragraph is now hidden");
      });
    });
    // 
    $(".but").click(function(){
      $("#p4").css("color", "red")
        .slideUp(2000)
        .slideDown(2000);
    });
    // 
    $(".butt").click(function(){
      alert("Value: " + $("#test").val());
    });
    // 
    $(".btt").click(function(){
      $(".pr4").css({"background-color": "yellow", "font-size": "200%"});
    });
    // 
    

  });
  