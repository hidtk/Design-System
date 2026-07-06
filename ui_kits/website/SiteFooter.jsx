// Акметрон — site footer
function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--hairline)", padding: "48px", background: "var(--field-deep)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "var(--space-5)" }}>
        <div style={{ maxWidth: 320 }}>
          <span className="akm-logo" style={{ fontSize: 26 }}>
            <img src="../../assets/logo-mark.png" alt="" />
            <span>АКМЕТРОН</span>
          </span>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5, color: "var(--text-3)", marginTop: "var(--space-3)" }}>
            Инженерно-техническая компания. Контрольно-измерительное оборудование, радиоэлектроника, СВЧ-устройства.
          </p>
        </div>
        <div style={{ display: "flex", gap: "var(--space-7)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <span className="akm-eyebrow" style={{ fontSize: 11 }}>Направления</span>
            {["Телеком", "High Speed Digital", "Метрология", "ГНСС"].map((t) => (
              <a key={t} href="#" style={{ fontSize: 14, color: "var(--text-2)" }}>{t}</a>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <span className="akm-eyebrow" style={{ fontSize: 11 }}>Компания</span>
            {["О нас", "Производство", "Контакты"].map((t) => (
              <a key={t} href="#" style={{ fontSize: 14, color: "var(--text-2)" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "var(--content-max)", margin: "32px auto 0", paddingTop: "var(--space-4)", borderTop: "1px solid var(--hairline)", fontSize: 12, color: "var(--text-3)" }}>
        © 2026 Акметрон · Все права защищены
      </div>
    </footer>
  );
}
Object.assign(window, { SiteFooter });
