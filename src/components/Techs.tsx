import { SiReact } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { SiAstro } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { SiSqlite } from "react-icons/si"
export function Techs() {
  return (
    <section id="techs" className="my-8 mx-auto text-center ">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Technologies I work with
      </h2>
      <div className=" hidden md:flex flex-wrap items-center justify-center gap-14 mt-12">
        <SiReact size={60} />
        <SiTailwindcss size={60} />
        <SiAstro size={60} />
        <SiTypescript size={60} />
        <SiNodedotjs size={60} />
        <SiSqlite size={60} />
      </div>
      {/* mobile */}
      <div className="md:hidden flex flex-wrap items-center justify-center gap-8 mt-12">
        <SiReact size={40} />
        <SiTailwindcss size={40} />
        <SiAstro size={40} />
        <SiTypescript size={40} />
        <SiNodedotjs size={40} />
        <SiSqlite size={40} />
      </div>
    </section>
  )
}
