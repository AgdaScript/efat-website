import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Heart,
  GraduationCap,
  Shirt,
  Utensils,
  ArrowRight,
  Users,
  Star,
  Gift,
} from "lucide-react"
import Link from "next/link"

const beneficios = [
  {
    icon: GraduationCap,
    titulo: "Apoio Escolar",
    descricao: "Material escolar, propinas e acompanhamento pedagogico para garantir que o jovem atleta mantem o percurso educativo.",
  },
  {
    icon: Shirt,
    titulo: "Equipamento Desportivo",
    descricao: "Fardamento, chuteiras, caneleiras e todo o equipamento necessario para os treinos e competicoes.",
  },
  {
    icon: Utensils,
    titulo: "Alimentacao",
    descricao: "Refeicoes equilibradas nos dias de treino e competicao, assegurando a nutricao adequada para o rendimento desportivo.",
  },
  {
    icon: Heart,
    titulo: "Acompanhamento Social",
    descricao: "Apoio psicossocial, visitas domiciliarias e acompanhamento da situacao familiar do jovem.",
  },
]

const planos = [
  {
    nome: "Padrinho Estrela",
    valor: "2.500 CVE/mes",
    descricao: "Apadrinhe um jovem atleta com apoio basico",
    beneficios: ["Equipamento desportivo", "Material escolar basico", "Relatorio trimestral do atleta"],
    destaque: false,
  },
  {
    nome: "Padrinho Ouro",
    valor: "5.000 CVE/mes",
    descricao: "Apoio completo para um jovem atleta",
    beneficios: [
      "Tudo do plano Estrela",
      "Alimentacao nos dias de treino",
      "Propinas escolares",
      "Fotos e atualizacoes mensais",
    ],
    destaque: true,
  },
  {
    nome: "Padrinho Diamante",
    valor: "10.000 CVE/mes",
    descricao: "Transforme completamente a vida de um jovem",
    beneficios: [
      "Tudo do plano Ouro",
      "Acompanhamento pedagogico",
      "Apoio a familia",
      "Visita anual (se possivel)",
      "Participacao em eventos especiais",
    ],
    destaque: false,
  },
]

export default function ApadrinhamentoPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-20 md:pt-24">
        <div className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-sm font-medium tracking-wider">
              SOBRE NOS
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">APADRINHAMENTO</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
              Apadrinhe um jovem atleta e ajude a transformar a sua vida atraves do desporto
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-accent uppercase tracking-wider">FACA A DIFERENCA</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">O Que e o Programa de Apadrinhamento?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O programa de apadrinhamento da EFAT permite que individuos ou empresas apoiem diretamente
                um jovem atleta da comunidade de Achada Grande Tras. Muitos dos nossos jovens vem de familias
                com recursos limitados, e o apoio de um padrinho pode fazer toda a diferenca no seu percurso
                desportivo e educativo.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ao apadrinhar um jovem, esta a contribuir para que ele tenha acesso a equipamento desportivo,
                material escolar, alimentacao adequada e acompanhamento social, garantindo que o desporto seja
                um verdadeiro trampolim para um futuro melhor.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "150+", label: "Jovens que precisam de apoio" },
                { num: "6", label: "Escaloes de formacao" },
                { num: "15+", label: "Anos de impacto social" },
                { num: "100%", label: "Do apoio vai para o atleta" },
              ].map((stat, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.num}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que o apadrinhamento cobre */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">COMO FUNCIONA</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">O Que o Apadrinhamento Cobre</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <b.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-3">{b.titulo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">PLANOS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Escolha o Seu Plano de Apadrinhamento</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {planos.map((plano, index) => (
              <Card
                key={index}
                className={`border-2 transition-all duration-300 ${plano.destaque ? "border-accent shadow-xl scale-105" : "hover:border-primary"}`}
              >
                <CardContent className="p-8">
                  {plano.destaque && (
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">Mais Popular</span>
                      <Star className="w-4 h-4 text-accent" />
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <Gift className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-card-foreground mb-2">{plano.nome}</h3>
                    <div className="text-3xl font-bold text-primary mb-1">{plano.valor}</div>
                    <p className="text-sm text-muted-foreground">{plano.descricao}</p>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8">
                    {plano.beneficios.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plano.destaque ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}`}
                    variant={plano.destaque ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contactos">
                      APADRINHAR <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Cada Jovem Merece Uma Oportunidade
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-accent-foreground/90 leading-relaxed text-pretty">
            O seu apoio pode ser a diferenca entre um jovem que abandona a escola e um futuro cidadao
            comprometido com a sua comunidade. Junte-se ao programa de apadrinhamento da EFAT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/contactos">QUERO APADRINHAR</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/contactos">MAIS INFORMACOES</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
