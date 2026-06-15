import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function EditorialBanner() {
  return (
    <section id="editorial" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="relative overflow-hidden rounded-sm">
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/8] lg:aspect-[16/6]">
          <Image
            src="/dresses/editorial.png"
            alt="Two women in elegant evening gowns at a sophisticated event"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/35" />
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-center gap-5 p-8 text-primary-foreground sm:p-12 lg:p-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/80">
            The Membership
          </p>
          <h2 className="max-w-xl text-balance font-serif text-4xl font-medium leading-tight tracking-tight lg:text-5xl">
            Four dresses a month, one flat price
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-primary-foreground/85">
            Refresh your wardrobe on rotation. Members rent unlimited styles and
            keep their favorites at an exclusive discount.
          </p>
          <a
            href="#collection"
            className="mt-2 inline-flex items-center gap-2 rounded-sm bg-background px-7 py-3.5 text-sm uppercase tracking-widest text-foreground transition-opacity hover:opacity-90"
          >
            Explore Membership
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
