const toggleBtn = document.createElement("button");
const contentContainer = document.body.querySelector(
  "ytd-topbar-logo-renderer"
);
const mainContent = document.body.querySelector(
  "ytd-two-column-browse-results-renderer"
);
const content = document.body.querySelector("#content");
const sideRecommend = document.body.querySelector("ytd-watch-flexy");
const phrases = document.createElement("h1");
phrases.innerText = "Let's Study!";
if (mainContent.classList) {
  mainContent.classList.add("hidden");
}
sideRecommend.classList.add("hidden");
console.log(sideRecommend);
toggleBtn.classList.add("toggle-btn");
toggleBtn.innerText = "Finish";

function handleBtn() {
  mainContent.classList.toggle("hidden");
  toggleBtn.classList.toggle("start-study");
  if (toggleBtn.classList.contains("start-study")) {
    toggleBtn.innerText = "Start!";
  } else {
    toggleBtn.innerText = "Finish";
  }
}

toggleBtn.addEventListener("click", handleBtn);
contentContainer.appendChild(toggleBtn);
content.appendChild(phrases);

console.log(phrases.innerText);
