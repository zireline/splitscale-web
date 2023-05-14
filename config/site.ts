export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Splitscale",
  description: "A Collective Projects of CPU Software Engineering",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Team",
      href: "/team",
    },
  ],
  nav: { sales: "/", products: "/" },
  links: {
    github: "https://github.com/splitscale",
  },
}
