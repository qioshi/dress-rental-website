import { CalendarHeart, Package, Sparkles, Undo2 } from "lucide-react"

const steps = [
  {
    icon: CalendarHeart,
    title: "Reserve & pay",
    body: "Pay 60% downpayment and fill out the reservation form. Security deposit of ₱500 must be paid at least 2 days before your pick-up date.",
  },
  {
    icon: Package,
    title: "Pick up — Day 1",
    body: "Receive your dress via Lalamove, Grab, Toktok, J&T, meet-up (with handling fee), or personal pick-up (no extra charge). Pick-up time: 8:00AM – 3:00PM only.",
  },
  {
    icon: Sparkles,
    title: "Wear & enjoy",
    body: "Your dress is ready-to-wear. Please do not wash or machine dry — just wear it and look stunning for your special occasion.",
  },
  {
    icon: Undo2,
    title: "Return — Day 3",
    body: "Return the dress in the same condition as received by 5:00PM on the 3rd day. Returns after 5PM are considered delayed (₱100/day penalty).",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Simple by Design
          </p>
          <h2 className="text-balance font-serif text-4xl font-medium tracking-tight lg:text-5xl">
            How renting works
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title}>
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full border border-primary/30 text-primary">
                  <step.icon className="size-5" />
                </span>
                <span className="font-serif text-2xl text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-medium">
                {step.title}
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
