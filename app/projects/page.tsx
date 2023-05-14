import { Images } from "@/components/images"

export function ProjectsPage(...args: any[]) {
  return (
    <section className="container sticky top-0 flex flex-col space-y-72 mb-[300px]">
      <div className="flex flex-row-reverse items-center ">
        <div className="absolute scale-125 z-10 translate-x-[-25rem]">
          {Images.projects.first}
        </div>
        <p className="p-20 max-w-[50%] font-body text-muted-foreground text-lg sm:text-xl">
          Reems is a web-app that helps real estate companies and individuals
          manage their software needs. It tracks expenses, tenants, records, and
          environmental issues. It also prioritizes concerns and monitors energy
          consumption.
        </p>
      </div>

      <div className="flex flex-row items-center pt-48">
        <p className="p-20 translate-x-[8rem] max-w-[50%] font-body text-muted-foreground text-lg sm:text-xl">
          Smochie is a tool for managing multi-dependency monorepo projects in
          one root folder. It lets you clone projects and their dependencies,
          run commands in multiple folders, and work with workspaces.
        </p>
        <div className="absolute z-10 scale-150 rotate-[-12deg] translate-x-[28rem]">
          {Images.projects.second}
        </div>
      </div>

      <div className="flex flex-row-reverse items-center pt-48">
        <div className="absolute scale-125 z-10 translate-x-[-25rem]">
          {Images.projects.third}
        </div>
        <p className="p-20 max-w-[50%] font-body text-muted-foreground text-lg sm:text-xl">
          <strong>Localprice</strong> is an app that connects local shops and
          services with customers within <span className="font-sans">30km</span>
          . It uses React Native and typescript to handle orders and logistics.
          Localprice helps businesses and startups grow and reach more
          customers.
        </p>
      </div>
    </section>
  )
}
