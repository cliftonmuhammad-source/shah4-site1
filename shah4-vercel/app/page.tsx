const stats = [
  { label: 'Height', value: `6'11"` },
  { label: 'Weight', value: '220 lbs' },
  { label: 'Wingspan', value: `7'6"` },
  { label: 'Standing Vertical', value: `48"` },
  { label: 'Running Vertical', value: `50"` },
  { label: '3/4 Court Speed', value: '2.8 sec' },
];

const journey = [
  '2022–2023 • Seton Hall',
  '2023–2024 • College of Southern Idaho (CSI)',
  '2024–2025 • UMass',
  '2025–2026 • Florida State University',
];

const strengths = [
  'Elite rim runner',
  'Vertical lob threat',
  'Rim protection and shot blocking',
  'High-motor rebounder',
  'Runs the floor in transition',
  'Length and athleticism that change possessions',
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero">
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
        <div className="container hero__grid">
          <div>
            <p className="eyebrow">Official Website • shah4.com</p>
            <h1 className="hero__title">Elijah Shahid Muhammad</h1>
            <p className="hero__text">
              6’11” forward/center with a 7’6” wingspan, elite vertical pop, and the kind of
              rim-running, lob-finishing, shot-blocking presence that translates to the next
              level.
            </p>
            <div className="button-row">
              <a className="button button--solid" href="#film">
                Watch Film
              </a>
              <a className="button button--ghost" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div className="snapshot-card">
            <div className="snapshot-card__inner">
              <div>
                <p className="eyebrow eyebrow--muted">Player Snapshot</p>
                <h2 className="section-title section-title--small">Built for impact above the rim</h2>
              </div>
              <div className="mini-stats">
                {stats.slice(0, 4).map((item) => (
                  <div key={item.label} className="mini-stat">
                    <p className="mini-stat__label">{item.label}</p>
                    <p className="mini-stat__value">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stats-grid">
          {stats.map((item) => (
            <article key={item.label} className="stat-card">
              <p className="stat-card__label">{item.label}</p>
              <p className="stat-card__value">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container two-column">
          <div>
            <p className="eyebrow eyebrow--muted">Scouting Overview</p>
            <h2 className="section-title">Role clarity. Measurables. Production upside.</h2>
            <p className="body-copy">
              Elijah Shahid Muhammad is a high-level frontcourt prospect whose game is anchored
              by length, athleticism, vertical spacing, and defensive disruption. He runs the
              floor hard, finishes above the rim, rebounds outside his area, and offers real
              value as a lob threat and weak-side rim protector.
            </p>
            <div className="strengths-grid">
              {strengths.map((item) => (
                <div key={item} className="strength-pill">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="panel-card">
            <p className="eyebrow eyebrow--muted">College Journey</p>
            <div className="journey-list">
              {journey.map((step, index) => (
                <div key={step} className="journey-item">
                  <div className="journey-item__number">{index + 1}</div>
                  <div className="journey-item__text">{step}</div>
                </div>
              ))}
            </div>
            <div className="academics-box">
              <p className="stat-card__label">Academics</p>
              <p className="academics-box__title">Dean’s List all four years</p>
              <p className="academics-box__text">Primary language: English • Second language: Japanese</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="film" className="section">
        <div className="container two-column two-column--film">
          <div>
            <p className="eyebrow eyebrow--muted">Film & Highlights</p>
            <h2 className="section-title">Put the best clips where scouts can find them fast</h2>
            <p className="body-copy">
              Replace the buttons below with highlight film, full-game footage, pro day clips,
              and verified testing. Keep the first 30–45 seconds focused on rim runs, lobs,
              rebounds, shot blocks, and transition plays.
            </p>
            <div className="button-row button-row--wrap">
              <a className="button button--solid" href="#">
                Highlight Reel
              </a>
              <a className="button button--ghost" href="#">
                Full Game Film
              </a>
              <a className="button button--ghost" href="#">
                Testing / Pro Day
              </a>
            </div>
          </div>

          <div className="video-placeholder">Embed highlight video here</div>
        </div>
      </section>

      <section id="contact" className="section section--alt section--last">
        <div className="container two-column contact-grid">
          <div>
            <p className="eyebrow eyebrow--muted">Contact</p>
            <h2 className="section-title">For scouts, agents, teams, and opportunities at shah4.com</h2>
            <p className="body-copy">
              Make it easy for decision-makers to reach out through shah4.com. Include direct
              contact, representation details, a downloadable player résumé, one primary film
              link, and any official scouting materials in one place.
            </p>
          </div>

          <aside className="panel-card">
            <div className="contact-list">
              <div>
                <p className="stat-card__label">Email</p>
                <p className="contact-list__value">muhammad.elijahs78@gmail.com</p>
              </div>
              <div>
                <p className="stat-card__label">Phone</p>
                <p className="contact-list__value">347-637-9671</p>
              </div>
              <div>
                <p className="stat-card__label">Availability</p>
                <p className="contact-list__text">
                  Open to professional opportunities, scouting inquiries, workouts, and team
                  evaluation.
                </p>
              </div>
            </div>
            <div className="button-row button-row--wrap">
              <a className="button button--solid" href="https://shah4.com">
                Visit shah4.com
              </a>
              <a className="button button--ghost" href="mailto:muhammad.elijahs78@gmail.com">
                Email Now
              </a>
              <a className="button button--ghost" href="tel:3476379671">
                Call
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
