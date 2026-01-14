import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Plane, Users } from "lucide-react"

export function InternationalSection() {
  return (
    <section
      id="internacional"
      className="relative pt-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground curved-edge-bottom"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">INTERNATIONAL</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            From Porto to the world and from the world to Porto. Experience our methodology and feel the true Power of
            the Dragon wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card/95 backdrop-blur">
            <CardContent className="p-8 text-center">
              <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Global Presence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dragon Force methodology is present in multiple countries, spreading our passion and excellence
                worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur">
            <CardContent className="p-8 text-center">
              <Plane className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Custom Programs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tailor-made training programs designed specifically for your team or organization's needs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur">
            <CardContent className="p-8 text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Exchange Programs</h3>
              <p className="text-muted-foreground leading-relaxed">
                International exchange opportunities for students to experience different cultures and football styles.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" variant="secondary" className="text-lg px-8">
            REQUEST CUSTOM PROGRAM
          </Button>
        </div>
      </div>
    </section>
  )
}
