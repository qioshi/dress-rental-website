import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-5 pt-10 lg:px-8 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Dress &amp; Gown Rental · Philippines
          </p>
          <h1 className="text-balance font-serif text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Wear your dream dress without buying it
          </h1>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Pick up on Day 1, wear it for your special event, return on Day 3.
            Available via Lalamove, Grab, Toktok, J&amp;T, meet-up, or personal
            pick-up.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#collection"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Browse the Collection
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#how-it-works"
              className="text-sm uppercase tracking-widest text-foreground underline-offset-4 hover:underline"
            >
              How It Works
            </a>
          </div>

          <div className="mt-12 flex gap-10 border-t border-border pt-8">
            <div>
              <p className="font-serif text-3xl font-semibold">3-day</p>
              <p className="text-sm text-muted-foreground">Rental period</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-semibold">₱500</p>
              <p className="text-sm text-muted-foreground">Security deposit</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-semibold">8–3PM</p>
              <p className="text-sm text-muted-foreground">Pick-up &amp; return</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-secondary">
            <Image
              src="/dresses/red-longdress.jpeg"
              alt="Three models wearing lace dresses in red, blue, and cream at RNR Closet PH"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-sm bg-background/90 px-5 py-3 shadow-sm backdrop-blur lg:-left-6">
            <p className="font-serif text-lg font-semibold">Best Seller — Lace Collection</p>
            <p className="text-sm text-muted-foreground">
              Available in Red, Blue &amp; Cream
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
