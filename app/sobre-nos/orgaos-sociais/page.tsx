import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Scale, BookOpen } from "lucide-react"

const assembleia = [
  { nome: "Dr. Edmilson Garcia", cargo: "Presidente" },
  { nome: "Maria Santos", cargo: "Vice-Presidente" },
  { nome: "Joao Silva", cargo: "Secretario" },
]

const direcao = [
  { nome: "Dr. Edmilson Garcia", cargo: "Presidente da Direcao" },
  { nome: "Zeinabou Thiam", cargo: "Comunicacao e Relacoes Publicas" },
  { nome: "Paulo Canuto", cargo: "Coordenacao Liga Play CV" },
  { nome: "Antonio Fernandes", cargo: "Director Tecnico" },
  { nome: "Sandra Lopes", cargo: "Secretaria Geral" },
]

const fiscal = [
  { nome: "Carlos Tavares", cargo: "Presidente" },
  { nome: "Ana Brito", cargo: "Vogal" },
  { nome: "Pedro Gomes", cargo: "Vogal" },
]

const disciplinar = [
  { nome: "Manuel Correia", cargo: "Presidente" },
  { nome: "Helena Mendes", cargo: "Vogal" },
  { nome: "Ricardo Fonseca", cargo: "Vogal" },
]

const orgaos = [
  {
    icon: BookOpen,
    titulo: "Assembleia Geral",
    descricao: "Orgao maximo de deliberacao da EFAT, responsavel pelas decisoes estrategicas e aprovacao dos relatorios e contas anuais.",
    membros: assembleia,
  },
  {
    icon: Users,
    titulo: "Direcao",
    descricao: "Orgao executivo responsavel pela gestao diaria da EFAT, implementacao das decisoes da Assembleia e coordenacao de todas as atividades desportivas e sociais.",
    membros: direcao,
  },
  {
    icon: Scale,
    titulo: "Conselho Fiscal",
    descricao: "Orgao de fiscalizacao que acompanha e verifica a gestao financeira e administrativa da associacao, garantindo transparencia e rigor.",
    membros: fiscal,
  },
  {
    icon: Shield,
    titulo: "Conselho Disciplinar",
    descricao: "Orgao responsavel pela aplicacao do regulamento interno, zelando pelo cumprimento dos valores e normas da EFAT.",
    membros: disciplinar,
  },
]

export default function OrgaosSociaisPage() {
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">ORGAOS SOCIAIS</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
              Conheca as pessoas que lideram e gerem a EFAT
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A EFAT e uma associacao sem fins lucrativos, regida por estatutos proprios e composta por orgaos
              eleitos democraticamente pela Assembleia Geral. Cada orgao desempenha um papel fundamental na
              gestao e no desenvolvimento da nossa missao de inclusao social atraves do desporto.
            </p>
          </div>
        </div>
      </section>

      {/* Orgaos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12">
            {orgaos.map((orgao, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="p-8 lg:p-10 bg-primary/5 flex flex-col items-center justify-center text-center">
                      <orgao.icon className="w-16 h-16 text-primary mb-4" />
                      <h3 className="text-2xl font-bold text-card-foreground">{orgao.titulo}</h3>
                    </div>
                    <div className="p-8 lg:p-10 lg:col-span-2">
                      <p className="text-muted-foreground leading-relaxed mb-6">{orgao.descricao}</p>
                      <h4 className="font-bold text-card-foreground mb-4">Composicao:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {orgao.membros.map((membro, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Users className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-card-foreground">{membro.nome}</p>
                              <p className="text-xs text-muted-foreground">{membro.cargo}</p>
                            </div>
                          </div>
                        ))}
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
