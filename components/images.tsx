import Image from "next/image"

export const Images = {
  hero: (
    <Image src="/pc-vector-bg.svg" width={5000} height={5000} alt="vector pc" />
  ),
  banner: (
    <Image
      src="/splitscale-banner.png"
      width={150}
      height={150}
      alt="splitscale banner"
    />
  ),
  psse: <Image src="/psse-logo.png" width={80} height={80} alt="psse logo" />,
  projects: {
    first: (
      <Image
        src="/projects/reems-pers.png"
        width={3000}
        height={3000}
        alt="first project"
      />
    ),
    second: (
      <Image
        src="/projects/smochie-pers.png"
        width={3000}
        height={3000}
        alt="second project"
      />
    ),
    third: (
      <Image
        src="/projects/localprice-pers.png"
        width={3000}
        height={3000}
        alt="third project"
      />
    ),
  },
}
