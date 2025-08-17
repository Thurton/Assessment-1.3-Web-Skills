const birds = {
  pardalote: {
    src: "http://www.outgrabe.net/bird00.jpg",
    alt: "Pardalote",
    credit: "Pardalote by fir0002 (CC-by-NC)"
  },
  purple: {
    src: "http://www.outgrabe.net/bird01.jpg",
    alt: "Purple Swamp Hen",
    credit: "Purple swamp hen by Toby Hudson (CC-by-SA)"
  },
  stilt: {
    src: "http://www.outgrabe.net/bird02.jpg",
    alt: "White-headed Stilt",
    credit: "White-headed Stilt by JJ Harrison (CC-by-SA)"
  },
  thornbill: {
    src: "http://www.outgrabe.net/bird03.jpg",
    alt: "Inland Thornbill",
    credit: "Inland Thornbill by Peter Jacobs (CC-by-SA)"
  },
  robin: {
    src: "http://www.outgrabe.net/bird04.jpg",
    alt: "Rose Robin",
    credit: "Rose Robin by JJ Harrison (CC-by-SA)"
  }
};

const birdsPage = document.getElementById("birds-page");
const imgEl = document.getElementById("bird-img");
const creditEl = document.getElementById("credit");
const controls = document.getElementById("controls");
const themeBtn = document.getElementById("toggle-theme");

(function initTheme() {
  if (!birdsPage) return;
  const saved = localStorage.getItem("birds-theme");
  if (saved === "light" || saved === "dark") {
    birdsPage.setAttribute("data-theme", saved);
  }
})();

if (themeBtn && birdsPage) {
  themeBtn.addEventListener("click", () => {
    const current = birdsPage.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    birdsPage.setAttribute("data-theme", next);
    localStorage.setItem("birds-theme", next);
  });
}

if (controls && imgEl && creditEl) {
  controls.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-bird]");
    if (!btn) return;

    const key = btn.getAttribute("data-bird");
    const data = birds[key];
    if (!data) return;

    imgEl.src = data.src;
    imgEl.alt = data.alt;
    creditEl.textContent = data.credit;

    controls.querySelectorAll("button[data-bird]").forEach(b => {
      b.setAttribute("aria-pressed", b === btn ? "true" : "false");
    });
  });
}

