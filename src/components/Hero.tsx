import { Button } from "@/components/ui/button"
export function Hero() {
  return (
    <section id="hero" className="mt-28 mb-28">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
        Hello! I'm Douglas - FullStack Software Engineer
      </h1>
      <p className="text-lg my-8 text-muted-foreground max-w-xl">
        Empowering Innovation, One Line of Code at a Time: Building Apps,
        Transforming Lives.
      </p>
      <div className="flex gap-2">
        <Button size={"lg"}>Projetos</Button>
        <Button size={"lg"} variant="outline">
          Contato
        </Button>
      </div>
    </section>
  )
}
