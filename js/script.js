
/* =========================================================
   MENU HAMBÚRGUER
   ========================================================= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
    navMenu.addEventListener("click", (e) => e.stopPropagation());
    document.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
    });
}
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}



document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".caroseul");
  if (!carousel) return;

  const track = carousel.querySelector(".caroseul-track");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");
  const firstCard = carousel.querySelector(".car-mestre");

  if (!track || !prevBtn || !nextBtn || !firstCard) return;

  function getScrollAmount() {
    const cardWidth = firstCard.offsetWidth;
    const gap = parseInt(window.getComputedStyle(track).gap) || 0;
    return cardWidth + gap;
  }

  nextBtn.addEventListener("click", () => {
    track.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    track.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth"
    });
  });
});
