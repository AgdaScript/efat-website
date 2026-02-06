import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Trophy } from "lucide-react"
import Link from "next/link"

const escaloes = [
  { nome: "Sub-11", idade: "9-11 anos", atletas: "25+", treinos: "3x por semana" },
  { nome: "Sub-13", idade: "11-13 anos", atletas: "30+", treinos: "3x por semana" },
  { nome: "Sub-15", idade: "13-15 anos", atletas: "30+", treinos: "4x por semana" },
  { nome: "Sub-17", idade: "15-17 anos", atletas: "25+", treinos: "4x por semana" },
  { nome: "Senior Feminino", idade: "16+ anos", atletas: "20+", treinos: "4x por semana" },
  { nome: "Senior Masculino", idade: "18+ anos", atletas: "25+", treinos: "5x por semana" },
]

export function SchoolsSection() {
  return (
    <section id="escaloes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">ESCALOES DE FORMACAO</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A EFAT conta com varios escaloes de formacao, acompanhando os jovens atletas desde os
            primeiros passos no futebol ate ao nivel senior, com treinos regulares e participacao em competicoes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {escaloes.map((escalao, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">{escalao.nome}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{escalao.idade}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{escalao.atletas}</div>
                    <div className="text-xs text-muted-foreground">Atletas</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span>Treinos: {escalao.treinos}</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contactos">MAIS INFORMACOES</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contactos">INSCREVER-SE</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
