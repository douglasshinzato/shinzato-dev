import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <section
      id="footer"
      className="mt-28 mb-12 mx-auto flex flex-col items-center justify-center"
    >
      <Card className=" p-6 rounded-lg max-w-4xl">
        <div className="flex flex-col gap-4">
          <div className="space-y-1 ">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Entre em contato
            </h3>
            <p className="text-muted-foreground">
              Tem alguma ideia ou projeto em mente? Entre em contato que ficarei
              feliz em te ajudar a desenvolver seu projeto!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              Email
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              WhatsApp
            </Button>
          </div>
        </div>
      </Card>
      <span className="text-muted-foreground pt-14">
        Copyright © {new Date().getFullYear()} shinzato.dev
      </span>
    </section>
  )
}
