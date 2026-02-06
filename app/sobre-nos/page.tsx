import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Heart,
  Users,
  Trophy,
  GraduationCap,
  Target,
  MapPin,
  Calendar,
} from "lucide-react"
import Link from "next/link"

const timeline = [
  { year: "2009", event: "Fundacao da EFAT em Achada Grande Tras, Praia, Cabo Verde" },
  { year: "2012", event: "Protocolo de cooperacao com o Ministerio da Juventude, Emprego e Recursos Humanos" },
  { year: "2019", event: "Participacao no Torneio Sub-13 Lyon, Franca" },
  { year: "2022", event: "Regresso a Liga Play CV apos pandemia, com participacao ativa" },
  { year: "2024", event: "Protocolos com IDS Portugal e Academia Amizade de Sao Paulo" },
  { year: "2025", event: "Lancamento da primeira pedra para construcao da nova sede" },
  { year: "2026", event: "FC Porto abre escola Dragon Force em Cabo Verde em parceria com a EFAT" },
]

const escaloes = [
  {
    nome: "Sub-11",
    descricao: "Iniciacao ao futebol com foco na diversao, coordenacao motora e valores de equipa",
    idade: "9-11 anos",
  },
  {
    nome: "Sub-13",
    descricao: "Desenvolvimento tecnico individual e introducao a tatica coletiva",
    idade: "11-13 anos",
  },
  {
    nome: "Sub-15",
    descricao: "Aperfeicoamento tecnico-tatico e preparacao para competicoes regionais",
    idade: "13-15 anos",
  },
  {
    nome: "Sub-17",
    descricao: "Alto rendimento juvenil com participacao em campeonatos e representacao nacional",
    idade: "15-17 anos",
  },
  {
    nome: "Senior Feminino",
    descricao: "Equipa feminina que compete no Campeonato Regional Santiago Sul",
    idade: "16+ anos",
  },
  {
    nome: "Senior Masculino",
    descricao: "Equipa principal com atletas formados na academia EFAT",
    idade: "18+ anos",
  },
]

const equipa = [
  { nome: "Dr. Edmilson Garcia", cargo: "Presidente da EFAT" },
  { nome: "Zeinabou Thiam", cargo: "Comunicacao e Relacoes Publicas" },
  { nome: "Paulo Canuto", cargo: "Coordenacao Liga Play CV" },
]

export default function SobreNosPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-20 md:pt-24">
        <div className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">SOBRE NOS</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
              Conheca a historia, missao e valores da Escola de Futebol de Achada Grande Tras
            </p>
          </div>
        </div>
      </section>

      {/* Missao */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">A NOSSA MISSAO</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Transformar Vidas Atraves do Desporto</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A EFAT - Associacao Escola de Futebol de Achada Grande Tras - nasceu em 2009 com uma missao clara:
                utilizar o futebol como ferramenta de inclusao social, combatendo a delinquencia juvenil e o
                abandono escolar na comunidade de Achada Grande Tras, na cidade da Praia, Cabo Verde.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Liderada pelo Dr. Edmilson Garcia, a EFAT acolhe dezenas de jovens da comunidade, oferecendo-lhes
                nao apenas formacao desportiva de qualidade, mas tambem acompanhamento educativo e social, promovendo
                valores como disciplina, respeito, trabalho em equipa e perseveranca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contactos">JUNTE-SE A NOS</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/sobre-nos.jpg"
                alt="Jovens atletas da EFAT em treino"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">O QUE NOS MOVE</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">OS NOSSOS VALORES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Inclusao Social", desc: "O desporto como ponte para uma sociedade mais justa e igualitaria" },
              { icon: GraduationCap, title: "Educacao", desc: "Formacao integral que vai alem do campo de futebol" },
              { icon: Users, title: "Comunidade", desc: "Compromisso com o desenvolvimento da comunidade local" },
              { icon: Target, title: "Excelencia", desc: "Busca constante pela melhoria e superacao dos nossos limites" },
            ].map((valor, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <valor.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{valor.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{valor.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">A NOSSA HISTORIA</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">CAMINHO PERCORRIDO</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-0.5" />
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-start gap-6 mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-2 md:-translate-x-2 mt-1.5 z-10" />
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <Card className="border-2 hover:border-primary transition-all duration-300">
                      <CardContent className="p-6">
                        <span className="text-sm font-bold text-primary">{item.year}</span>
                        <p className="text-card-foreground mt-2 leading-relaxed">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Escaloes */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">FORMACAO</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">ESCALOES DE FORMACAO</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {escaloes.map((escalao, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-bold text-card-foreground">{escalao.nome}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">{escalao.descricao}</p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{escalao.idade}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipa */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">LIDERANCA</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">A NOSSA EQUIPA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {equipa.map((membro, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-1">{membro.nome}</h3>
                  <p className="text-muted-foreground text-sm">{membro.cargo}</p>
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
