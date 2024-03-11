function playVideo() {
    var video = document.getElementById("videoPlayer");
    video.style.display = "block"; // Show the video
    video.play(); // Start playing the video
  }
  
  function hideVideo() {
    var video = document.getElementById("videoPlayer");
    video.style.display = "none"; // Hide the video
  }
  
  document.getElementById("playButton").addEventListener("click", playVideo);



var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('Rail Freight')
    .pauseFor(300)
    .deleteChars(12)
    .typeString('Ocean Freight')
    .pauseFor(1000)
    .deleteChars(15)
    .typeString('Air Freight')
    .pauseFor(1000)
    .deleteChars(15)
    .typeString('Road Freight')
    .pauseFor(300)
    .start();