// Акметрон — the seven business directions
const AKM_DIRECTIONS = [
  { icon: "radio", title: "Телеком", desc: "Измерения для телекоммуникаций — анализаторы спектра и цепей." },
  { icon: "activity", title: "High Speed Digital", desc: "Целостность сигнала, осциллография, высокоскоростные шины." },
  { icon: "flask-conical", title: "Испытательное оборудование", desc: "Климатические и механические испытания изделий." },
  { icon: "shield-check", title: "СПОАИ", desc: "Системы поверки и автоматизации измерений." },
  { icon: "ruler", title: "Метрологическое оборудование", desc: "Эталоны, поверка, калибровка под отраслевые требования." },
  { icon: "scan-eye", title: "Фотоника · Оптика", desc: "Оптические измерения и компоненты фотоники." },
  { icon: "satellite", title: "ГНСС оборудование", desc: "Приёмники и решения для спутниковой навигации." },
];

function Directions({ onNav }) {
  const { Card, Icon } = window.DesignSystem_176d4c;
  return (
    <section style={{ padding: "96px 48px", maxWidth: "var(--content-max)", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "var(--space-7)" }}>
        <span className="akm-eyebrow">Семь направлений</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 40, letterSpacing: "-0.02em", marginTop: "var(--space-3)" }}>
          Одна команда — весь измерительный тракт
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "var(--space-3)" }}>
        {AKM_DIRECTIONS.map((d, i) => (
          <Card key={d.title} variant={i === 0 ? "active" : "default"} padding="var(--space-5)"
            style={{ cursor: "pointer", transition: "transform 280ms var(--ease-out)" }}
            onClick={() => onNav("direction")}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
            <div style={{ display: "inline-flex", padding: 10, borderRadius: "var(--radius-md)", background: "var(--fill-blue)", border: "1px solid var(--hairline)" }}>
              <Icon name={d.icon} size={24} />
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, marginTop: "var(--space-3)" }}>{d.title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.5, color: "var(--text-2)", marginTop: "var(--space-2)" }}>{d.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
Object.assign(window, { Directions, AKM_DIRECTIONS });
