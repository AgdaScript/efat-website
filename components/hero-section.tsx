import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-efat.jpg"
          alt="Jovens atletas da EFAT treinando futebol em Cabo Verde"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/65 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10">
          <span className="text-sm font-medium text-primary-foreground tracking-wider">DESDE 2009 EM ACHADA GRANDE TRAS</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-tight text-balance">
          ESCOLA DE FUTEBOL
          <br />
          <span className="text-accent">EFAT</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
          Inclusao social atraves do desporto. Formamos jovens atletas e cidadaos comprometidos com o futuro de Cabo Verde.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/sobre-nos">CONHECA A EFAT</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent hover:bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30"
            asChild
          >
            <Link href="/noticias">ULTIMAS NOTICIAS</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-accent" />
      </div>
    </section>
  )
}
