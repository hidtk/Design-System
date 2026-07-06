// Акметрон marketing site — App orchestrator
function App() {
  const [view, setView] = React.useState("home");
  const onNav = (v) => { setView(v); window.scrollTo({ top: 0, behavior: "instant" }); };

  const { Hero, Directions, Metrics, Contact, DirectionPage } = window;

  return (
    <div style={{ minHeight: "100vh" }}>
      <window.SiteHeader onNav={onNav} view={view} />
      <main key={view} style={{ animation: "akm-enter 600ms var(--ease-out) both" }}>
        {view === "home" && (
          <>
            <Hero onNav={onNav} />
            <Directions onNav={onNav} />
            <Metrics />
          </>
        )}
        {view === "direction" && <DirectionPage onNav={onNav} />}
        {view === "contact" && <Contact />}
      </main>
      <window.SiteFooter />
    </div>
  );
}
Object.assign(window, { App });
