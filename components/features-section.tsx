import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, School, Globe } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "EVENTS",
    description:
      "Enter a universe where Joy trains with you, Passion wears blue and white, and Motivation drives you to play like a true Dragon.",
    cta: "SEE CATALOG 25/26",
    href: "#eventos",
  },
  {
    icon: School,
    title: "FOOTBALL SCHOOLS",
    description:
      "Wear the Dragon's skin and live your passion at one of the more than 35 Dragon Force Soccer Schools throughout the country.",
    cta: "SEE SCHOOLS",
    href: "#escolas",
  },
  {
    icon: Globe,
    title: "INTERNATIONAL",
    description:
      "A methodology open to the world that travels to make itself known and welcomes all those who want to feel the true Power of the Dragon.",
    cta: "LEARN MORE",
    href: "#internacional",
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
                  <a href={feature.href}>{feature.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
