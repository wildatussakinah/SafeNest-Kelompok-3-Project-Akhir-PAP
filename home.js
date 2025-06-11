document.addEventListener("DOMContentLoaded", () => {
  const gearIcon = document.getElementById("gearIcon");
  const dropdownMenu = document.getElementById("dropdownMenu");

  gearIcon?.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu?.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (
      !gearIcon?.contains(e.target) &&
      !dropdownMenu?.contains(e.target)
    ) {
      dropdownMenu?.classList.remove("show");
    }
  });

  // Carousel Testimonials (opsional tambahan interaksi)
  const track = document.querySelector(".testimonial-track");
  const prevBtn = document.querySelector(".carousel .prev");
  const nextBtn = document.querySelector(".carousel .next");

  let index = 0;

  nextBtn?.addEventListener("click", () => {
    index = (index + 1) % track.children.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  });

  prevBtn?.addEventListener("click", () => {
    index = (index - 1 + track.children.length) % track.children.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  });
});