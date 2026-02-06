import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const noticias = [
  {
    id: 1,
    date: "9 Janeiro, 2026",
    title: "FC Porto abre escola Dragon Force em Cabo Verde em parceria com a EFAT",
    excerpt: "Uma parceria historica que traz a metodologia de elite do FC Porto para os jovens atletas cabo-verdianos. A escola Dragon Force funcionara em conjunto com a EFAT, combinando a experiencia internacional do FC Porto com o conhecimento local da EFAT.",
    category: "PARCERIA",
  },
  {
    id: 2,
    date: "16 Outubro, 2025",
    title: "Criancas da EFAT participam na rececao a Selecao Nacional",
    excerpt: "Jovens atletas da EFAT marcaram presenca na rececao a Selecao Nacional de Cabo Verde apos a qualificacao historica para o Mundial. Um momento de orgulho e inspiracao para toda a comunidade.",
    category: "EVENTO",
  },
  {
    id: 3,
    date: "10 Outubro, 2025",
    title: "EFAT Lanca Primeira Pedra para Construcao da Nova Sede em Achada Grande Tras",
    excerpt: "Marco historico para a EFAT com o lancamento da primeira pedra para a construcao da nova sede. O novo espaco vai permitir melhores condicoes de treino e acompanhamento dos jovens atletas.",
    category: "INFRAESTRUTURA",
  },
  {
    id: 4,
    date: "15 Outubro, 2024",
    title: "Assinatura de Protocolo com Academia Amizade de Sao Paulo (Guine-Bissau)",
    excerpt: "A EFAT firmou protocolo de cooperacao com a Academia Amizade de Sao Paulo, na Guine-Bissau, para intercambio de experiencias e conhecimentos nas areas de desporto, educacao e desenvolvimento comunitario.",
    category: "PARCERIA",
  },
  {
    id: 5,
    date: "7 Outubro, 2024",
    title: "Protocolo EFAT | Instituto de Desenvolvimento Social (IDS)",
    excerpt: "Protocolo com o IDS em Lisboa permite que jovens cabo-verdianos, particularmente da EFAT, estudem em Portugal. O acordo visa tambem o intercambio de conhecimentos em desporto, educacao e desenvolvimento comunitario.",
    category: "EDUCACAO",
  },
  {
    id: 6,
    date: "7 Setembro, 2024",
    title: "I Reuniao com Pais e Encarregados de Educacao",
    excerpt: "Primeira reuniao oficial com os pais e encarregados de educacao dos jovens atletas da EFAT, reafirmando o compromisso com a educacao e o acompanhamento integral dos jovens.",
    category: "COMUNIDADE",
  },
  {
    id: 7,
    date: "18 Janeiro, 2024",
    title: "Financiamento Edital PROFAJ",
    excerpt: "A EFAT recebeu financiamento atraves do edital PROFAJ, fortalecendo a sua capacidade de acao e impacto na comunidade de Achada Grande Tras.",
    category: "FINANCIAMENTO",
  },
  {
    id: 8,
    date: "Julho, 2022",
    title: "Liga Play CV regressa a cidade da Praia",
    excerpt: "Apos dois anos parados por causa da COVID-19, a Liga Play CV regressa com 47 equipas de 13 escolas de futebol e mais de 1050 jogadores em competicao, incluindo atletas da EFAT.",
    category: "COMPETICAO",
  },
  {
    id: 9,
    date: "Julho, 2022",
    title: "Selecao Nacional Sub-17 campeao do Torneio Footmania",
    excerpt: "A selecao nacional Sub-17, com o atleta Eder Monteiro da EFAT, sagrou-se campea do torneio Footmania em Caldas da Rainha, Portugal, vencendo o Eindhoven da Holanda na final.",
    category: "SELECAO",
  },
  {
    id: 10,
    date: "2022",
    title: "Palestra com Celestino Lobo sobre prevencao de drogas e alcool",
    excerpt: "A EFAT promoveu uma conversa aberta com atletas dos escaloes Sub-15 e Sub-18 Feminino sobre os perigos do uso de substancias, com o testemunho pessoal do convidado Celestino Lobo.",
    category: "SOCIAL",
  },
]

const categories = ["TODOS", "PARCERIA", "EVENTO", "COMPETICAO", "EDUCACAO", "SOCIAL", "INFRAESTRUTURA"]

export default function NoticiasPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-20 md:pt-24">
        <div className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">NOTICIAS</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
              Acompanhe todas as novidades, eventos e conquistas da EFAT
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-background text-foreground border border-border hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="/images/dragon-force-parceria.jpg"
                  alt="FC Porto Dragon Force parceria com EFAT"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    DESTAQUE
                  </span>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>9 Janeiro, 2026</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground text-balance">
                  FC Porto abre escola Dragon Force em Cabo Verde em parceria com a EFAT
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Uma parceria historica que traz a metodologia de elite do FC Porto para os jovens atletas
                  cabo-verdianos. A escola Dragon Force funcionara em conjunto com a EFAT, combinando a experiencia
                  internacional do FC Porto com o conhecimento local e o compromisso social da EFAT.
                </p>
                <Button className="self-start" asChild>
                  <Link href="/noticias">
                    LER MAIS <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.slice(1).map((noticia) => (
              <Card key={noticia.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                      {noticia.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{noticia.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground leading-tight">{noticia.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{noticia.excerpt}</p>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    LER MAIS <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
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
