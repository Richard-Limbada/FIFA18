'use strict'


//full page 

$(document).ready(function() {
    $('#fullpage').fullpage({
//sectionsColor: [0, 0, '#000033', '#000033', '#000033'],
//    slidesNavigation: true,
//    slidesNavPosition: 'bottom',
    scrollHorizontally: true,
    scrollingSpeed: 1500,
    autoScrolling: true,
    fitToSection: true,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    controlArrows: true,
    verticalCentered: true,
    resize : true,
    paddingTop: '0',
    paddingBottom: '0',
    fixedElements: '#header, .footer',
    parallax: true,
    responsive: 1,
    navigation: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage' , '#info1', 'fourthPage' , 'fifthPage'],
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third page' , 'Info1' , 'Fourth page', 'Fifth page'],
    });
  
    
    var timer = null;
  var mainMenu = $('#main-menu');
  var landingPageVideo = videojs('landing-page-video', {
    controls: false,
    autoplay: true,
    preload: 'auto',
    loop: false,
  });

  setTimeout(function(){
    mainMenu.removeClass('hidden')
  }, 1000);

  setTimeout(function(){
    mainMenu.addClass('hidden')
  }, 3000);

    
});


//var player = $('#background-video').data('ytPlayer').player;
//player.pauseVideo();
//player.playVideo();
//
//player.addEventListener('onStateChange', function(data){
//  console.log("Player State Change", data);
//});
//    
//    $('#video').YTPlayer({
//    fitToBackground: true,
//    videoId: '1B3_G3Pq7rM',
//        playerVars: {
//      modestbranding: 0,
//      autoplay: 1,
//      controls: 0,
//      showinfo: 1,
//      branding: 0,
//      rel: 0,
//      autohide: 0,
//      start: 0
//        }
//});
$(document).ready(function() {
  
    $('.js-tilt').tilt({
    reset: false,
    scale: 1.2,
    maxTilt: 20,
    perspective: 2000,
    glare: false,
    maxGlare: 0.5,
    reset: true,
    disableYAxis: 1,
})
})

