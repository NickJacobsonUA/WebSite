                       
                       /*======= Preloader ========*/

document.body.onload = function() 
{	
       var preloader = document.getElementById('page-preloader');
       if( !preloader.classList.contains('done'))
       {
       	preloader.classList.add('done');
       }
}

$(document).ready(function(){
 jQuery('.skdslider').skdslider({delay:10000, animationSpeed: 2000,showNextPrev:true,showPlayButton:false,autoSlide:true,animationType:'fading'});
});
