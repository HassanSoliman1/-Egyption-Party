
$("#Page2 h3").click(function(){

    $(this).next().slideDown(500,function(){
        
        $("#Page2 p").not(  $(this) ).slideUp(500);
        
    })
   
})


