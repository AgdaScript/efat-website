import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary/70 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          JUNTE-SE A <span className="text-accent">EFAT</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed text-pretty">
          Venha fazer parte de um projeto que transforma vidas atraves do desporto.
          Inscricoes abertas para todos os escaloes de formacao.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link href="/contactos">INSCREVER-SE AGORA</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            asChild
          >
            <Link href="/contactos">FALE CONNOSCO</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
