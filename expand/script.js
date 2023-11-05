const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeactiveclasses();
    panel.classList.add("active");
  });
});

function removeactiveclasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
