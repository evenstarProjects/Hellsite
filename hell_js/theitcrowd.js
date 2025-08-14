function revealVideo() {
  const container = document.getElementById("videoContainer");
  container.classList.remove("hidden");

  const iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = "https://www.youtube.com/embed/rksCTVFtjM4?autoplay=1&mute=0&start=X&end=Y&controls=0";
  iframe.title = "YouTube video player";
  iframe.allow = "autoplay; encrypted-media";

  container.appendChild(iframe);
}