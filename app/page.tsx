import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Images } from "@/components/images"

export default function IndexPage() {
  return (
    <section className="flex gap-6">
      <div className="container pl-10 sm:pl-36  gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="pt-24 text-5xl font-display leading-tight tracking-tighter sm:text-5xl md:text-8xl lg:text-9xl">
            Ideas <br className="hidden sm:inline" />
            Developed.
          </h1>
          <p className="pt-8 pb-24 max-w-[700px] font-body text-lg text-muted-foreground sm:text-xl">
            We at <strong className="font-display">Splitscale</strong> are aimed
            to help turn your exciting ideas into reality.
          </p>
        </div>

        <div className="flex flex-row-reverse sm:flex-row gap-4">
          <Link
            href={siteConfig.nav.sales}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Start now
          </Link>

          <Link
            href={siteConfig.nav.products}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "ghost", size: "lg" })}
          >
            Take tour
          </Link>
        </div>
      </div>

      <div className="flex  relative  items-center pb-8 pt-6 md:py-10">
        <div className="scale-[2.3] translate-y-[-5rem] translate-x-20 z-0">
          {Images.hero}
        </div>
      </div>
    </section>
  )
}
