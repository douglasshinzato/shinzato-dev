import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { FaRegEnvelope } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export function Footer() {
  return (
    <footer
      id="footer"
      className="container md:px-20 mt-12 mb-6 mx-auto flex flex-col items-center justify-center"
    >
      <div>
        <Card className=" px-12 py-4 rounded-lg flex flex-row flex-wrap gap-2 items-center justify-center">
          <a href="mailto:shinzato.douglas@gmail.com" target="_blank">
            <Button variant="outline" size={"icon"}>
              <FaRegEnvelope size={20} />
            </Button>
          </a>
          <a href="https://wa.me/5567999034695" target="_blank">
            <Button variant="outline" size={"icon"}>
              <FaWhatsapp size={20} />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/douglasshinzato/"
            target="_blank"
          >
            <Button variant="outline" size={"icon"}>
              <FaLinkedinIn size={20} />
            </Button>
          </a>
          <a href="https://github.com/douglasshinzato" target="_blank">
            <Button variant="outline" size={"icon"}>
              <FaGithub size={20} />
            </Button>
          </a>
        </Card>
      </div>
      <span className="text-muted-foreground mt-10">
        Copyright © {new Date().getFullYear()} shinzato.dev
      </span>
    </footer>
  )
}
