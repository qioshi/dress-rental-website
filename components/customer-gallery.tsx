"use client"

import Image from "next/image"
import { Camera } from "lucide-react"

const photos = [
  {
    src: "/dresses/att-special.JPG",
    name: "Happy Renter",
    occasion: "Wedding Guest",
    isCollage: false,
  },
  {
    src: "/dresses/hash-1.JPEG",
    name: "Nicole",
    occasion: "Birthday Party",
    isCollage: false,
  },
  {
    src: "/dresses/hash-2.JPEG",
    name: "Pink Lace Dress Customers",
    occasion: "Various Occasions",
    isCollage: true,
  },
  {
    src: "/dresses/uuid-2.JPG",
    name: "Red Dress Customers",
    occasion: "Various Occasions",
    isCollage: true,
  },
  {
    src: "/dresses/editorial.png",
    name: "Customers at the Gala",
    occasion: "Gala Night",
    isCollage: false,
  },
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
          href="#"
          className="flex items-center gap-2 text-sm uppercase tracking-widest text-primary underline-offset-4 hover:underline"
        >
          <Camera className="size-4" />
          Tag #RNRClosetPH
        </a>
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-sm bg-secondary"
          >
            <div className={`relative w-full ${photo.isCollage ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
              <Image
                src={photo.src}
                alt={`${photo.name} — ${photo.occasion}`}
                fill
                className={`transition-transform duration-500 group-hover:scale-[1.04] ${
                  photo.isCollage ? "object-contain" : "object-cover object-top"
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
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
