export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
              Official Website • shah4.com
            </p>
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Elijah Shahid Muhammad
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              6&apos;11&quot; forward/center with a 7&apos;6&quot; wingspan, elite athleticism,
              vertical spacing, rim protection, and pro-level upside.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">Height</p>
                <p className="mt-2 text-2xl font-bold">6&apos;11&quot;</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">Weight</p>
                <p className="mt-2 text-2xl font-bold">220 lbs</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">Wingspan</p>
                <p className="mt-2 text-2xl font-bold">7&apos;6&quot;</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">Standing Vertical</p>
                <p className="mt-2 text-2xl font-bold">48&quot;</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">Running Vertical</p>
                <p className="mt-2 text-2xl font-bold">50&quot;</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">3/4 Court Speed</p>
                <p className="mt-2 text-2xl font-bold">2.8 sec</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">Scouting Profile</h2>
            <p className="mt-4 text-white/75 leading-8">
              Elite rim runner, lob threat, rebounder, and shot blocker with
              length and athleticism that impact the game on both ends.
            </p>

            <ul className="mt-6 space-y-3 text-white/85">
              <li>• Elite rim runner</li>
              <li>• Vertical lob threat</li>
              <li>• Two-way frontcourt presence</li>
              <li>• Rebounds outside his area</li>
              <li>• Runs the floor in transition</li>
              <li>• High-level defensive upside</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <h2 className="text-4xl font-black tracking-tight">Film & Highlights</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
            Featured Instagram reels and highlight content.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <iframe
              src="https://www.instagram.com/reel/DW7fK1BGIFr/embed"
              className="w-full aspect-[9/16] rounded-2xl border border-white/10 bg-white"
              allowFullScreen
            />
            <iframe
              src="https://www.instagram.com/reel/DWui0xBFN0h/embed"
              className="w-full aspect-[9/16] rounded-2xl border border-white/10 bg-white"
              allowFullScreen
            />
            <iframe
              src="https://www.instagram.com/reel/DXUec0fml8E/embed"
              className="w-full aspect-[9/16] rounded-2xl border border-white/10 bg-white"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <h2 className="text-4xl font-black tracking-tight">Instagram</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
            Follow the social content connected to the player brand.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/cliftonb_muhammad/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-black"
            >
              View Instagram Profile
            </a>
            <a
              href="https://www.instagram.com/cliftonb_muhammad/reels/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white"
            >
              View Reels
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <h2 className="text-4xl font-black tracking-tight">Contact</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Email</p>
              <p className="mt-2 text-xl font-semibold">muhammad.elijahs78@gmail.com</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Phone</p>
              <p className="mt-2 text-xl font-semibold">347-637-9671</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
