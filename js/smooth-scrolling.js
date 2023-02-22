// SMOOTH SCROLLING SECTIONS
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 800);
            return false;
        }
    }
});

// NUMBER COUNTER
// from a pen by Bargarida Botelho:  https://codepen.io/mmbotelho/pen/NLRLYN
$(document).ready(function() {
    $(document).scroll(function() {
      // calculate the viewport
      var gap = $(window).height();
      // calculate where the sections begin
      var intro = ($('.intro').offset().top) + gap;
      var section1 = ($('.section1').offset().top) + gap;
      var section2 = ($('.section2').offset().top) + gap;
      var section3 = ($('.section3').offset().top) + gap;
      var section4 = ($('.section4').offset().top) + gap;
      var section5 = ($('.section5').offset().top) + gap;
      var section6 = ($('.section6').offset().top) + gap;
      var section7 = ($('.section7').offset().top) + gap;
      var section8 = ($('.section8').offset().top) + gap;
      var scrollPos = $(document).scrollTop();
      
      // Apply text changes
      if (scrollPos >= intro && scrollPos < section1) {
        $('.hit-counter span').text('2,617,586');
      }
      else if (scrollPos >= section1 && scrollPos < section2) {
        $('.hit-counter span').text('9,978,028');  
      }
      else if (scrollPos >= section2 && scrollPos < section3) {
        $('.hit-counter span').text('39,137,582');  
      }
      else if (scrollPos >= section3 && scrollPos < section4) {
        $('.hit-counter span').text('77,094,061');  
      }
      else if (scrollPos >= section4 && scrollPos < section5) {
        $('.hit-counter span').text('502,072,142');  
      }
      else if (scrollPos >= section5 && scrollPos < section6) {
        $('.hit-counter span').text('1,372,354,708');  
      }
      else if (scrollPos >= section6 && scrollPos < section7) {
        $('.hit-counter span').text('7');  
      }
      else if (scrollPos >= section7 && scrollPos < section8) {
        $('.hit-counter span').text('8');  
      }
      else {
        $('.hit-counter span').text('');  
      } 
    });
  });

/*
1990 = 2,617,586 <- 1
1991 = 4,280,729
1992 = 6,885,827
1993 = 9,978,028 <- 2
1994 = 20,372,978
1995 = 39,137,582 <- 3
1996 = 77,094,061 <- 4
1997 = 120,463,229
1998 = 187,786,480
1999 = 280,906,348
2000 = 414,031,855
2001 = 502,072,142 <- 5
2002 = 664,556,009
2003 = 780,641,499
2004 = 912,822,719
2005 = 1,029,426,397
2006 = 1,160,635,060
2007 = 1,372,354,708 <- 6
2008 = 1,573,014,972
2009 = 1,770,772,640
2010 = 2,021,244,343
2011 = 2,218,981,626
2012 = 2,426,962,781
2013 = 2,598,722,381
2014 = 2,793,785,954
2015 = 3,004,713,178
2016 = 3,256,356,360
2017 = 3,483,895,373
2018 = 3,795,523,228
2019 = 4,194,082,864
2020 = 4,699,887,523
2021 = 4,901,344,780
2022 = 5,300,127,092
*/