import { Button } from "./ui/button"
import { Card } from "./ui/card"

export function GetInTouch() {
  return (
    <section id="footer" className="mt-14">
      <h2 className="my-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Entre em contato
      </h2>
      <div className="mx-auto flex flex-col items-center justify-center">
        <Card className=" p-6 rounded-lg max-w-4xl">
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <p className="text-muted-foreground">
                Tem alguma ideia? Entre em contato que ficarei feliz em te
                ajudar a desenvolver seu projeto!
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <a href="mailto:shinzato.douglas@gmail.com" className="w-full">
                <Button
                  variant="secondary"
                  size={"lg"}
                  className="flex items-center gap-2 w-full"
                >
                  Email
                </Button>
              </a>
              <a href="https://wa.me/5567999034695" className="w-full">
                <Button
                  variant="default"
                  size={"lg"}
                  className="flex items-center gap-2 w-full"
                >
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
