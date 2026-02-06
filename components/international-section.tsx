import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, GraduationCap, Handshake } from "lucide-react"
import Link from "next/link"

export function InternationalSection() {
  return (
    <section
      id="parcerias"
      className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">PARCERIAS INTERNACIONAIS</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            A EFAT estabelece protocolos com instituicoes nacionais e internacionais,
            abrindo portas para oportunidades educativas e desportivas para os jovens cabo-verdianos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card/95 backdrop-blur">
            <CardContent className="p-8 text-center">
              <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">FC Porto Dragon Force</h3>
              <p className="text-muted-foreground leading-relaxed">
                Parceria historica com o FC Porto para abertura da escola Dragon Force em Cabo Verde,
                trazendo metodologia de elite para os jovens atletas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur">
            <CardContent className="p-8 text-center">
              <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">IDS Portugal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Protocolo com o Instituto de Desenvolvimento Social em Lisboa, possibilitando que jovens
                da EFAT estudem em Portugal com bolsas de estudo.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur">
            <CardContent className="p-8 text-center">
              <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Academia Amizade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Protocolo com a Academia Amizade de Sao Paulo, Guine-Bissau, para intercambio de
                experiencias e desenvolvimento conjunto.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link href="/parcerias">VER TODAS AS PARCERIAS</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
