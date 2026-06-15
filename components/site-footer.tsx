"use client"

const columns = [
  {
    title: "Browse",
    links: ["All Dresses", "Gowns", "Cocktail", "Wedding Guest", "Debut"],
  },
  {
    title: "Rental Info",
    links: ["How It Works", "Rental Rules", "Mode of Transpo", "FAQ", "Contact Us"],
  },
  {
    title: "Policies",
    links: ["Reservation Policy", "Security Deposit", "Cancellation", "Reminders"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <p className="font-serif text-3xl font-semibold tracking-tight">
              RNR Closet Ph
            </p>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Dress &amp; gown rental in the Philippines. Pick up on Day 1,
              return on Day 3. Let everyone enjoy beautiful dresses.
            </p>
            <form
              className="mt-6 flex max-w-sm items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="h-11 flex-1 rounded-sm border border-border bg-background px-3 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="h-11 rounded-sm bg-primary px-5 text-sm uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
              >
                Join
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-serif text-lg font-medium">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} RNR Closet Ph. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
