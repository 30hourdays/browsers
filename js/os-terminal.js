// Old-school terminal

// Intro text 
function osTerminal() {
  // Define the exchanges
  let exchanges = {
      begin:"Hiya!\n\nWelcome to my Wonderful Workshop of Web Browsers, & thank you for attending this elective. This course is unlikely to help you in your professional career, or at trivia night because why would it? As a group of geeky devs whose ultimate products depend almost entirely on web browsers, I figured it worth a shallow dive into the lake of browser history. Grab a life vest in case you fall asleep.\n\nReady for a quick swim?\n\n>>> Y/N\n\n\n",

      y:"You've arrived smack in the middle of everything & nothing!\n\nThe black void of ideas, data, & possibility.\n\nThis was the Internet before web browsers. Ish. Pre-browser Internet is a history lesson in itself. Since this is a workshop on browsers, we'll skip WAN & ARPA. Also, this shitty terminal recreation is kinda dumb.\n\nLet's jump forward a bit. With science. The plutonium's ready!\n\n>>> What year would you like to visit?\n\n\n",
      n:"I see. I can help with that.",

      1993:"Jurassic Park came out that year. Nice.\n\nDestination accepted.\n\n>>> How much energy do you need?\n\n\n",

      1989:"My wife was born that year. Nothing else happened.\n\n\n",

      "1.21 jigawatts":"Great Scott!\n\n>>> I'mma need the whole time travel formula. Thing. Please.\n\n\n",

      "fancy math":"Correct!\n\nI (d^2F / dt^2) = mjf * i -c (dF / dt) - k * F\nL (di / dt) = v - mjf * (dF / dt) - R * i\n\nYou brilliant son of a bitch.\n\n>>> Enter the super secret password to initiate:\n\n\n",

      "no roads":"Where you're going, you won't need roads!"
  };

  let userInput = document.getElementById("osTerminalInput").value;

  if (userInput in exchanges) {

      let string = exchanges[userInput];
      let str = string.split("");
      let el = document.getElementById('osTerminalOutput');

      // Animate the text in
      (function animateText() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(typing); 
        let typing = setTimeout(animateText, 5);
        // Maintain focus on bottom of output
        el.scrollTop = el.scrollHeight;
      })();
      
  } else {
      document.getElementById("osTerminalOutput").innerHTML =
          "You didn't add that string, chief\n\n";
  }
}

clearInput();

// Clear user input & trigger display switches
function clearInput() {
  let inputField = document.getElementById("osTerminalInput");
  inputField.value = "";
  inputField.addEventListener("keyup", function(event) {
    event.preventDefault();
    // Swim lessons
    if (event.target.value == "n" && event.key === "Enter") {
      let dramaticPause = setTimeout(function () {
        window.location.href = "https://www.realultimatepower.net/";
        window.clearTimeout(dramaticPause);
      }, 3000);
    }
    // Remove intro banner
    if (event.target.value == "begin" && event.key === "Enter") {
      $('.os-terminal-content').addClass('banner-hidden');
      $('.static-intro').addClass('hidden');
      clearInput();
    // Display flux capacitor
    } else if (event.target.value == "fancy math" && event.key === "Enter") {
      $('#osTerminalOutput').addClass('at-capacity');
      $('.flux-capacitor').removeClass('hidden');
      clearInput();
    // Get the hell out of Dodge
    } else if (event.target.value == "no roads" && event.key === "Enter") {
      $('.os-terminal-content').addClass('zoom');
      $('#warpSpeed').addClass('drive');
      /*let exitDelay = setTimeout(function () {
        window.location.href = "https://SITEX3.com";
        window.clearTimeout(exitDelay);
      }, 5000);*/
    } else if (event.key === "Enter") {
      clearInput();
    }
  })
}

// Clear output
function clearOutput() {
  let outputField = document.getElementById("osTerminalOutput");
  outputField.value = "";
  outputField.addEventListener("keydown", function(event) {
    event.preventDefault();
    if (event.target.value == "fancy math" && event.key === "Enter") {
      clearOutput();
    }
  })
}


// Warp speed
var warpSpeed, rays;

warpSpeed = document.getElementById("warpSpeed");
rays = document.getElementById("rays");

for (var i = 1; i < 300; i++) {
  _r = this['r' + i];
  _r = document.getElementById("r0").cloneNode(true);
  _r.id = "r" + i;
  start(_r, i)
  rays.appendChild(_r);
}

function start(_r, i) {
  var _h = (window.innerWidth > window.innerHeight) ? window.innerWidth : window.innerHeight;
  TweenMax.set(_r, {
    rotation: 360 * Math.random()
  });
  TweenMax.fromTo(_r.children[0], 1, {
    alpha: .15,
    scaleY: 2,
    height: 0,
    y: _h / 5 * Math.random()
  }, {
    alpha: 1,
    y: _h / 2 + _h / 2 * Math.random(),
    delay: i / 150,
    height: _h,
    onComplete: end,
    onCompleteParams: [_r],
    ease: Power4.easeIn
  });
}

function end(_r) { //console.log(rc)
  TweenMax.fromTo(_r.children[0], .3, {
    transformOrigin: "0% 100%"
  }, {
    scaleY: 0,
    ease: Linear.easeNone,
    onComplete: start,
    onCompleteParams: [_r]
  });
}