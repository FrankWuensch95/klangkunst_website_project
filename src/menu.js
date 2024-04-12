document.addEventListener("DOMContentLoaded", function(){
  const menu = document.getElementById("menu");
  const burger = document.getElementById("burger");
  const content = document.getElementById("content");
  if (menu && burger && content) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("hidden");
      content.classList.toggle("blur-sm");
      if (!menu.classList.contains("hidden")) {
        menu.classList.add("flex");
      } else {
        menu.classList.remove("flex");
      }
    });
  }
});