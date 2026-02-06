import { Card, CardContent } from "@/components/ui/card"
import { Heart, User, Users, Trophy, GraduationCap, Target, Lightbulb, Activity, Smile } from "lucide-react"

const dnaItems = [
  {
    icon: Heart,
    title: "PAIXAO PELO FUTEBOL",
    description: "Acreditamos no desporto como motor de transformacao e inclusao social na comunidade",
  },
  {
    icon: User,
    title: "O JOVEM NO CENTRO",
    description: "Cada atleta e unico e merece atencao especial para desenvolver o seu maximo potencial",
  },
  {
    icon: Users,
    title: "ESPIRITO DE EQUIPA",
    description: "Valorizamos o coletivo, a solidariedade e a uniao como pilares da formacao humana",
  },
  {
    icon: Trophy,
    title: "FORMAR CAMPEOES PARA A VIDA",
    description: "Preparamos atletas e cidadaos comprometidos com o futuro de Cabo Verde",
  },
  {
    icon: GraduationCap,
    title: "EDUCACAO E DESPORTO",
    description: "Incentivamos a permanencia escolar e o equilibrio entre estudos e pratica desportiva",
  },
  {
    icon: Target,
    title: "COMBATE AO ABANDONO ESCOLAR",
    description: "Trabalhamos ativamente para manter os jovens na escola e longe de caminhos prejudiciais",
  },
  {
    icon: Lightbulb,
    title: "INOVACAO SOCIAL",
    description: "Buscamos sempre novas formas de impactar positivamente a vida dos jovens da comunidade",
  },
  {
    icon: Activity,
    title: "DESENVOLVIMENTO INTEGRAL",
    description: "Treino, educacao, saude e valores caminham juntos no processo formativo dos nossos atletas",
  },
  {
    icon: Smile,
    title: "ALEGRIA E RESPONSABILIDADE",
    description: "E com esta atitude que acolhemos e acompanhamos todos os nossos jovens atletas",
  },
]

export function DNASection() {
  return (
    <section id="dna" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">DNA EFAT</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">A NOSSA IDENTIDADE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dnaItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
