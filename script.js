// All five fill effects are CSS-driven. This script provides a small
// keyboard-accessible pressed state so buttons can also be tested by click.
document.querySelectorAll(".slide-btn").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");
    window.setTimeout(() => button.classList.remove("clicked"), 500);
  });
});
