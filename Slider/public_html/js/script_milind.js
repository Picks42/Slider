/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var $slider = $(".slider");
var $prevButton = $('#prevButton');
var $nextButton = $('#nextButton');

$(document).ready(function () {
    $slider.sliderM({
        isAutomatic:false,
        delayTime:3000
    });
    addClick();

});
function addClick(){
    $prevButton.click(function(event){
        $slider.data('sliderM').previous();
    });
    $nextButton.click(function(event){
        $slider.data('sliderM').next();
    });
}