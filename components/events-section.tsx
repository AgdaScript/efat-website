import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function EventsSection() {
  return (
    <section id="eventos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">COMPETICOES E EVENTOS</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A EFAT participa ativamente em competicoes regionais e nacionais, proporcionando aos seus
            atletas experiencias competitivas que contribuem para o seu crescimento desportivo e pessoal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-64 relative">
              <img
                src="/images/liga-play.jpg"
                alt="Liga Play CV competicao de futebol juvenil"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/60 flex items-end p-6">
                <div>
                  <span className="text-xs font-bold bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    LIGA PLAY CV
                  </span>
                  <h3 className="text-2xl font-bold text-primary-foreground mt-4">Liga Play CV</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">47 equipas de 13 escolas de futebol, com mais de 1050 jogadores em competicao</p>
              <Button className="w-full" asChild>
                <Link href="/noticias">SABER MAIS</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-64 relative">
              <img
                src="/images/campeonato-feminino.jpg"
                alt="Campeonato Regional Santiago Sul Senior Feminino"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/60 flex items-end p-6">
                <div>
                  <span className="text-xs font-bold bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    FEMININO
                  </span>
                  <h3 className="text-2xl font-bold text-primary-foreground mt-4">Campeonato Feminino</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">Primeira participacao historica no Campeonato Regional Santiago Sul Senior Feminino</p>
              <Button className="w-full" asChild>
                <Link href="/noticias">SABER MAIS</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-64 relative">
              <img
                src="/images/torneio-internacional.jpg"
                alt="Torneios internacionais de futebol juvenil"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/60 flex items-end p-6">
                <div>
                  <span className="text-xs font-bold bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    INTERNACIONAL
                  </span>
                  <h3 className="text-2xl font-bold text-primary-foreground mt-4">Torneios Internacionais</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">Atletas EFAT representam Cabo Verde em torneios como o Footmania em Portugal</p>
              <Button className="w-full" asChild>
                <Link href="/noticias">SABER MAIS</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="bg-transparent" asChild>
            <Link href="/noticias">VER TODAS AS NOTICIAS</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
