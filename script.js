flatpickr("#datetime-picker-from", {
  dateFormat: "d.m.Y",
});
flatpickr("#datetime-picker-to", {
  dateFormat: "d.m.Y",
});

function setupAccordion() {
  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      const targetId = header.getAttribute("data-target");
      const target = document.getElementById(targetId);
      const accordionArrow = header.querySelector(".accordion-arrow");

      if (target.classList.contains("show")) {
        target.style.maxHeight = 0;
        target.classList.remove("show");
        if (accordionArrow) {
          accordionArrow.classList.remove("rotate");
        }
      } else {
        document.querySelectorAll(".accordion-content").forEach((content) => {
          content.style.maxHeight = 0;
          content.classList.remove("show");
          const arrow =
            content.previousElementSibling.querySelector(".accordion-arrow");
          if (arrow) {
            arrow.classList.remove("rotate");
          }
        });
        target.classList.add("show");
        target.style.maxHeight = target.scrollHeight + "px";
        if (accordionArrow) {
          accordionArrow.classList.add("rotate");
        }
      }
    });
  });
}

function removeAccordion() {
  document.querySelectorAll(".accordion-header").forEach((header) => {
    const clone = header.cloneNode(true);
    header.parentNode.replaceChild(clone, header);
  });
  document.querySelectorAll(".accordion-content").forEach((content) => {
    content.style.maxHeight = "";
    content.classList.remove("show");
    const arrow =
      content.previousElementSibling.querySelector(".accordion-arrow");
    if (arrow) {
      arrow.classList.remove("rotate");
    }
  });
}

function applyAccordion() {
  if (window.innerWidth <= 768) {
    setupAccordion();
  } else {
    removeAccordion();
  }
}

applyAccordion();
window.addEventListener("resize", applyAccordion);
