import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

const newsItems = [
  {
    date: "July 8, 2025",
    title: "Registration for 2025/26 opens this Monday",
    excerpt: "Don't miss the opportunity to join Dragon Force for the new season starting in September.",
  },
  {
    date: "July 8, 2025",
    title: "Dragon Force with summer vacation programs",
    excerpt: "Exciting summer programs available in various parts of the country for all age groups.",
  },
  {
    date: "July 8, 2025",
    title: "FC Porto signs partnership to open Dragon Force school in Mexico",
    excerpt: "Dragon Force expands internationally with new partnership in Mexico City.",
  },
  {
    date: "April 30, 2025",
    title: "Dragon Force: 16 years of creating talent",
    excerpt: "Celebrating 16 years of excellence in youth football development and education.",
  },
]

export function NewsSection() {
  return (
    <section id="noticias" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">KEEP UP TO DATE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">NEWS</h2>
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
                <Button variant="outline">READ THE NEWS</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            VIEW ALL NEWS
          </Button>
        </div>
      </div>
    </section>
  )
}
