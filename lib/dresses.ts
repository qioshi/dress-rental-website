export type Dress = {
  id: string
  name: string
  designer: string
  rentalPrice: number
  retailPrice: number
  image: string
  occasion: string
  color: string
  sizes: string[]
}

export const occasions = [
  "All",
  "Black Tie",
  "Cocktail",
  "Wedding Guest",
  "Daytime",
] as const

export const dresses: Dress[] = [
  {
    id: "midnight-sequin",
    name: "Midnight Sequin Gown",
    designer: "Aurelle",
    rentalPrice: 89,
    retailPrice: 1450,
    image: "/dresses/dress-1.png",
    occasion: "Black Tie",
    color: "Black",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "blush-slip",
    name: "Blush Satin Slip",
    designer: "Vera Lune",
    rentalPrice: 54,
    retailPrice: 620,
    image: "/dresses/dress-2.png",
    occasion: "Cocktail",
    color: "Pink",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "scarlet-structure",
    name: "Scarlet Structured Dress",
    designer: "Marchetti",
    rentalPrice: 72,
    retailPrice: 980,
    image: "/dresses/dress-3.png",
    occasion: "Cocktail",
    color: "Red",
    sizes: ["S", "M", "L"],
  },
  {
    id: "champagne-beaded",
    name: "Champagne Beaded Gown",
    designer: "Aurelle",
    rentalPrice: 110,
    retailPrice: 1890,
    image: "/dresses/dress-4.png",
    occasion: "Black Tie",
    color: "Gold",
    sizes: ["XS", "S", "M"],
  },
  {
    id: "navy-offshoulder",
    name: "Navy Off-Shoulder Gown",
    designer: "Soleil",
    rentalPrice: 78,
    retailPrice: 1120,
    image: "/dresses/dress-5.png",
    occasion: "Wedding Guest",
    color: "Blue",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "ivory-lace",
    name: "Ivory Lace Tea Dress",
    designer: "Vera Lune",
    rentalPrice: 62,
    retailPrice: 740,
    image: "/dresses/dress-6.png",
    occasion: "Daytime",
    color: "Ivory",
    sizes: ["XS", "S", "M", "L"],
  },
]
