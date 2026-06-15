export type Dress = {
  id: string
  name: string
  occasion: string
  rentalPrice: number
  image: string
  sizes: string[]
}

export const occasions = [
  "All",
  "Debut",
  "Prom Night",
  "Wedding Guest",
  "Gala Night",
  "Cocktail",
  "Birthday Shoot",
] as const

export const dresses: Dress[] = [
  {
    id: "lace-collection",
    name: "Lace Collection — Red, Blue & Cream",
    occasion: "Debut",
    rentalPrice: 1500,
    image: "/dresses/red-longdress.jpeg",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "red-lace-front",
    name: "Red Lace Long Dress",
    occasion: "Debut",
    rentalPrice: 1500,
    image: "/dresses/uuid-4.PNG",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "red-lace-back",
    name: "Red Lace Long Dress — Back Detail",
    occasion: "Debut",
    rentalPrice: 1500,
    image: "/dresses/uuid-1.PNG",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "blue-satin-wrap",
    name: "Blue Satin Wrap Gown",
    occasion: "Prom Night",
    rentalPrice: 1600,
    image: "/dresses/uuid-3.PNG",
    sizes: ["S", "M", "L"],
  },
  {
    id: "black-sequin",
    name: "Black Sequin Gown",
    occasion: "Gala Night",
    rentalPrice: 2500,
    image: "/dresses/dress-1.png",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "pink-satin-slip",
    name: "Pink Satin Slip Dress",
    occasion: "Birthday Shoot",
    rentalPrice: 1200,
    image: "/dresses/dress-2.png",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "red-aline-midi",
    name: "Red A-Line Midi Dress",
    occasion: "Cocktail",
    rentalPrice: 1500,
    image: "/dresses/dress-3.png",
    sizes: ["S", "M", "L"],
  },
  {
    id: "gold-beaded",
    name: "Gold Beaded Gown",
    occasion: "Gala Night",
    rentalPrice: 2200,
    image: "/dresses/dress-4.png",
    sizes: ["XS", "S", "M"],
  },
  {
    id: "navy-offshoulder",
    name: "Navy Off-Shoulder Gown",
    occasion: "Wedding Guest",
    rentalPrice: 1800,
    image: "/dresses/dress-5.png",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "ivory-lace-tea",
    name: "Ivory Lace Tea Dress",
    occasion: "Wedding Guest",
    rentalPrice: 1400,
    image: "/dresses/dress-6.png",
    sizes: ["XS", "S", "M", "L"],
  },
]
