"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
};

export default function SectionNavigation({
  sections,
}: {
  sections: Section[];
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const updateActiveSection = () => {
      const headerOffset = 132;
      let current = sections[0]?.id ?? "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= headerOffset) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections]);

  return (
    <nav aria-label="Privacy policy sections">
      {sections.map((section) => (
        <a
          aria-current={activeSection === section.id ? "location" : undefined}
          className={activeSection === section.id ? "active" : undefined}
          href={`#${section.id}`}
          key={section.id}
          onClick={() => setActiveSection(section.id)}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
