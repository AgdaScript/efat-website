import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    date: "9 Janeiro, 2026",
    title: "FC Porto abre escola Dragon Force em Cabo Verde em parceria com a EFAT",
    excerpt: "Uma parceria historica que traz a metodologia de elite do FC Porto para os jovens atletas cabo-verdianos atraves da EFAT.",
  },
  {
    date: "16 Outubro, 2025",
    title: "Criancas da EFAT participam na rececao a Selecao Nacional",
    excerpt: "Jovens atletas da EFAT marcaram presenca na rececao a Selecao Nacional apos qualificacao historica para o Mundial.",
  },
  {
    date: "10 Outubro, 2025",
    title: "EFAT Lanca Primeira Pedra para Construcao da Nova Sede",
    excerpt: "Inicio historico da construcao da nova sede da EFAT em Achada Grande Tras, um marco para a comunidade.",
  },
  {
    date: "15 Outubro, 2024",
    title: "Assinatura de Protocolo com Academia Amizade de Sao Paulo",
    excerpt: "EFAT firma protocolo de cooperacao com a Academia Amizade de Sao Paulo, na Guine-Bissau, para intercambio desportivo e educativo.",
  },
]

export function NewsSection() {
  return (
    <section id="noticias" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center ">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">FIQUE ATUALIZADO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">NOTICIAS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{item.excerpt}</p>
                <Button variant="outline" className="bg-transparent" asChild>
                  <Link href="/noticias">LER A NOTICIA</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="bg-transparent" asChild>
            <Link href="/noticias">VER TODAS AS NOTICIAS</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
