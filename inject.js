const content = document.body.querySelector("#content");
const ytdTopbar = document.body.querySelector("ytd-topbar-logo-renderer");
const miniGuide = document.body.querySelector("ytd-mini-guide-renderer");
const iconButton = document.body
  .querySelector("yt-icon-button")
  .querySelector("#button");
const centerContainer = document.createElement("div");
const phrases = document.createElement("h1");
const searchBar = document.body.querySelector("ytd-masthead").querySelector("#center");

if (document.body.querySelector("ytd-browse")) {
  const mainContent = document.body.querySelector("ytd-browse");
  mainContent.classList.add("hidden");
}

if (document.body.querySelector("ytd-watch-flexy")) {
  const sideRecommend = document.body.querySelector("ytd-watch-flexy");
  sideRecommend.classList.add("hidden");
}

if (iconButton.getAttribute("aria-pressed")) {
  iconButton.getAttribute("aria-pressed") = false;
}
miniGuide.classList.add("hidden");

phrases.innerText = "Let's Study!";
content.appendChild(phrases);