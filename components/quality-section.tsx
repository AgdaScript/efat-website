import { Heart } from "lucide-react"

export function QualitySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Heart className="w-20 h-20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            A IMPORTANCIA DA <span className="text-accent">INCLUSAO SOCIAL</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground/90">
            Desde a sua fundacao, a EFAT tem como missao usar o desporto como ferramenta de inclusao social.
            Localizada em Achada Grande Tras, na cidade da Praia, a escola acolhe jovens da comunidade,
            combatendo a delinquencia juvenil e o abandono escolar, contribuindo para a qualidade do futebol
            cabo-verdiano e para o desenvolvimento humano dos seus atletas.
          </p>
          <div className="bg-accent text-accent-foreground rounded-lg p-6 inline-block">
            <p className="text-lg font-bold">
              A EFAT e mais do que uma escola de futebol: e um projeto de transformacao social que acredita no
              potencial de cada jovem como agente de mudanca na sua comunidade.
            </p>
          </div>
          <p className="mt-8 text-xl font-semibold">Uma Missao. Uma Comunidade. Um Futuro.</p>
        </div>
      </div>
    </section>
  )
}
