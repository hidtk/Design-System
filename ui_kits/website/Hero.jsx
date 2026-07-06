// Акметрон marketing site — hero
function Hero({ onNav }) {
  const { Button, Tag, Icon } = window.DesignSystem_176d4c;
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "120px 48px 96px" }}>
      <img src="../../assets/puzzle-pattern.svg" alt="" aria-hidden="true" style={{
        position: "absolute", top: 0, right: 0, width: "46%", height: "100%",
        objectFit: "cover", objectPosition: "top right", opacity: 0.45,
        WebkitMaskImage: "linear-gradient(to left, #000 5%, transparent 92%)",
        maskImage: "linear-gradient(to left, #000 5%, transparent 92%)",
        pointerEvents: "none",
      }} />
      <div className="akm-glow" style={{ top: -180, left: -120 }} />
      <div style={{ position: "relative", maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
        <span className="akm-eyebrow">Контрольно-измерительное оборудование · радиоэлектроника</span>
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(44px, 6vw, 76px)", lineHeight: 1.02,
          letterSpacing: "-0.03em", color: "var(--text-1)",
          marginTop: "var(--space-4)",
        }}>
          Измеряем точно.<br />Разрабатываем под задачу
        </h1>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5,
          color: "var(--text-2)", maxWidth: 620, margin: "var(--space-5) auto 0",
        }}>
          Оборудование для измерений, разработка электроники на заказ, технологическая оснастка и СВЧ-устройства — без посредников.
        </p>
        <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", marginTop: "var(--space-6)" }}>
          <Button variant="primary" size="lg" icon={<Icon name="calculator" size={18} stroke="#FFFFFF" />} onClick={() => onNav("contact")}>Получить расчёт</Button>
          <Button variant="secondary" size="lg" onClick={() => onNav("direction")}>Каталог направлений</Button>
        </div>
        <div style={{ display: "flex", gap: "var(--space-2)", justifyContent: "center", marginTop: "var(--space-6)", flexWrap: "wrap" }}>
          <Tag>Телеком</Tag><Tag>High Speed Digital</Tag><Tag>Метрология</Tag><Tag>Фотоника</Tag><Tag>ГНСС</Tag>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
