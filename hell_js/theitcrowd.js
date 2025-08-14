function revealVideo() {
  const container = document.getElementById("videoContainer");

  // Prevent duplicate iframe insertion
  if (container.querySelector("iframe")) return;

  container.classList.remove("hidden");

  const iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = "https://www.youtube.com/embed/rksCTVFtjM4?autoplay=1&mute=0&start=2&end=73&controls=0";
  iframe.title = "YouTube video player";
  iframe.allow = "autoplay; encrypted-media";

  container.appendChild(iframe);
}



const button = document.getElementById('powerButton');
const svg = button.querySelector('svg');

let videoStarted = false;
let videoFinished = false;

button.addEventListener('click', () => {
  if (!videoStarted && !videoFinished) {
    svg.style.filter = 'drop-shadow(0px 0px 13px #000000)';
    svg.style.transform = 'scale(0.95)';
    revealVideo(); // ✅ Only called once here
    console.log("revealVideo called");
    videoStarted = true;

    setTimeout(() => {
      videoFinished = true;
    }, 71000);
  } else if (videoFinished) {
    svg.style.filter = 'drop-shadow(0px 0px 13px red)';
    svg.style.transform = 'scale(1)';

    setTimeout(() => {
      window.location.href = '../test.html';
    }, 2000);
  }
});
