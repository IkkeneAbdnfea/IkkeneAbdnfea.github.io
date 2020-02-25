




$(window).on('load', function(){ 
    $(".preloader").fadeOut("slow");
});

$(function(){
  
    animateDiv("#school");
    animateDiv("#email");
    animateDiv("#phone");
    animateDiv("#age");

    ///////////////////////
    function animateDiv(idd){
            var positionTop = $(window).scrollTop();
            var positionBottom = positionTop+ window.innerHeight;
            var divTop = $(idd).offset().top;
            var divBottom = divTop+$(idd).height();
            if(positionTop<divTop && positionBottom>divBottom){ 
                if(idd=="#prog-and-db" || idd=="#web-dev" || idd=="#other-skills"){
                    $(".progress-bar",idd).css("-webkit-animation","animate-positive 2s")
                                 .css("animation","animate-positive 2s");

                }
                else if((idd =="#education1" || idd =="#education2" || idd =="#education3")  && window.innerWidth<768){
                    $(idd).addClass("animated bounce");
                }
                else{
                    $(idd).addClass("animated slideInDown");
                }
                
            }
            if(divTop>positionBottom || divBottom<positionTop){
                if(idd=="#prog-and-db" || idd=="#web-dev" || idd=="#other-skills"){
                   $(".progress-bar",idd).css("-webkit-animation","none")
                                 .css("animation","none");

                }
                else if((idd =="#education1" || idd =="#education2" || idd =="#education3")  && window.innerWidth<768){
                    $(idd).removeClass("animated bounce");
                }
                else{
                    $(idd).removeClass("animated slideInDown");
                }
               
            }
    }

    $(window).scroll(function(){
        // adjusting the height of #other-skills
        var newOtherSkillsHeight = $("#web-dev").height();
        $("#other-skills").height(newOtherSkillsHeight);
        // appliying animation on divs
        animateDiv("#school");
        animateDiv("#email");
        animateDiv("#phone");
        animateDiv("#age");

        animateDiv("#education1");
        animateDiv("#education2");
        animateDiv("#education3");

        animateDiv("#prog-and-db");
        animateDiv("#web-dev");
        animateDiv("#other-skills");

        animateDiv("#m1");
        animateDiv("#m2");
        animateDiv("#m3");
        animateDiv("#m4");

    });

   


    $(".exp").mouseover(function(){
        $(this).addClass("animated pulse");
    }).mouseout(function(){
        $(this).removeClass("animated pulse");
    });

    

    
    //sroll smoothly to elements
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;
    
        $("body, html").animate({
            scrollTop: position
        } ,900 );
	});
	
	
	$("#year").text( (new Date).getFullYear() );
});