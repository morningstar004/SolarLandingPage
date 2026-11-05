import React, { useState, useEffect } from 'react';

interface LeftDotsNavigatorProps {
  sectionIds: { id: string; label: string; number: string }[];
}

export const LeftDotsNavigator: React.FC<LeftDotsNavigatorProps> = ({ sectionIds }) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Section Navigation Dots"
      className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center pointer-events-auto"
    >
      <div className="flex flex-col items-center gap-2.5 py-3 px-2 rounded-full bg-forest-950/85 border border-white/10 backdrop-blur-xl shadow-2xl">
        {sectionIds.map((sec) => {
          const isActive = sec.id === activeSection;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="group relative flex items-center justify-center p-1"
              aria-label={`Scroll to ${sec.label}`}
            >
              {/* Dot */}
              <span
                className={`rounded-full block transition-all duration-300 ${
                  isActive
                    ? 'w-3 h-3 bg-lime ring-4 ring-lime/20 shadow-[0_0_12px_rgba(184,243,107,0.85)] scale-110'
                    : 'w-2 h-2 bg-warm-muted/35 hover:bg-white group-hover:scale-125'
                }`}
              />

              {/* Minimal Clean Floating Tooltip on Hover to the Right */}
              <span className="absolute left-full ml-3 px-2 py-0.5 rounded-md bg-forest-900/95 border border-white/10 text-[10px] font-mono text-warm-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg">
                {sec.number} {sec.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
