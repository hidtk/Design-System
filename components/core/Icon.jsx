import React from "react";

/**
 * Акметрон Icon — thin line glyph from Lucide (loaded via CDN).
 * Brand icons are thin-stroke, no fill, simple geometry, blue by default.
 * Requires the Lucide UMD script on the page:
 *   <script src="https://unpkg.com/lucide@latest"></script>
 */
export function Icon({ name, size = 20, stroke = "var(--blue-light)", strokeWidth = 1.6, style = {}, ...rest }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined" || !window.lucide) return;
    el.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    el.appendChild(i);
    try {
      window.lucide.createIcons({ attrs: { width: size, height: size, "stroke-width": strokeWidth }, nameAttr: "data-lucide" });
    } catch (e) { /* lucide not ready */ }
  }, [name, size, strokeWidth]);

  return (
    <span
      ref={ref}
      style={{ display: "inline-flex", color: stroke, width: size, height: size, ...style }}
      aria-hidden="true"
      {...rest}
    />
  );
}
