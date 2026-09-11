(function () {
  var STORAGE_KEY = "exalynt-theme";

  function getPreferred() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") return stored;
    } catch (e) {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
  }

  apply(getPreferred());

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        apply(current === "dark" ? "light" : "dark");
      });
    }

    var navToggle = document.getElementById("nav-toggle");
    var siteNav = document.getElementById("site-nav");
    if (!navToggle || !siteNav) return;

    function closeNav() {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    }

    function openNav() {
      navToggle.setAttribute("aria-expanded", "true");
      siteNav.classList.add("is-open");
    }

    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    siteNav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") closeNav();
    });

    document.addEventListener("click", function (event) {
      if (!siteNav.classList.contains("is-open")) return;
      if (siteNav.contains(event.target) || navToggle.contains(event.target)) return;
      closeNav();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 640) closeNav();
    });
  });
})();
