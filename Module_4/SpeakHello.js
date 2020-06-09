(function (window) {
// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach

var helloSpeaker = {};

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the

helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it

window.helloSpeaker = helloSpeaker;

})(window);