import { Card } from "./ui/card"

export function AboutMe() {
  return (
    <section className="mt-14">
      <h2 className="my-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Sobre mim
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 items-center justify-items-center">
        <Card className="w-96 h-96"></Card>
        <p className="mb-8 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
          semper ex, vel consectetur felis facilisis id. Donec id urna at mauris
          congue sagittis. Donec vel dolor vel neque tristique consectetur.
          Donec lobortis, justo id eleifend lobortis, sapien ligula fringilla
          purus, ut facilisis eros velit vel velit.
        </p>
      </div>
    </section>
  )
}
