"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { useState } from "react"

const schools = [
  { name: "Elite Sport Academy", location: "Famalicão", students: "150+" },
  { name: "Ramos Pinto Academy", location: "Porto", students: "200+" },
  { name: "New Balance Park", location: "Porto", students: "180+" },
  { name: "Camões College", location: "Lisboa", students: "120+" },
  { name: "Gaia College", location: "Gaia", students: "160+" },
  { name: "Ermesinde College", location: "Ermesinde", students: "140+" },
  { name: "Trofa School", location: "Trofa", students: "130+" },
  { name: "Ribadouro School", location: "Porto", students: "110+" },
  { name: "Madeira", location: "Madeira", students: "90+" },
]

export function SchoolsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedSchools = showAll ? schools : schools.slice(0, 6)

  return (
    <section id="escolas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">FOOTBALL SCHOOLS</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            More than <span className="text-primary font-bold">35 Dragon Force Soccer Schools</span> throughout the
            country, ready to welcome you and help you develop your full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedSchools.map((school, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">{school.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{school.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{school.students}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  MORE INFORMATION
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {!showAll && (
            <Button size="lg" variant="outline" onClick={() => setShowAll(true)}>
              VIEW ALL SCHOOLS
            </Button>
          )}
          <Button size="lg">PRE-REGISTRATION</Button>
        </div>
      </div>
    </section>
  )
}
