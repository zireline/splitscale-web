import Image from "next/image"

export const Images = {
  hero: () => (
    <Image
      src="/card-display.svg"
      width={1000}
      height={1000}
      alt="Picture of the author"
    />
  ),
  particles: () => (
    <Image
      src="/stars-display.svg"
      width={2000}
      height={2000}
      alt="Picture of the author"
    />
  ),
}
