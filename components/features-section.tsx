import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Handshake } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Trophy,
    title: "FORMACAO DESPORTIVA",
    description:
      "Treinos regulares nos escaloes Sub-11, Sub-13, Sub-15, Sub-17 e Senior Feminino. Metodologia focada no desenvolvimento tecnico e humano dos atletas.",
    cta: "VER ESCALOES",
    href: "/sobre-nos",
  },
  {
    icon: Users,
    title: "INCLUSAO SOCIAL",
    description:
      "Combatemos a delinquencia juvenil e o abandono escolar atraves do desporto, formando jovens conscientes e comprometidos com a comunidade.",
    cta: "SABER MAIS",
    href: "/sobre-nos",
  },
  {
    icon: Handshake,
    title: "PARCERIAS",
    description:
      "Protocolos com o FC Porto Dragon Force, IDS Portugal, Academia Amizade de Sao Paulo e outras instituicoes internacionais.",
    cta: "VER PARCERIAS",
    href: "/parcerias",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href={feature.href}>{feature.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
