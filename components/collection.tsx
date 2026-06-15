"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { dresses, occasions } from "@/lib/dresses"
import { cn } from "@/lib/utils"

export function Collection() {
  const [active, setActive] = useState<string>("All")
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})

  const filtered = useMemo(() => {
    if (active === "All") return dresses
    return dresses.filter((d) => d.occasion === active)
  }, [active])

  const toggleFav = (id: string) =>
    setFavorites((f) => ({ ...f, [id]: !f[id] }))

  return (
    <section id="collection" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            The Edit
          </p>
          <h2 className="text-balance font-serif text-4xl font-medium tracking-tight lg:text-5xl">
            Dresses for every occasion
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Filter by occasion to find your moment. Every piece is dry-cleaned and
          quality-checked between rentals.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {occasions.map((o) => (
          <button
            key={o}
            onClick={() => setActive(o)}
            className={cn(
              "rounded-sm border px-4 py-2 text-sm tracking-wide transition-colors",
              active === o
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-transparent text-foreground hover:border-primary/40",
            )}
          >
            {o}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((dress) => (
          <article key={dress.id} className="group">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-secondary">
              <Image
                src={dress.image || "/placeholder.svg"}
                alt={`${dress.name} by ${dress.designer}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <button
                onClick={() => toggleFav(dress.id)}
                aria-label="Save to favorites"
                className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-background/80 backdrop-blur transition-colors hover:bg-background"
              >
                <Heart
                  className={cn(
                    "size-4 transition-colors",
                    favorites[dress.id]
                      ? "fill-primary text-primary"
                      : "text-foreground",
                  )}
                />
              </button>
              <span className="absolute left-3 top-3 rounded-sm bg-accent px-2.5 py-1 text-xs uppercase tracking-wider text-accent-foreground">
                {dress.occasion}
              </span>
            </div>

            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {dress.designer}
                </p>
                <h3 className="mt-1 font-serif text-xl font-medium leading-tight">
                  {dress.name}
                </h3>
              </div>
              <div className="text-right">
                <p className="font-serif text-xl font-semibold">
                  ₱{dress.rentalPrice}
                </p>
                <p className="text-xs text-muted-foreground">3-day rental</p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                {dress.sizes.map((s) => (
                  <span
                    key={s}
                    className="flex h-7 min-w-7 items-center justify-center rounded-sm border border-border px-1.5 text-xs text-foreground/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <button className="text-sm uppercase tracking-widest text-primary underline-offset-4 hover:underline">
                Rent
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
