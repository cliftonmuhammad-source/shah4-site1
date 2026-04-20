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
              6’11” forward/center with a 7’6” wingspan, elite vertical pop,
              rim protection, transition speed, and the kind of above-the-rim
              presence that translates to the next level.
            </p>

            <div className="button-row button-row--wrap">
              <a href="#film" className="button button--solid">
                Watch Film
              </a>
              <a href="#contact" className="button button--ghost">
                Contact
              </a>
              <a
                href="https://www.instagram.com/cliftonb_muhammad/"
                target="_blank"
                rel="noreferrer"
                className="button button--ghost"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="snapshot-card">
            <div className="snapshot-card__inner">
              <div>
                <p className="eyebrow eyebrow--muted">Player Snapshot</p>
                <h2 className="section-title section-title--small">
                  Built for impact above the rim
                </h2>
              </div>

              <div className="mini-stats">
                <div className="mini-stat">
                  <p className="mini-stat__label">Height</p>
                  <p className="mini-stat__value">6’11”</p>
                </div>
                <div className="mini-stat">
                  <p className="mini-stat__label">Weight</p>
                  <p className="mini-stat__value">220 lbs</p>
                </div>
                <div className="mini-stat">
                  <p className="mini-stat__label">Wingspan</p>
                  <p className="mini-stat__value">7’6”</p>
                </div>
                <div className="mini-stat">
                  <p className="mini-stat__label">Running Vertical</p>
                  <p className="mini-stat__value">50”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-card__label">Height</p>
              <p className="stat-card__value">6’11”</p>
            </div>
            <div className="stat-card">
              <p className="stat-card__label">Weight</p>
              <p className="stat-card__value">220 lbs</p>
            </div>
            <div className="stat-card">
              <p className="stat-card__label">Wingspan</p>
              <p className="stat-card__value">7’6”</p>
            </div>
            <div className="stat-card">
              <p className="stat-card__label">Standing Vertical</p>
              <p className="stat-card__value">48”</p>
            </div>
            <div className="stat-card">
              <p className="stat-card__label">Running Vertical</p>
              <p className="stat-card__value">50”</p>
            </div>
            <div className="stat-card">
              <p className="stat-card__label">3/4 Court Speed</p>
              <p className="stat-card__value">2.8 sec</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container two-column">
          <div>
            <p className="eyebrow eyebrow--muted">Scouting Overview</p>
            <h2 className="section-title">
              Role clarity. Measurables. Pro upside.
            </h2>
            <p className="body-copy">
              Elijah Shahid Muhammad is a high-level frontcourt prospect whose
              game is built around length, athleticism, vertical spacing,
              defensive disruption, and playing above the rim. He runs the floor
              hard, finishes lobs, rebounds outside his area, and gives teams a
              real rim-protecting presence on the defensive end.
            </p>

            <div className="strengths-grid">
              <div className="strength-pill">Elite rim runner</div>
              <div className="strength-pill">Vertical lob threat</div>
              <div className="strength-pill">Rim protection</div>
              <div className="strength-pill">Shot blocking</div>
              <div className="strength-pill">High-motor rebounder</div>
              <div className="strength-pill">Runs the floor in transition</div>
            </div>
          </div>

          <div className="panel-card">
            <p className="eyebrow eyebrow--muted">College Journey</p>

            <div className="journey-list">
              <div className="journey-item">
                <div className="journey-item__number">1</div>
                <div className="journey-item__text">2022–2023 • Seton Hall</div>
              </div>

              <div className="journey-item">
                <div className="journey-item__number">2</div>
                <div className="journey-item__text">
                  2023–2024 • College of Southern Idaho (CSI)
                </div>
              </div>

              <div className="journey-item">
                <div className="journey-item__number">3</div>
                <div className="journey-item__text">2024–2025 • UMass</div>
              </div>

              <div className="journey-item">
                <div className="journey-item__number">4</div>
                <div className="journey-item__text">
                  2025–2026 • Florida State University
                </div>
              </div>
            </div>

            <div className="academics-box">
              <p className="mini-stat__label">Academics</p>
              <p className="academics-box__title">Dean’s List all four years</p>
              <p className="academics-box__text">
                Primary language: English • Second language: Japanese
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="film" className="section">
        <div className="container">
          <p className="eyebrow eyebrow--muted">Film & Highlights</p>
          <h2 className="section-title">
            Put the best clips where scouts can find them fast
          </h2>
          <p className="body-copy">
            Featured Instagram reels and highlight content. Keep the first clips
            focused on rim runs, lob finishes, rebounds, blocks, and transition
            plays.
          </p>

          <div className="strengths-grid" style={{ marginTop: "28px" }}>
            <iframe
              src="https://www.instagram.com/reel/DW7fK1BGIFr/embed"
              className="video-placeholder"
              allowFullScreen
            />
            <iframe
              src="https://www.instagram.com/reel/DWui0xBFN0h/embed"
              className="video-placeholder"
              allowFullScreen
            />
            <iframe
              src="https://www.instagram.com/reel/DXUec0fml8E/embed"
              className="video-placeholder"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container two-column">
          <div>
            <p className="eyebrow eyebrow--muted">Instagram</p>
            <h2 className="section-title">
              Social content connected to the player brand
            </h2>
            <p className="body-copy">
              Use Instagram to keep workouts, game moments, training clips, and
              highlight content active between scouting outreach. Instagram gets
              attention. shah4.com closes the loop with the full profile.
            </p>

            <div className="button-row button-row--wrap">
              <a
                href="https://www.instagram.com/cliftonb_muhammad/"
                target="_blank"
                rel="noreferrer"
                className="button button--solid"
              >
                View Instagram Profile
              </a>
              <a
                href="https://www.instagram.com/cliftonb_muhammad/reels/"
                target="_blank"
                rel="noreferrer"
                className="button button--ghost"
              >
                View Reels
              </a>
            </div>
          </div>

          <div className="panel-card">
            <p className="eyebrow eyebrow--muted">Recommended Flow</p>
            <p className="contact-list__text">
              Post short highlight clips on Instagram, then drive scouts, teams,
              and agents back to shah4.com for measurables, scouting profile,
              film, and direct contact information.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section section--last">
        <div className="container two-column">
          <div>
            <p className="eyebrow eyebrow--muted">Contact</p>
            <h2 className="section-title">
              For scouts, agents, teams, and opportunities
            </h2>
            <p className="body-copy">
              Make it easy for decision-makers to reach out directly for
              workouts, evaluation, scouting, and professional opportunities.
            </p>
          </div>

          <div className="panel-card">
            <div className="contact-list">
              <div>
                <p className="mini-stat__label">Email</p>
                <p className="contact-list__value">
                  muhammad.elijahs78@gmail.com
                </p>
              </div>

              <div>
                <p className="mini-stat__label">Phone</p>
                <p className="contact-list__value">347-637-9671</p>
              </div>

              <div>
                <p className="mini-stat__label">Availability</p>
                <p className="contact-list__text">
                  Open to professional opportunities, scouting inquiries,
                  workouts, and team evaluation.
                </p>
              </div>
            </div>

            <div className="button-row button-row--wrap">
              <a
                href="mailto:muhammad.elijahs78@gmail.com"
                className="button button--solid"
              >
                Email Now
              </a>
              <a href="tel:3476379671" className="button button--ghost">
                Call
              </a>
              <a
                href="https://shah4.com"
                target="_blank"
                rel="noreferrer"
                className="button button--ghost"
              >
                Visit shah4.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
