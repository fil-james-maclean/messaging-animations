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

$('.errorMarker--icon').on('mouseenter', function(e) {
  TweenMax.to( $('.errorMarker--messageWrap'), 0.6, {
    x: '0%',
    ease: Power2.easeOut
  }  );
});

$('.errorMarker').on('mouseleave', function(e) {
  TweenMax.to( $('.errorMarker--messageWrap'), 0.6, {
    x: '-100%',
    ease: Power2.easeIn
  }  );
});


// $( ".tab__active" ).clone().appendTo( ".tabGroup" );
