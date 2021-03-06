window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



// Touch Kick keys

const kickKey = document.getElementsByClassName('kick');
const audioKick1 = document.querySelector(`audio.kick1`);

kickKey[0].addEventListener("touchstart", function(touch) {
    kickKey[0].classList.add('playing');
    audioKick1.currentTime = 0;
    audioKick1.load();
    audioKick1.play();
});


const audioKick2 = document.querySelector(`audio.kick2`);

kickKey[1].addEventListener("touchstart", function(touch) {
    kickKey[1].classList.add('playing');
    audioKick2.currentTime = 0;
    audioKick2.play();
}); 

const audioKick3 = document.querySelector(`audio.kick3`);

kickKey[2].addEventListener("touchstart", function(touch) {
    kickKey[2].classList.add('playing');
    audioKick3.currentTime = 0;
    audioKick3.play();
});

// Touch Hat Keys

var hatKey = document.getElementsByClassName('hat');

hatKey[0].addEventListener("touchstart", function(touch) {
    hatKey[0].classList.add('playing');
    var audioHat = document.querySelector(`audio.hat1`);
    audioHat.currentTime = 0;
    audioHat.play();
});

hatKey[1].addEventListener("touchstart", function(touch) {
    hatKey[1].classList.add('playing');
    var audioHat = document.querySelector(`audio.hat2`);
    audioHat.currentTime = 0;
    audioHat.play();
}); 

hatKey[2].addEventListener("touchstart", function(touch) {
    hatKey[2].classList.add('playing');
    var audioHat = document.querySelector(`audio.hat3`);
    audioHat.currentTime = 0;
    audioHat.play();
}); 

// Touch OpenHat Keys

var openhatKey = document.getElementsByClassName('openhat');

openhatKey[0].addEventListener("touchstart", function(touch) {
    openhatKey[0].classList.add('playing');
    var audioOpenhat = document.querySelector(`audio.openhat1`);
    audioOpenhat.currentTime = 0;
    audioOpenhat.play();
});

openhatKey[1].addEventListener("touchstart", function(touch) {
    openhatKey[1].classList.add('playing');
    var audioOpenhat = document.querySelector(`audio.openhat2`);
    audioOpenhat.currentTime = 0;
    audioOpenhat.play();
}); 

openhatKey[2].addEventListener("touchstart", function(touch) {
    openhatKey[2].classList.add('playing');
    var audioOpenhat = document.querySelector(`audio.openhat3`);
    audioOpenhat.currentTime = 0;
    audioOpenhat.play();
}); 

// Touch Snare Keys

var snareKey = document.getElementsByClassName('snare');

snareKey[0].addEventListener("touchstart", function(touch) {
    snareKey[0].classList.add('playing');
    var audioSnare = document.querySelector(`audio.snare1`);
    audioSnare.currentTime = 0;
    audioSnare.play();
});

snareKey[1].addEventListener("touchstart", function(touch) {
    snareKey[1].classList.add('playing');
    var audioSnare = document.querySelector(`audio.snare2`);
    audioSnare.currentTime = 0;
    audioSnare.play();
}); 

snareKey[2].addEventListener("touchstart", function(touch) {
    snareKey[2].classList.add('playing');
    var audioSnare = document.querySelector(`audio.snare3`);
    audioSnare.currentTime = 0;
    audioSnare.play();
}); 


// =======================================================

// Click Kick keys

// var kickKey = document.getElementsByClassName('kick');

// kickKey[0].onclick = function(click) {
//     kickKey[0].classList.add('playing');
//     var audioKick = document.querySelector(`audio.kick1`);
//     audioKick.currentTime = 0;
//     audioKick.play();
// };

// kickKey[1].onclick = function(click) {
//     kickKey[1].classList.add('playing');
//     var audioKick = document.querySelector(`audio.kick2`);
//     audioKick.currentTime = 0;
//     audioKick.play();
// }; 

// kickKey[2].onclick = function(click) {
//     kickKey[2].classList.add('playing');
//     var audioKick = document.querySelector(`audio.kick3`);
//     audioKick.currentTime = 0;
//     audioKick.play();
// }; 

// // Click Hat 

// var hatKey = document.getElementsByClassName('hat');

// hatKey[0].onclick = function(click) {
//     hatKey[0].classList.add('playing');
//     var audioHat = document.querySelector(`audio.hat1`);
//     audioHat.currentTime = 0;
//     audioHat.play();
// };

// hatKey[1].onclick = function(click) {
//     hatKey[1].classList.add('playing');
//     var audioHat = document.querySelector(`audio.hat2`);
//     audioHat.currentTime = 0;
//     audioHat.play();
// }; 

// hatKey[2].onclick = function(click) {
//     hatKey[2].classList.add('playing');
//     var audioHat = document.querySelector(`audio.hat3`);
//     audioHat.currentTime = 0;
//     audioHat.play();
// }; 

// // Click OpenHat

// var openhatKey = document.getElementsByClassName('openhat');

// openhatKey[0].onclick = function(click) {
//     openhatKey[0].classList.add('playing');
//     var audioOpenhat = document.querySelector(`audio.openhat1`);
//     audioOpenhat.currentTime = 0;
//     audioOpenhat.play();
// };

// openhatKey[1].onclick = function(click) {
//     openhatKey[1].classList.add('playing');
//     var audioOpenhat = document.querySelector(`audio.openhat2`);
//     audioOpenhat.currentTime = 0;
//     audioOpenhat.play();
// }; 

// openhatKey[2].onclick = function(click) {
//     openhatKey[2].classList.add('playing');
//     var audioOpenhat = document.querySelector(`audio.openhat3`);
//     audioOpenhat.currentTime = 0;
//     audioOpenhat.play();
// }; 

// // Click Snare

// var snareKey = document.getElementsByClassName('snare');

// snareKey[0].onclick = function(click) {
//     snareKey[0].classList.add('playing');
//     var audioSnare = document.querySelector(`audio.snare1`);
//     audioSnare.currentTime = 0;
//     audioSnare.play();
// };

// snareKey[1].onclick = function(click) {
//     snareKey[1].classList.add('playing');
//     var audioSnare = document.querySelector(`audio.snare2`);
//     audioSnare.currentTime = 0;
//     audioSnare.play();
// }; 

// snareKey[2].onclick = function(click) {
//     snareKey[2].classList.add('playing');
//     var audioSnare = document.querySelector(`audio.snare3`);
//     audioSnare.currentTime = 0;
//     audioSnare.play();
// }; 

// ==========================================================


