import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function EventsSection() {
  return (
    <section id="eventos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">EVENTS</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience unforgettable moments with our exclusive training camps, tournaments, and special programs
            designed to bring out the champion in every player.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div
              className="h-64 bg-gradient-to-br from-primary to-primary/60"
              style={{
                backgroundImage: `url(/placeholder.svg?height=400&width=600&query=soccer+summer+camp+kids)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full bg-primary/60 flex items-end p-6">
                <div>
                  <span className="text-xs font-bold text-primary-foreground bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    SUMMER 2026
                  </span>
                  <h3 className="text-2xl font-bold text-primary-foreground mt-4">Summer Training Camp</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">Intensive week-long programs with professional coaching</p>
              <Button className="w-full">REGISTER NOW</Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div
              className="h-64 bg-gradient-to-br from-accent to-accent/60"
              style={{
                backgroundImage: `url(/placeholder.svg?height=400&width=600&query=soccer+tournament+youth)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full bg-primary/60 flex items-end p-6">
                <div>
                  <span className="text-xs font-bold text-primary-foreground bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    APRIL 2026
                  </span>
                  <h3 className="text-2xl font-bold text-primary-foreground mt-4">Dragon Cup Tournament</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">Annual championship bringing together the best teams</p>
              <Button className="w-full">LEARN MORE</Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div
              className="h-64 bg-gradient-to-br from-primary/80 to-accent/80"
              style={{
                backgroundImage: `url(/placeholder.svg?height=400&width=600&query=soccer+skills+clinic)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full bg-primary/60 flex items-end p-6">
                <div>
                  <span className="text-xs font-bold text-primary-foreground bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    YEAR ROUND
                  </span>
                  <h3 className="text-2xl font-bold text-primary-foreground mt-4">Skills Development</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">Specialized clinics focusing on technical excellence</p>
              <Button className="w-full">VIEW SCHEDULE</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            VIEW ALL EVENTS
          </Button>
        </div>
      </div>
    </section>
  )
}
