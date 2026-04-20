export default function HomePage() {
  return (
    <main className="site-shell">
      
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          
          <div>
            <p className="eyebrow">Official Website • shah4.com</p>
            <h1 className="hero__title">
              Elijah Shahid Muhammad
            </h1>
            <p className="hero__text">
              6’11” forward/center with a 7’6” wingspan, elite athleticism,
              vertical spacing, rim protection, and pro-level upside.
            </p>
          </div>

          <div className="snapshot-card">
            <div className="snapshot-card__inner">
              <div>
                <p className="eyebrow eyebrow--muted">Player Snapshot</p>
                <h2 className="section-title--small">
                  Built for impact above the rim
                </h2>
              </div>

              <div className="mini-stats">
                <div className="mini-stat">
                  <p className="mini-stat__label">Height</p>
                  <p className="mini-stat__value">6’11”</p>
                </div>
                <div className="mini-stat">
                  <p className="mini-stat__label">Wingspan</p>
                  <p className="mini-stat__value">7’6”</p>
                </div>
                <div className="mini-stat">
                  <p className="mini-stat__label">Vertical</p>
                  <p className="mini-stat__value">50”</p>
                </div>
                <div className="mini-stat">
                  <p className="mini-stat__label">Speed</p>
                  <p className="mini-stat__value">2.8 sec</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FILM */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Film & Highlights</h2>

          <div className="strengths-grid" style={{ marginTop: "30px" }}>
            <iframe src="https://www.instagram.com/reel/DW7fK1BGIFr/embed" className="video-placeholder" />
            <iframe src="https://www.instagram.com/reel/DWui0xBFN0h/embed" className="video-placeholder" />
            <iframe src="https://www.instagram.com/reel/DXUec0fml8E/embed" className="video-placeholder" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">Contact</h2>

          <div className="contact-list">
            <div>
              <p className="mini-stat__label">Email</p>
              <p className="contact-list__value">
                muhammad.elijahs78@gmail.com
              </p>
            </div>

            <div>
              <p className="mini-stat__label">Phone</p>
              <p className="contact-list__value">
                347-637-9671
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
