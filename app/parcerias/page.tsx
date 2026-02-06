import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, GraduationCap, Handshake, Trophy, Building, Users } from "lucide-react"

const parcerias = [
  {
    icon: Trophy,
    nome: "FC Porto Dragon Force",
    tipo: "Parceria Desportiva Internacional",
    descricao:
      "Parceria historica assinada em Janeiro de 2026 para a abertura da escola Dragon Force em Cabo Verde. Esta colaboracao traz a metodologia de formacao de elite do FC Porto, reconhecida mundialmente, para os jovens atletas da EFAT e de todo Cabo Verde.",
    beneficios: [
      "Metodologia de treino de elite",
      "Formacao de treinadores certificados",
      "Acesso a rede internacional Dragon Force",
      "Oportunidades de intercambio desportivo",
    ],
  },
  {
    icon: GraduationCap,
    nome: "IDS - Instituto de Desenvolvimento Social",
    tipo: "Protocolo Educativo",
    descricao:
      "Protocolo assinado em Outubro de 2024 com o IDS em Lisboa, Portugal. Este acordo permite que jovens cabo-verdianos, particularmente pertencentes a EFAT, estudem no IDS com bolsas de estudo, abrindo portas para o futuro academico dos atletas.",
    beneficios: [
      "Bolsas de estudo em Portugal",
      "Intercambio de conhecimentos",
      "Projetos conjuntos de investigacao",
      "Inclusao social atraves da educacao",
    ],
  },
  {
    icon: Handshake,
    nome: "Academia Amizade de Sao Paulo",
    tipo: "Cooperacao Desportiva Regional",
    descricao:
      "Protocolo de cooperacao com a Academia Amizade de Sao Paulo, em Bissau, Guine-Bissau, assinado em Outubro de 2024. A parceria visa o intercambio de experiencias nas areas de desporto, educacao e desenvolvimento comunitario entre os dois paises lusofonos.",
    beneficios: [
      "Intercambio de atletas e treinadores",
      "Partilha de metodologias de treino",
      "Cooperacao em desenvolvimento comunitario",
      "Fortalecimento dos lacos lusofonos",
    ],
  },
  {
    icon: Building,
    nome: "Ministerio da Juventude de Cabo Verde",
    tipo: "Protocolo Institucional",
    descricao:
      "Protocolo de cooperacao com o Ministerio da Juventude, Emprego e Desenvolvimento de Recursos Humanos (MJEDRH), reconhecendo a EFAT como projeto de referencia na inclusao social de jovens atraves do desporto em Cabo Verde.",
    beneficios: [
      "Apoio institucional governamental",
      "Reconhecimento oficial do projeto",
      "Acesso a programas de financiamento",
      "Visibilidade nacional",
    ],
  },
  {
    icon: Users,
    nome: "Liga Play CV",
    tipo: "Competicao Desportiva Nacional",
    descricao:
      "Participacao ativa na Liga Play CV, competicao fundada por Paulo Canuto que reune 47 equipas de 13 escolas de futebol com mais de 1050 jogadores, promovendo a inclusao social atraves do desporto e contribuindo para a qualidade do futebol cabo-verdiano.",
    beneficios: [
      "Competicao regular para atletas",
      "Exposicao e visibilidade dos jovens",
      "Inclusao social atraves do desporto",
      "Desenvolvimento competitivo dos escaloes",
    ],
  },
  {
    icon: Globe,
    nome: "PROFAJ - Programa de Formacao e Acao Juvenil",
    tipo: "Financiamento e Apoio",
    descricao:
      "Financiamento recebido atraves do edital PROFAJ em Janeiro de 2024, que permite a EFAT expandir as suas atividades e aumentar o impacto social na comunidade de Achada Grande Tras e arredores.",
    beneficios: [
      "Financiamento para atividades",
      "Expansao da capacidade de acao",
      "Desenvolvimento de novos programas",
      "Impacto social ampliado",
    ],
  },
]

export default function ParceriasPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-20 md:pt-24">
        <div className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">PARCERIAS</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
              Instituicoes e organizacoes que caminham ao nosso lado na missao de transformar vidas
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "6+", label: "Parcerias Ativas" },
              { num: "3", label: "Paises Envolvidos" },
              { num: "1050+", label: "Atletas Impactados" },
              { num: "15+", label: "Anos de Historia" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.num}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8">
            {parcerias.map((parceria, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="p-8 lg:p-10 bg-primary/5 flex flex-col items-center justify-center text-center">
                      <parceria.icon className="w-16 h-16 text-primary mb-4" />
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">{parceria.nome}</h3>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                        {parceria.tipo}
                      </span>
                    </div>
                    <div className="p-8 lg:p-10 lg:col-span-2">
                      <p className="text-muted-foreground leading-relaxed mb-6">{parceria.descricao}</p>
                      <div>
                        <h4 className="font-bold text-card-foreground mb-3">Beneficios da Parceria:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {parceria.beneficios.map((beneficio, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                              {beneficio}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
