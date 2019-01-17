// $(function ($) {
//     var $button = $('.about-btn'),
//        $about  = $('.about').height(0),
//        $tl = new TimelineMax();

//        $tl
//        .to($about, 0.5,{height:522, ease: Elastic.easeOut.config(1, 0.3)})
//       .from($about.find('.avatar'), 0.5, {rotation:360},0.5)
//       .from($about.find('p'), 1, {autoAlpha: 0 , x:-360},0.5)
//        .staggerFrom($about.find('.fa'), 0.5, {autoAlpha: 0 , scale:2.5})
//        .pause();

//        $button.on("mouseover", function (e) {
//            $tl.play();
//       });
//       $about.mouseleave(function (e) {
//            $tl.reverse();
//       });
// }(jQuery));