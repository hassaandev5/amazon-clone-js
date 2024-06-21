console.log(document.querySelector(".js-test-btn").classList.contains("check"));
function toggleBtn(selector) {
  const btn = document.querySelector(`.${selector}`);
  if (btn.classList.contains("is-toggled")) {
    btn.classList.remove("is-toggled");
  } else {
    turnOffPreviousBtns();

    btn.classList.add("is-toggled");
  }
}

function turnOffPreviousBtns() {
  const previousBtn = document.querySelector(".is-toggled");
  //   console.log(previousBtn);
  if (previousBtn) {
    previousBtn.classList.remove("is-toggled");
  }
}

// 10d. 10e.
// function toggleBtn(selector) {
//   const btn = document.querySelector(`.${selector}`);
//   if (btn.classList.contains("is-toggled")) {
//     btn.classList.remove("is-toggled");
//   } else {
//     btn.classList.add("is-toggled");
//   }
// }
