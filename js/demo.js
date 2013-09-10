$( function() {
    console.log('-- ready --- ');
     function calcBgPos(w, h, x, y, start, adjuster, inertia) {
        var bgPos = ((($(window).width() - w) / 2) + x) + 'px ' +
            ((-((start - adjuster)) * inertia) + y)  + 'px';

            return bgPos;
    }


   // handle scrolling
    $(window).bind('scroll', function() {

                    var winH = $(window).height(),
                        winW = $(window).width(),
                        scrT = $(window).scrollTop();
                        //console.log(scrT);

                        $('.parallax-section:not(:in-viewport)')
                                                .css('opacity', 0);

                        $('.parallax-section:in-viewport').each(function(){

                            var thisId = $(this).attr('id'),
                                thisTop = $(this).offset().top;
                                thisBanner = $(this).find('.parallax-banner');
                                console.log('thisTop: ' + thisTop);

                                // show what's in the viewport
                                $(this).css('opacity', 1);

                                // make the banner stick at the top
                                if (scrT+0 > thisTop) {
                                    thisBanner.css('position', 'fixed');
                                } else {
                                    thisBanner.css('position', 'static');
                                }

                                var theTop = winH + scrT,
                                    layout = $('body').data('width');


                                // parallax effect for "#intro" section
                                    if ( (thisId == 'intro-invert') || (thisId == 'intro')) {
                                       if (layout == '1440') {
                                            $(this).css({
                                                backgroundPosition:
                                                // function calcBgPos(w, h, x, y, start, adjuster, inertia) {
                                                    calcBgPos(960, 583, 0, 0, theTop, 0, 0.00)
                                            });
                                        } else {
                                            $(this).css({
                                                backgroundPosition:
                                                    calcBgPos(960, 583, 0, 0, theTop, 0, 0.00)
                                            });
                                        }

                                    }


                                 if ((thisId == 'feature-1')) { // feature-1 in viewport
                                     $('#intro').css({
                                                backgroundPosition:
                                                    calcBgPos(960, 583, 0, 0, theTop, 1166, 0.05) // note 1166 is top after feature-1 show
                                            });


                                            $(this).css({
                                                backgroundPosition:
                                                    calcBgPos(1440, 812, 190, 180, theTop, 1800, 0.20) + ", " +
                                                    calcBgPos(1440, 812, 310, 320, theTop, 1800, 0.30) + ", " + // eyeglass
                                                    calcBgPos(1440, 812, 450, 360, theTop, 1800, 0.20)  + ", " +
                                                    calcBgPos(1440, 812, 490, 200, theTop, 1800, 0.25)
                                          });
                                 }

                                  if ((thisId == 'feature-2')) {
                                            $(this).css({
                                                backgroundPosition:
                                                  //calcBgPos(960, 545, 490, 300, theTop, 3100, 0.25) // + ", " +
                                                  calcBgPos(960, 545, -220, 250, theTop, 2600, 0.15)
                                          });


                                 }

                                 if ((thisId == 'feature-3')) {
                                            $(this).css({
                                                backgroundPosition:
                                                 // calcBgPos(294, 383, 0, 450, theTop, 3900, 0.35)  + ", " +
                                                  calcBgPos(723, 526, 360, 280, theTop, 3500, 0.25)

                                          });
                                 }



                            }); // end each:in-viewport

    }); // end .bind 'scroll'


$(window).bind('resize', function(){
           /* if ($(window).width() <= 1440) {
                $('body')
                    .addClass('s1440')
                    .data('width', 1440);
            } else {
                $('body')
                    .removeClass('s1440')
                    .data('width', '');
            } */

            $(window).scroll();
        });


$(window).scroll();

});