import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { buttonVariants } from "./ui/button"
import { Menu } from "lucide-react"

interface RouteProps {
  href: string
  label: string
}

const routeList: RouteProps[] = [
  {
    href: "#sobre",
    label: "Sobre",
  },
  {
    href: "/projects",
    label: "Projetos",
  },
  {
    href: "#contato",
    label: "Contato",
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <header className="border-b w-full">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 md:px-20 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl flex"
            >
              shinzato.<span className="text-muted-foreground">dev</span>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetDescription className="hidden">
                  Mobile navigation menu.
                </SheetDescription>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    shinzato.<span className="text-muted-foreground">dev</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/douglasshinzato"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map(({ href, label }: RouteProps) => (
              <a
                rel="noreferrer noopener"
                href={href}
                key={label}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://github.com/douglasshinzato"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
