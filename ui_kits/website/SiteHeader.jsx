// Акметрон marketing site — top navigation header
function SiteHeader({ onNav, view }) {
  const { Button } = window.DesignSystem_176d4c;
  const links = [
    { id: "home", label: "Направления" },
    { id: "direction", label: "Телеком" },
    { id: "about", label: "О компании" },
    { id: "contact", label: "Контакты" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 48px",
      background: "rgba(16,27,54,0.72)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--hairline)",
    }}>
      <span className="akm-logo" style={{ fontSize: 30, cursor: "pointer" }} onClick={() => onNav("home")}>
        <img src="../../assets/logo-mark.png" alt="" />
        <span>АКМЕТРОН</span>
      </span>
      <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
        {links.map((l) => (
          <button key={l.id} onClick={() => onNav(l.id === "about" ? "home" : l.id)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-body)", fontSize: 15,
              color: view === l.id ? "var(--blue-light)" : "var(--text-2)",
              transition: "color 160ms",
            }}>
            {l.label}
          </button>
        ))}
      </nav>
      <Button size="sm" variant="primary" onClick={() => onNav("contact")}>Получить расчёт</Button>
    </header>
  );
}
Object.assign(window, { SiteHeader });
