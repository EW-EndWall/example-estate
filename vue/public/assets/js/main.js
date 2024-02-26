window.addEventListener("load", function () {
  // * remove display none
  document.body.style = "";

  document.getElementById("currentDate").textContent +=
    new Date().getFullYear();

  // * loading animation
  setTimeout(() => {
    document.getElementById("ping-container").remove();
    document.getElementById("app").classList.remove("d-none");
  }, 500);

  // * Initiate the wowjs
  new WOW().init();
});
