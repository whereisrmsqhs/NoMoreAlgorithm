const content = document.body.querySelector("#content");
const ytdTopbar = document.body.querySelector("ytd-topbar-logo-renderer");
const miniGuide = document.body.querySelector("ytd-mini-guide-renderer");
const ytdLogo = document.body.querySelector("ytd-topbar-logo-renderer");
const searchForm = document.body
  .querySelector("ytd-searchbox")
  .querySelector("form");
const iconButton = document.body
  .querySelector("yt-icon-button")
  .querySelector("#button");
const centerContainer = document.createElement("div");
const phrases = document.createElement("h1");

// 첫 화면 추천 영상 컨테이너 감추기
if (document.body.querySelector("ytd-browse")) {
  const mainContent = document.body.querySelector("ytd-browse");
  mainContent.classList.add("hidden");
}

// 영상 시청시 사이드 추천 영상 컨테이너 감추기
if (document.body.querySelector("ytd-watch-flexy")) {
  const sideRecommend = document.body
    .querySelector("ytd-watch-flexy")
    .querySelector("#related");
  sideRecommend.classList.add("hidden");
}

// 왼쪽 drawer default으로 감추기, 왼쪽 상단 햄버거 비활성화
if (iconButton.getAttribute("aria-pressed")) {
  iconButton.setAttribute("aria-pressed", false);
}
miniGuide.classList.add("hidden");

centerContainer.classList.add("main-center");
phrases.innerText = "I CHOOSE MY VIDEOS!";
centerContainer.appendChild(phrases);
content.appendChild(centerContainer);

function showMainCenter(event) {
  event.preventDefault();
  if (centerContainer.classList.contains("hidden")) {
    centerContainer.classList.remove("hidden");
  }
}

function hideMainCenter() {
  if (!centerContainer.classList.contains("hidden")) {
    centerContainer.classList.add("hidden");
  }
}

ytdLogo.addEventListener("click", showMainCenter);
searchForm.addEventListener("submit", hideMainCenter);

window.addEventListener("yt-page-data-updated", function () {
  const pathname = window.location.pathname;
  if (pathname == "/") showMainCenter();
  else if (pathname != "/") {
    hideMainCenter();
  }
});
