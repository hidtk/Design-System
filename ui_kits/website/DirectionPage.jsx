// Акметрон — a single direction detail page (Телеком)
function DirectionPage({ onNav }) {
  const { Card, Tag, Badge, Button, Stat, Icon, Callout } = window.DesignSystem_176d4c;
  const products = [
    { name: "Анализатор спектра АКМ-С67", range: "9 кГц – 67 ГГц", badge: "Новинка" },
    { name: "Векторный анализатор цепей АКМ-VNA", range: "10 МГц – 40 ГГц", badge: null },
    { name: "Генератор сигналов АКМ-SG", range: "до 20 ГГц", badge: null },
  ];
  return (
    <div>
      <section style={{ position: "relative", overflow: "hidden", padding: "72px 48px 56px", background: "var(--gradient-panel)" }}>
        <img src="../../assets/puzzle-pattern.svg" alt="" aria-hidden="true" style={{
          position: "absolute", top: 0, right: 0, width: "40%", height: "100%",
          objectFit: "cover", objectPosition: "top right", opacity: 0.4,
          WebkitMaskImage: "linear-gradient(to left, #000 5%, transparent 90%)",
          maskImage: "linear-gradient(to left, #000 5%, transparent 90%)", pointerEvents: "none",
        }} />
        <div style={{ position: "relative", maxWidth: "var(--content-max)", margin: "0 auto" }}>
          <button onClick={() => onNav("home")} style={{ background: "none", border: "none", color: "var(--text-2)", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Icon name="arrow-left" size={16} stroke="var(--text-2)" /> Все направления
          </button>
          <div style={{ marginTop: "var(--space-4)" }}>
            <span className="akm-eyebrow">Направление 01</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, letterSpacing: "-0.03em", marginTop: "var(--space-2)" }}>Телеком</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.5, color: "var(--text-2)", maxWidth: 560, marginTop: "var(--space-3)" }}>
              Измерительный тракт для телекоммуникаций: анализаторы спектра и цепей, генераторы сигналов, решения для СВЧ-диапазона.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 48px", maxWidth: "var(--content-max)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)", marginBottom: "var(--space-7)" }}>
          <Stat value="67 ГГц" label="Верхняя граница диапазона" />
          <Stat value="0,1 дБ" label="Точность по уровню" />
          <Stat value="<1 ч" label="Подбор конфигурации" />
        </div>

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, marginBottom: "var(--space-4)" }}>Оборудование</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {products.map((p) => (
            <Card key={p.name} padding="var(--space-4)" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                <div style={{ display: "inline-flex", padding: 12, borderRadius: "var(--radius-md)", background: "var(--fill-blue)", border: "1px solid var(--hairline)" }}>
                  <Icon name="radio" size={24} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>{p.name}</h3>
                    {p.badge && <Badge tone="blue">{p.badge}</Badge>}
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-2)" }}>Диапазон · {p.range}</span>
                </div>
              </div>
              <Button variant="secondary" size="sm" onClick={() => onNav("contact")}>Запросить</Button>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: "var(--space-6)" }}>
          <Card variant="alert" padding="var(--space-5)">
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase" }}>Риск импортозамещения</span>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.5, marginTop: "var(--space-2)" }}>
              Поставка зарубежных приборов — сроки до 6 месяцев. Предлагаем отечественные аналоги и разработку под задачу.
            </p>
          </Card>
        </div>

        <div style={{ marginTop: "var(--space-6)" }}>
          <Callout icon={<Icon name="zap" size={18} />}>Нужна нестандартная конфигурация? Расчёт проекта — менее чем за 1 час</Callout>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { DirectionPage });
