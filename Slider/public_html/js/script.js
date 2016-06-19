/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function (){
  
//$(".slider").bxSlider();    
   $.fn.abc = function(){

		if(this.length == 0) return this;
		// support mutltiple elements
		if(this.length > 0){
                    $(this).find("li").addClass("slider_li");
                    $(this).find(".slider_li:first").addClass("active");
                    debugger;
                    $(this).find(".active").fadeIn().delay(1200).fadeOut().removeClass("active").next().addClass("active");
                    re_call();
		}
            };
            $(".slider").abc();
            function re_call(){
                $(".active").fadeIn().delay(1200).fadeOut().removeClass("active").next().addClass("active");
                
            }
            
});
