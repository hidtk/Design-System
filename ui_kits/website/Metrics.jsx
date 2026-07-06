// Акметрон — metrics band + capabilities callouts
function Metrics() {
  const { Stat, Callout, Icon } = window.DesignSystem_176d4c;
  return (
    <section style={{ position: "relative", padding: "80px 48px", background: "var(--field-deep)", overflow: "hidden" }}>
      <div className="akm-glow" style={{ bottom: -200, right: -80 }} />
      <div style={{ position: "relative", maxWidth: "var(--content-max)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-5)" }}>
          <Stat value="67 ГГц" label="Диапазон измерений" />
          <Stat value="<1 ч" label="Расчёт проекта" />
          <Stat value="7" label="Направлений" />
          <Stat value="0" label="Посредников" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)", marginTop: "var(--space-7)" }}>
          <Callout icon={<Icon name="cpu" size={18} />}>Разработка электроники на заказ — от схемы до серии</Callout>
          <Callout icon={<Icon name="wrench" size={18} />}>Производство технологической оснастки под требования заказчика</Callout>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Metrics });
