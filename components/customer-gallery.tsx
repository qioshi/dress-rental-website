"use client"

import Image from "next/image"
import { Camera } from "lucide-react"

const photos = [
  { src: "/dresses/dress-1.png", name: "Alyssa M.", occasion: "Wedding Guest" },
  { src: "/dresses/dress-2.png", name: "Bea R.", occasion: "Debut" },
  { src: "/dresses/dress-3.png", name: "Carla S.", occasion: "Prom Night" },
  { src: "/dresses/dress-4.png", name: "Diana L.", occasion: "Birthday Shoot" },
  { src: "/dresses/dress-5.png", name: "Ella P.", occasion: "Gala Night" },
  { src: "/dresses/dress-6.png", name: "Fia T.", occasion: "Wedding Guest" },
  { src: "/dresses/red-longdress.jpeg", name: "Gab & Friends", occasion: "Pictorial" },
  { src: "/dresses/editorial.png", name: "Hannah C.", occasion: "Debut" },
]

export function CustomerGallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Happy Renters
          </p>
          <h2 className="text-balance font-serif text-4xl font-medium tracking-tight lg:text-5xl">
            Real customers, real moments
          </h2>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm uppercase tracking-widest text-primary underline-offset-4 hover:underline"
        >
          <Camera className="size-4" />
          Tag #RNRClosetPH
        </a>
      </div>

      {/* Masonry-style grid */}
      <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-sm bg-secondary"
          >
            <div className={`relative w-full ${i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
              <Image
                src={photo.src}
                alt={`${photo.name} wearing an RNR Closet PH dress for ${photo.occasion}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="font-serif text-base font-medium text-primary-foreground">
                {photo.name}
              </p>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/80">
                {photo.occasion}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-sm border border-primary/25 bg-primary/5 px-8 py-8 text-center">
        <p className="font-serif text-2xl font-medium">
          Were you a renter? Share your look!
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Tag us on Facebook or Instagram at{" "}
          <span className="font-semibold text-primary">#RNRClosetPH</span> and
          your photo might be featured here.
        </p>
      </div>
    </section>
  )
}
