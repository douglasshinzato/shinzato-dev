import { Button } from "@/components/ui/button"
export function Hero() {
  return (
    <section id="hero" className="mt-28 mb-28">
      <h1 className="text-neutral-200 text-4xl lg:text-6xl font-bold max-w-screen-lg">
        Hello! I'm Douglas - FullStack Software Engineer
      </h1>
      <p className="text-lg my-8 text-neutral-300 max-w-xl">
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
