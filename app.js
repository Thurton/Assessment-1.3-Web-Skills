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
  stilt: { src: "http://www.outgrabe.net/bird02.jpg", alt: "White-headed Stilt", credit: "White-headed Stilt by JJ Harrison (CC-by-SA)" },
  thornbill:{ src:"http://www.outgrabe.net/bird03.jpg", alt:"Inland Thornbill", credit:"Inland Thornbill by Peter Jacobs (CC-by-SA)" },
  robin:{ src:"http://www.outgrabe.net/bird04.jpg", alt:"Rose Robin", credit:"Rose Robin by JJ Harrison (CC-by-SA)" }
};

const img = document.getElementById("bird-img");
const credit = document.getElementById("credit");

document.getElementById("controls").addEventListener("click", (e) => {
  if (e.target.matches("button[data-bird]")) {
    const key = e.target.getAttribute("data-bird");
    const bird = birds[key];
    if (!bird) return;
    img.src = bird.src;
    img.alt = bird.alt;
    credit.textContent = bird.credit;
  }
});

// Theme toggle + remember choice
const root = document.documentElement;
const toggleBtn = document.getElementById("toggle-theme");

const saved = localStorage.getItem("theme");
if (saved === "light" || saved === "dark") {
  root.setAttribute("data-theme", saved);
}

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
