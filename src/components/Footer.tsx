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
      className="container md:px-20 mt-24 mb-12 mx-auto flex flex-col items-center justify-center"
    >
      <div>
        <Card className=" px-12 py-4 rounded-lg flex flex-row flex-wrap gap-2 items-center justify-center">
          <Button variant="outline" size={"icon"}>
            <FaRegEnvelope size={20} />
          </Button>
          <Button variant="outline" size={"icon"}>
            <FaWhatsapp size={20} />
          </Button>
          <Button variant="outline" size={"icon"}>
            <FaLinkedinIn size={20} />
          </Button>
          <Button variant="outline" size={"icon"}>
            <FaGithub size={20} />
          </Button>
        </Card>
      </div>
      <span className="text-muted-foreground mt-10">
        Copyright © {new Date().getFullYear()} shinzato.dev
      </span>
    </footer>
  )
}
