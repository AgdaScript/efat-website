import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar, Shield, BookOpen, Users } from "lucide-react"

const documentos = [
  {
    icon: BookOpen,
    categoria: "ESTATUTOS",
    items: [
      {
        titulo: "Estatutos da EFAT",
        descricao: "Documento fundamental que define a natureza, objetivos, orgaos e regras de funcionamento da Associacao Escola de Futebol de Achada Grande Tras.",
        data: "Aprovado em Assembleia Geral",
      },
    ],
  },
  {
    icon: FileText,
    categoria: "RELATORIOS E CONTAS",
    items: [
      {
        titulo: "Relatorio de Atividades 2025",
        descricao: "Relatorio anual das atividades realizadas pela EFAT, incluindo resultados desportivos, acoes sociais e parcerias estabelecidas.",
        data: "2025",
      },
      {
        titulo: "Relatorio de Atividades 2024",
        descricao: "Resumo das atividades do ano, com destaque para os protocolos com IDS e Academia Amizade.",
        data: "2024",
      },
      {
        titulo: "Relatorio de Atividades 2023",
        descricao: "Atividades e resultados alcancados pela EFAT no ano de 2023.",
        data: "2023",
      },
    ],
  },
  {
    icon: Shield,
    categoria: "REGULAMENTOS",
    items: [
      {
        titulo: "Regulamento Interno",
        descricao: "Normas de conduta, direitos e deveres dos atletas, treinadores e associados da EFAT.",
        data: "Versao atualizada",
      },
      {
        titulo: "Regulamento Disciplinar",
        descricao: "Regras disciplinares aplicaveis aos membros da associacao e procedimentos em caso de infracoes.",
        data: "Versao atualizada",
      },
    ],
  },
  {
    icon: Users,
    categoria: "PROTOCOLOS",
    items: [
      {
        titulo: "Protocolo EFAT - FC Porto Dragon Force",
        descricao: "Acordo de parceria para abertura da escola Dragon Force em Cabo Verde, com metodologia de formacao de elite.",
        data: "Janeiro 2026",
      },
      {
        titulo: "Protocolo EFAT - IDS Portugal",
        descricao: "Acordo de cooperacao educativa para bolsas de estudo e intercambio de conhecimentos com o Instituto de Desenvolvimento Social.",
        data: "Outubro 2024",
      },
      {
        titulo: "Protocolo EFAT - Academia Amizade",
        descricao: "Protocolo de cooperacao desportiva e comunitaria com a Academia Amizade de Sao Paulo, Guine-Bissau.",
        data: "Outubro 2024",
      },
      {
        titulo: "Protocolo EFAT - MJEDRH",
        descricao: "Acordo institucional com o Ministerio da Juventude, Emprego e Desenvolvimento de Recursos Humanos de Cabo Verde.",
        data: "2012",
      },
    ],
  },
]

export default function DocumentosPage() {
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">DOCUMENTOS</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
              Estatutos, regulamentos, relatorios e protocolos da EFAT
            </p>
          </div>
        </div>
      </section>

      {/* Nota Transparencia */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A EFAT prima pela transparencia na sua gestao. Aqui encontra os principais documentos
              que regem o funcionamento da associacao, incluindo estatutos, regulamentos, relatorios
              de atividades e protocolos de parceria.
            </p>
          </div>
        </div>
      </section>

      {/* Documentos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12">
            {documentos.map((grupo, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <grupo.icon className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">{grupo.categoria}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {grupo.items.map((doc, i) => (
                    <Card key={i} className="border-2 hover:border-primary transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-card-foreground mb-1">{doc.titulo}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{doc.descricao}</p>
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3" />
                                <span>{doc.data}</span>
                              </div>
                              <Button variant="outline" size="sm" className="bg-transparent">
                                <Download className="w-3 h-3 mr-1" />
                                Descarregar
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
