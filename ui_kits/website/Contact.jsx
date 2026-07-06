// Акметрон — contact / request form
function Contact() {
  const { Card, Input, Button, Icon, Callout } = window.DesignSystem_176d4c;
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ padding: "96px 48px", maxWidth: 1080, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-7)", alignItems: "center" }}>
        <div>
          <span className="akm-eyebrow">Заявка на расчёт</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 40, letterSpacing: "-0.02em", marginTop: "var(--space-3)" }}>
            Опишите задачу — ответим в течение часа
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.5, color: "var(--text-2)", marginTop: "var(--space-4)", maxWidth: 420 }}>
            Подберём оборудование или предложим разработку под ваши требования. Без посредников — напрямую с инженерами.
          </p>
          <div style={{ marginTop: "var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Callout icon={<Icon name="phone" size={18} />}>+7 495 000-00-00 · пн–пт, 9:00–18:00</Callout>
            <Callout icon={<Icon name="mail" size={18} />}>info@akmetron.ru</Callout>
          </div>
        </div>
        <Card padding="var(--space-6)">
          {sent ? (
            <div style={{ textAlign: "center", padding: "var(--space-5) 0" }}>
              <Icon name="check-circle" size={48} />
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, marginTop: "var(--space-3)" }}>Заявка отправлена</h3>
              <p style={{ color: "var(--text-2)", marginTop: "var(--space-2)" }}>Свяжемся с вами в течение часа.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <Input label="Имя" placeholder="Как к вам обращаться" required />
              <Input label="Email" type="email" placeholder="you@company.ru" required />
              <Input label="Задача" placeholder="Что нужно измерить или разработать" />
              <Button variant="primary" size="lg" type="submit" style={{ width: "100%" }}>Отправить заявку</Button>
              <span style={{ fontSize: 12, color: "var(--text-3)", textAlign: "center" }}>Расчёт проекта — менее чем за 1 час</span>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
Object.assign(window, { Contact });
