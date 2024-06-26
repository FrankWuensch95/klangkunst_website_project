document.addEventListener("DOMContentLoaded", function () {
  const currentTheme = localStorage.theme;

  // Set the theme based on the stored value, if available
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const menu = document.getElementById("menu");
  const btn_light = menu.querySelector("#light-mode");
  const btn_dark = menu.querySelector("#dark-mode");
  const light_switch = document.querySelector("#light-mode-btn");
  const dark_switch = document.querySelector("#dark-mode-btn");

  if (btn_light) {
    btn_light.addEventListener("click", () => {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    });
  }

  if (btn_dark) {
    btn_dark.addEventListener("click", () => {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    });
  }

  if (light_switch) {
    light_switch.addEventListener("click", () => {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    });
  }

  if (dark_switch) {
    dark_switch.addEventListener("click", () => {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    });
  }

  const btn_respect_os = document.querySelector("#respect-os");

  if (btn_respect_os) {
    btn_respect_os.addEventListener("click", () => {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
      console.log("Respecting OS preference");
    });
  }
});
