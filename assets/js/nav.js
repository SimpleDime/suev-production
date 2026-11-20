// Makes the clicked menu tab bold. The Contact tab opens an email and keeps
// the visitor on the same page, so it is highlighted here when clicked.
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".main-nav a");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});
