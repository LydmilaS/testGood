// (function ($) {
    
//   $.fn.slider = function( options ) {  
    
//     var Slider = function(options) {
//       $.extend(this.options, options);
//       this.leftClickAction();
//       this.rightClickAction();
//     };

//     //значения по умолчанию
//     Slider.prototype.options = {
//       duration: 400,
//       slidesContainer: '.portfolio-slider-container',
//       sliderCount: '.portfolio-slide-item',
//       leftArrowNav: '.portfolio-slider-container .prev',
//       rightArrowNav: '.portfolio-slider-container .next',
//       activeSlide: '.portfolio-slider-container .active'
//     };

   

//     Slider.prototype.leftClickAction = function() {

//         var currentIndex = 0, 
//             width = $(window).width(), // width device
//             items = $(this.options.sliderCount),
//             itemsSize = items.size(), // 4
//             item = $(this.options.sliderCount).eq(currentIndex);

//         $(this.options.leftArrowNav).click( function() {
            
//           currentIndex -=1;

//           if (currentIndex < 0) {
//             currentIndex = itemsSize -1;
//           }

//           var item = $('.portfolio-slide-item').eq(currentIndex);

//           items.fadeOut("slow").removeClass("active");
//           item.fadeIn( "slow" ).addClass("active").css('display', 'block');   
//         }); 
//     };

//     Slider.prototype.rightClickAction = function() {  

//         var currentIndex = 0, 
//         width = $(window).width(), // width device
//         items = $(this.options.sliderCount),
//         itemsSize = items.size(), // 4
//         item = $(this.options.sliderCount).eq(currentIndex);



//       $(this.options.rightArrowNav).click(function() {

//         currentIndex += 1;
          
//         if (currentIndex > itemsSize - 1) {
//           currentIndex = 0;
//         }
        
//         var item = $('.portfolio-slide-item').eq(currentIndex);
//             items.fadeOut('slow').removeClass("active");
//             item.fadeIn( "slow" ).addClass("active").css('display', 'block');      
//       });     
//     };


//     // setInterval(function() { 

//     //     var currentIndex = 0, 
//     //     width = $(window).width(), // width device
//     //     items = $(".portfolio-slide-item"),
//     //     itemsSize = items.size(), // 4
//     //     item = $(".portfolio-slide-item").eq(currentIndex);

//     //   currentIndex += 1;
          
//     //     if (currentIndex > itemsSize - 1) {
//     //       currentIndex = 0;
//     //     }
//     //       var item = $('.portfolio-slide-item').eq(currentIndex);
//     //       items.fadeOut('slow').removeClass("active");
//     //       item.fadeIn( "slow" ).addClass("active").css('display', 'block');      
//     // },  5000);  


//     return this.each(function() {        
//       new Slider(options, this);
//     });
//   };
//   return this;
// })(jQuery);
