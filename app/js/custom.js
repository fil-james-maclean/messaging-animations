/* custom JS goes here */

// $(document).ready(function() {
//
//     $('.errorMarker').scrollToFixed( {
//       bottom: 0,
//       limit: $('.errorMarker').offset().top,
//       preFixed: function() { $(this).removeClass('hide'); },
//       postFixed: function() { $(this).addClass('hide'); }
//     });
//   $('.errorMarker').scrollToFixed( {
//     top: 0
//     // limit: $('.errorMarker').offset().top
//     // preFixed: function() { $(this).removeClass('hide'); },
//     // postFixed: function() { $(this).addClass('hide'); }
//   });
// });

// TweenMax.to(target, duration, (vars));

var scrollTabs = $('.tabGroup--scrollArea');
var leftBtn = $('.tabGroup--button__right')
var rightBtn = $('.tabGroup--button__left')
var tabPosition = 1;
leftBtn.on( 'click', function (e) {

  if (tabPosition <= 7) {
    TweenMax.to(scrollTabs, 0.3, { x: '-=232px' });
    tabPosition++;
    console.log(tabPosition);
    if (tabPosition >= 5 ){
      $('.buttonWrap--errorContainer').removeClass('contains-error');
      console.log('removed error');
    }
  }
  else {
    var tl = new TimelineLite();
        tl.to(scrollTabs, 0.2, {left:-80});
        tl.to(scrollTabs, 0.6, {
          left:0,
          ease: Elastic.easeOut
        });
  }

} );

rightBtn.on( 'click', function (e) {

  if (tabPosition >= 2) {
    TweenMax.to(scrollTabs, 0.3, { x: '+=232px' });
    tabPosition--;
    console.log(tabPosition);

    if (tabPosition <= 4 ){
      $('.buttonWrap--errorContainer').addClass('contains-error');
      console.log('added error');
    }
  }
  else {
    var tl = new TimelineLite();
        tl.to(scrollTabs, 0.2, {left:80});
        tl.to(scrollTabs, 0.6, {
          left:0,
          ease: Elastic.easeOut
        });
  }

} );

$('.js-show-error-trigger').on('mouseenter', function(e) {
  TweenMax.to( $('.js-hide-error-target'), 0.6, {
    x: '0%',
    ease: Power2.easeOut
  }  );
});

$('.js-hide-error-trigger').on('mouseleave', function(e) {
  TweenMax.to( $('.js-hide-error-target'), 0.6, {
    x: '-100%',
    ease: Power2.easeIn
  }  );
});

// TweenMax.to( $(this), 0.3, {
//   y:'0%',
//   opacity: 1
// });
$('.js-error-offscreen-trigger').on('inview', function(event, isInView) {
  if (isInView) {
    $('.js-error-offscreen-target').removeClass('fixed-bottom');

  } else {
    $('.js-error-offscreen-target').addClass('fixed-bottom');

  }
});
 $( document ).on('click', '.js-scrollToError', function( e ) {
  TweenLite.to(window, 1, {scrollTo:{y:"#section1", offsetY:120}});
  //  TweenLite.to(window, 2, {scrollTo:{y:".js-error-offscreen-trigger", offsetY:50}} );
   e.preventDefault();
 } );


// $( ".tab__active" ).clone().appendTo( ".tabGroup" );
