import { Button } from "@/components/ui/button"
export function Hero() {
  return (
    <section id="hero" className="my-20">
      <h1 className="text-neutral-200 text-4xl lg:text-6xl xl:text-7xl font-bold max-w-screen-lg pb-4">
        Hello! I'm Douglas - FullStack Software Engineer
      </h1>
      <p className="text-lg mt-4 text-neutral-300 max-w-xl pb-8">
        Empowering Innovation, One Line of Code at a Time: Building Apps,
        Transforming Lives.
      </p>
      <div className="flex gap-2">
        <Button>Projetos</Button>
        <Button>Contato</Button>
      </div>
    </section>
  )
}
