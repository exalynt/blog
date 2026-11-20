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
  // Lets CSS hide things that only JS can reveal (e.g. back to top).
  document.documentElement.classList.add("js");

  // Highlight the table-of-contents entry for the section being read: the
  // last heading that has scrolled up past the sticky header.
  function initTocHighlight() {
    var links = document.querySelectorAll(".toc nav a[href^='#']");
    if (!links.length) return;

    var headings = [];
    links.forEach(function (link) {
      var el = document.getElementById(decodeURIComponent(link.getAttribute("href").slice(1)));
      if (el && headings.indexOf(el) === -1) headings.push(el);
    });

    var currentId = null;
    var ticking = false;
    var backToTop = document.querySelector(".toc-footer");

    function update() {
      ticking = false;
      if (backToTop) {
        backToTop.classList.toggle("is-visible", window.scrollY > window.innerHeight / 2);
      }
      var active = null;
      var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        active = headings[headings.length - 1];
      } else {
        for (var i = 0; i < headings.length; i++) {
          if (headings[i].getBoundingClientRect().top > 120) break;
          active = headings[i];
        }
      }
      var id = active ? active.id : null;
      if (id === currentId) return;
      currentId = id;
      links.forEach(function (link) {
        if (id && link.getAttribute("href") === "#" + encodeURIComponent(id)) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(update);
      },
      { passive: true }
    );
    update();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTocHighlight();

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
