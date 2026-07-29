const sections = [...document.querySelectorAll(".policy > section[id]")];
const links = [...document.querySelectorAll(".toc nav a")];

function updateActiveSection() {
  const headerOffset = 132;
  let activeId = sections[0]?.id ?? "";

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= headerOffset) {
      activeId = section.id;
    }
  }

  for (const link of links) {
    const isActive = link.hash === `#${activeId}`;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  }
}

window.addEventListener("scroll", updateActiveSection, { passive: true });
window.addEventListener("resize", updateActiveSection);
updateActiveSection();
