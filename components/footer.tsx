import { Icons } from "./icons"
import { Images } from "./images"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export function Footer() {
  return (
    <footer className="container w-full sticky flex flex-col items-center gap-20 pt-32 pb-14">
      <div className="flex">{Images.banner}</div>
      <div className="flex gap-20">
        <span className="font-body text-lg text-muted-foreground sm:text-xl">
          Terms of service
        </span>
        <span className="font-body text-lg text-muted-foreground sm:text-xl">
          Privacy Policy
        </span>
        <span className="font-body text-lg text-muted-foreground sm:text-xl">
          About
        </span>
      </div>

      <div className="flex flex-row items-center gap-20 pr-20 pl-36 w-full font-body text-sm text-muted-foreground sm:text-xl">
        <div>
          <Select>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Filipino</SelectItem>
              <SelectItem value="dark">Japanese</SelectItem>
              <SelectItem value="system">Bisaya</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-row pl-[475px] space-x-4 grow gap-20 items-center">
          <Icons.gitHub className="h-6 w-6" />
          <Icons.discord className="h-6 w-6" />
          <Icons.twitter className="h-6 w-6" />
        </div>

        <span>
          <span className="font-sans">©2023</span> Splitscale. All rights
          reserved.
        </span>
      </div>
    </footer>
  )
}
