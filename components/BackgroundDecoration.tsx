/**
 * Full-page decorative SVG background.
 *
 * Architecture decisions:
 * - `absolute` (not `fixed`): the SVG is 5752px tall with paths positioned at
 *   specific Y coords per section. Fixed would show only the top ~900px
 *   regardless of scroll, hiding most of the designer's work.
 * - `<picture>` with `<source media>`: browser downloads ONLY the matching
 *   breakpoint SVG — no wasted bandwidth on hidden files.
 * - `w-full h-auto`: SVG scales horizontally to viewport width; vertical paths
 *   maintain their relative positions as the user scrolls through sections.
 * - Opacity baked into SVGs (paths at 0.5 inside the SVG itself). Add a CSS
 *   `opacity-[n]` class to the wrapper `<div>` below to adjust globally.
 *
 * Breakpoints:
 *   default  (<768px)   → bg-mobile.svg    (393px canvas)
 *   md       (≥768px)   → bg-tablet.svg    (1200px canvas, tablet layout)
 *   lg       (≥1024px)  → bg-desktop.svg   (1200px canvas)
 *   xl       (≥1280px)  → bg-desktop-xl.svg (1920px canvas)
 */
export function BackgroundDecoration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
    >
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet="/assets/bg/bg-desktop-xl.svg"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/bg/bg-desktop.svg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/bg/bg-tablet.svg"
        />
        <img
          src="/assets/bg/bg-mobile.svg"
          alt=""
          width={393}
          height={5752}
          className="w-full h-auto"
          loading="eager"
          decoding="async"
          fetchPriority="low"
        />
      </picture>
    </div>
  )
}
