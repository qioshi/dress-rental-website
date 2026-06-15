import { AlertCircle, Truck, ShieldCheck } from "lucide-react"

const transportOptions = [
  { label: "Delivery Options", detail: "Lalamove / Grab / Toktok / Meet-up / Personal Pick-up / J&T" },
  { label: "Delivery Fee", detail: "To be shouldered by the renter." },
  { label: "Meet-up", detail: "With handling fee." },
  { label: "Personal Pick-up", detail: "No extra charge." },
]

const reservationRules = [
  "60% downpayment required to reserve your preferred date.",
  "No refund for cancellations.",
  "Not transferable to another person, gown/dress, or date.",
  "Without downpayment and form, the dress/gown is not reserved.",
]

const depositRules = [
  "A ₱500 security deposit is required.",
  "It will be returned within 24 hours after we receive the complete and undamaged dress.",
  "1 valid ID is required for legitimacy.",
]

const reminders = [
  "The dress is ready-to-wear and must not be washed.",
  "₱100 per day penalty for delayed return (if not returned on the reserved date).",
  "Returns made after 5 PM are considered delayed.",
  "No refund if the dress/gown is not used.",
  "Security deposit must be paid on or before 2 days before the scheduled pick-up date.",
  "No cancellations are allowed within 2 days before the pick-up date.",
  "If you change the date or dress/gown, a new reservation fee is required.",
]

export function RentalRules() {
  return (
    <section id="rental-rules" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Before You Book
        </p>
        <h2 className="text-balance font-serif text-4xl font-medium tracking-tight lg:text-5xl">
          Rental rules &amp; policies
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Please read through our policies so your rental experience goes smoothly for everyone.
        </p>
      </div>

      {/* Rental period callout */}
      <div className="mt-14 flex flex-col items-center gap-3 rounded-sm border border-primary/30 bg-primary/5 px-8 py-8 text-center sm:flex-row sm:justify-center sm:gap-12">
        <div>
          <p className="font-serif text-4xl font-semibold text-primary">Day 1</p>
          <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">Pick Up</p>
        </div>
        <div className="hidden h-14 w-px bg-border sm:block" />
        <div>
          <p className="font-serif text-4xl font-semibold text-primary">Day 3</p>
          <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">Return</p>
        </div>
        <div className="hidden h-14 w-px bg-border sm:block" />
        <div>
          <p className="font-serif text-4xl font-semibold text-primary">8AM–3PM</p>
          <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">Pick-up &amp; return window</p>
        </div>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-3">
        {/* Mode of Transport */}
        <div className="rounded-sm border border-border p-7">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full border border-primary/30 text-primary">
              <Truck className="size-4" />
            </span>
            <h3 className="font-serif text-2xl font-medium">Mode of Transpo</h3>
          </div>
          <ul className="mt-5 space-y-4">
            {transportOptions.map((item) => (
              <li key={item.label}>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
            For renters outside Metro Manila, any extra day will be charged from your original shipping/return date. Additional courier fees are paid by the renter.
          </p>
        </div>

        {/* Reservation Policy */}
        <div className="rounded-sm border border-border p-7">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full border border-primary/30 text-primary">
              <ShieldCheck className="size-4" />
            </span>
            <h3 className="font-serif text-2xl font-medium">Reservation &amp; Deposit</h3>
          </div>
          <div className="mt-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Reservation Policy</p>
            <ul className="mt-3 space-y-2">
              {reservationRules.map((r) => (
                <li key={r} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Security Deposit</p>
            <ul className="mt-3 space-y-2">
              {depositRules.map((r) => (
                <li key={r} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reminders */}
        <div className="rounded-sm border border-primary/25 bg-primary/5 p-7">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full border border-primary/30 text-primary">
              <AlertCircle className="size-4" />
            </span>
            <h3 className="font-serif text-2xl font-medium">Reminders</h3>
          </div>
          <ol className="mt-5 space-y-3">
            {reminders.map((r, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                {r}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
