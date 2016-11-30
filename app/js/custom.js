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

  if (tabPosition <= 10) {
    TweenMax.to(scrollTabs, 0.3, { x: '-=232px' });
    tabPosition++;
    checkTabPosition();
    console.log(tabPosition);
    // if (tabPosition >= 5 ){
    //   $('.buttonWrap--errorContainer').removeClass('contains-error');
    //   console.log('removed error');
    // }
  }
  else {
    var tl = new TimelineMax();
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
    checkTabPosition();
    console.log(tabPosition);

    // if (tabPosition <= 4 ){
    //   $('.buttonWrap--errorContainer').addClass('contains-error');
    //   console.log('added error');
    // }
  }
  else {
    var tl = new TimelineMax();
        tl.to(scrollTabs, 0.2, {left:80});
        tl.to(scrollTabs, 0.6, {
          left:0,
          ease: Elastic.easeOut
        });
  }

} );

function checkTabPosition() {
  if (tabPosition == 5) {
      console.log("error is right");
      TweenMax.to( $('.tabGroup--errorContainer__right'), 0.3, { opacity: 1 });
  }

  else if (tabPosition == 11) {
    console.log("error is left");
    TweenMax.to( $('.tabGroup--errorContainer__left'), 0.3, { opacity: 1 });
  }
  else if (tabPosition >= 6 &&  tabPosition <= 10) {
    console.log("on screen");
    TweenMax.to( $('.tabGroup--errorContainer__left'), 0.3, { opacity: 0 });
    TweenMax.to( $('.tabGroup--errorContainer__right'), 0.3, { opacity: 0 });
  }

};

// new timeline
// var tabwidth = 232
// var tabsInView = 5
// var amount of tabs $('.tab').length;

//var error position=10
// 14 is on the righ
// 10 is on the left errorPosition + (tabsInView - 1);
// distance to error Currentposition



// Move to error tab
//Is it off to the left?
//- scroll untill the error is on the left
// - show error marker right -1160
// postion 10

//Is it off to the right?
//- scroll untill the error is on the right
// - show error marker left -2088
// position = 6
$( document ).on('click', '.js-tabError-left-trigger', function(e) {
  TweenMax.to(scrollTabs, 0.3, { x: '-2088px' });
  tabPosition = 10;
  checkTabPosition();
  e.preventDefault();
} );

$( document ).on('click', '.js-tabError-right-trigger', function(e) {
  TweenMax.to(scrollTabs, 0.3, { x: '-1160px' });
  tabPosition = 6;
  checkTabPosition();
  e.preventDefault();
} );

// Check errorTab position

// is it off to the left? Currentposition < 6
// - hide tab error

// is it off to the right? Currentposition > 10
// - hide tab error hide tab error

 // is it on screen now? (Currentposition <=6 && Currentposition >=10)
// - hide the error markers
// -fade in and move up tab error


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

$( document ).on('click', '.js-addinvestment-trigger', function( e ) {
  function hideShow() {
    $('.js-addinvestment-target').toggleClass('show');
  };
hideShow();
    var tl = new TimelineMax();
  //
      tl.from( $('.js-addinvestment-target'), 0.6, {
          y: '-100%',
          autoAlpha: 0,
          opacity: 0,
          ease: Power2.easeOut
        } )
        .to( $('.js-addinvestment-target'), 0.6, {
          autoAlpha: 0,
          opacity: 0,
          ease: Power2.easeOut,
          clearProps:"all",
          onComplete: hideShow
        }, "+=3" )
        // .add($('.js-addinvestment-target').removeClass('show') );
console.log("addInvestment");
      e.preventDefault();
});
$('.js-error-offscreen-trigger').on('inview', function(event, isInView) {
  if (isInView) {
console.log('inview');

    TweenMax.to( $('.js-error-offscreen-target'), 0.4, {
      y: '-200%',
      autoAlpha: 0,
      ease: Power2.easeIn
    }, function() {  $('.js-error-offscreen-target').removeClass('show');} );

  } else {
    console.log('OUTview');
    $('.js-error-offscreen-target').addClass('show');
    TweenMax.to( $('.js-error-offscreen-target'), 0.6, {
      y: '0%',
      autoAlpha: 1,
      ease: Power2.easeOut
    } );

  }
});

// ease: Power2.easeOut

 $( document ).on('click', '.js-scrollToError', function( e ) {
  TweenMax.to(window, 1, {scrollTo:{y:"#section1", offsetY:120}});
  //  TweenMax.to(window, 2, {scrollTo:{y:".js-error-offscreen-trigger", offsetY:50}} );
   e.preventDefault();
 } );


// $( ".tab__active" ).clone().appendTo( ".tabGroup" );
