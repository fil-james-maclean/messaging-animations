/* custom JS goes here */

// $(document).ready(function() {
//
//     $('.msg').scrollToFixed( {
//       bottom: 0,
//       limit: $('.msg').offset().top,
//       preFixed: function() { $(this).removeClass('hide'); },
//       postFixed: function() { $(this).addClass('hide'); }
//     });
//   $('.msg').scrollToFixed( {
//     top: 0
//     // limit: $('.msg').offset().top
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
    //   $('.buttonWrap--msgContainer').removeClass('contains-msg');
    //   console.log('removed msg');
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
    //   $('.buttonWrap--msgContainer').addClass('contains-msg');
    //   console.log('added msg');
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
      console.log("msg is right");
      TweenMax.to( $('.tabGroup--msgContainer__right'), 0.3, { opacity: 1 });
  }

  else if (tabPosition == 11) {
    console.log("msg is left");
    TweenMax.to( $('.tabGroup--msgContainer__left'), 0.3, { opacity: 1 });
  }
  else if (tabPosition >= 6 &&  tabPosition <= 10) {
    console.log("on screen");
    TweenMax.to( $('.tabGroup--msgContainer__left'), 0.3, { opacity: 0 });
    TweenMax.to( $('.tabGroup--msgContainer__right'), 0.3, { opacity: 0 });
  }

};

// new timeline
// var tabwidth = 232
// var tabsInView = 5
// var amount of tabs $('.tab').length;

//var msg position=10
// 14 is on the righ
// 10 is on the left msgPosition + (tabsInView - 1);
// distance to msg Currentposition



// Move to msg tab
//Is it off to the left?
//- scroll untill the msg is on the left
// - show msg marker right -1160
// postion 10

//Is it off to the right?
//- scroll untill the msg is on the right
// - show msg marker left -2088
// position = 6
$( document ).on('click', '.js-tabmsg-left-trigger', function(e) {
  TweenMax.to(scrollTabs, 0.3, { x: '-2088px' });
  tabPosition = 10;
  checkTabPosition();
  e.preventDefault();
} );

$( document ).on('click', '.js-tabmsg-right-trigger', function(e) {
  TweenMax.to(scrollTabs, 0.3, { x: '-1160px' });
  tabPosition = 6;
  checkTabPosition();
  e.preventDefault();
} );

// Check msgTab position

// is it off to the left? Currentposition < 6
// - hide tab msg

// is it off to the right? Currentposition > 10
// - hide tab msg hide tab msg

 // is it on screen now? (Currentposition <=6 && Currentposition >=10)
// - hide the msg markers
// -fade in and move up tab msg


$('.js-show-msg-trigger').on('mouseenter', function(e) {
  TweenMax.to( $('.js-hide-msg-target'), 0.6, {
    x: '0%',
    ease: Power2.easeOut
  }  );
});

$('.js-hide-msg-trigger').on('mouseleave', function(e) {
  TweenMax.to( $('.js-hide-msg-target'), 0.6, {
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
    $('.js-addinvestment-target').toggleClass('hide');
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
$('.js-msg-offscreen-trigger').on('inview', function(event, isInView) {
  if (isInView) {
console.log('inview');

    TweenMax.to( $('.js-msg-offscreen-target'), 0.4, {
      y: '-200%',
      autoAlpha: 0,
      ease: Power2.easeIn
    }, function() {  $('.js-msg-offscreen-target').addClass('hide');} );

  } else {
    console.log('OUTview');
    $('.js-msg-offscreen-target').removeClass('hide');
    TweenMax.to( $('.js-msg-offscreen-target'), 0.6, {
      y: '0%',
      autoAlpha: 1,
      ease: Power2.easeOut
    } );

  }
});

// ease: Power2.easeOut

 $( document ).on('click', '.js-scrollTomsg', function( e ) {
  TweenMax.to(window, 1, {scrollTo:{y:"#section1", offsetY:120}});
  //  TweenMax.to(window, 2, {scrollTo:{y:".js-msg-offscreen-trigger", offsetY:50}} );
   e.preventDefault();
 } );

 $( document ).on('click', '.js-scrollToTable', function( e ) {
  TweenMax.to(window, 1, {scrollTo:{y:1600}});
  //  TweenMax.to(window, 2, {scrollTo:{y:".js-msg-offscreen-trigger", offsetY:50}} );
   e.preventDefault();
 } );
// $( ".tab__active" ).clone().appendTo( ".tabGroup" );
