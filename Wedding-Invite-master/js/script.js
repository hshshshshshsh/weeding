
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

// $(document).ready(function(){
//     // This function runs when the document is ready (i.e., when the webpage is opened)
//     document.getElementById("my_audio").play();
//     document.getElementById("my_audio").play();

//     console.log('Definitely Come to the Wedding');
// });
// $(document).ready(function(){
//      // This function runs when the document is ready (i.e., when the webpage is opened)
//      var audio = document.getElementById("my_audio");
//      audio.loop = true; // Enable looping
//      audio.play();
//      console.log('Definitely Come to the Wedding');
//  });

$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi Mein Zaroor Aana');
});

// Set the date we're counting down to
var countDownDate = new Date("Dec 18, 2022 18:00:00").getTime();

