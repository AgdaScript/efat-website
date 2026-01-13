import { Card, CardContent } from "@/components/ui/card"
import { Heart, User, Users, Trophy, GraduationCap, Target, Lightbulb, Activity, Smile } from "lucide-react"

const dnaItems = [
  {
    icon: Heart,
    title: "SOCCER IS A PASSION",
    description: "That's why we value a serious, organized and passionate process",
  },
  {
    icon: User,
    title: "THE CHILD AT THE CENTER",
    description: "Our greatest ambition is to develop our students' sporting, social and emotional skills",
  },
  {
    icon: Users,
    title: "EACH STUDENT IS UNIQUE",
    description: "And it deserves special attention, so that we can always get the best out of it",
  },
  { icon: Trophy, title: "PREPARING CHAMPIONS FOR LIFE", description: "We assume that champions don't form overnight" },
  {
    icon: GraduationCap,
    title: "ONGOING TRAINING",
    description: "All our staff have access to the right tools to enhance the development of all students",
  },
  {
    icon: Target,
    title: "INTEGRATED TEACHING AREAS",
    description: "To promote values that will make our students aware of everything around them",
  },
  {
    icon: Lightbulb,
    title: "CONSTANT INNOVATION",
    description:
      "We study the challenges of the present and seek to optimize our Methodology for an ever stronger future",
  },
  {
    icon: Activity,
    title: "COMMON THINKING",
    description:
      "We believe that success comes from the perfect connection between Training, Nutrition, Psychology and Operation",
  },
  {
    icon: Smile,
    title: "RESPONSIBILITY AND JOY",
    description: "It is with this attitude that we welcome and accompany all our students",
  },
]

export function DNASection() {
  return (
    <section id="dna" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">DRAGON DNA</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">OUR IDENTITY</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dnaItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
