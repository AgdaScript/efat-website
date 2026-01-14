import { Award } from "lucide-react"

export function QualitySection() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground curved-edge-bottom curved-edge-top">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Award className="w-20 h-20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            THE IMPORTANCE OF <span className="text-accent">QUALITY</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground/90">
            With 17 years of existence and more than 35 Football Schools, the Dragon Force Project strives every day to
            fulfill its mission of Preparing Champions for Life. In order to ensure that processes and procedures are
            transversal to all Schools and Events, its Quality Management System, which complies with ISO 9001:2015
            Standards, is audited annually by external entities.
          </p>
          <div className="bg-accent text-accent-foreground rounded-lg p-6 inline-block">
            <p className="text-lg font-bold">
              The Dragon Force Football School is the only one in the world with a certified Quality Management System
              for the Management and Operation of Football Schools and Events.
            </p>
          </div>
          <p className="mt-8 text-xl font-semibold">A Methodology. A Mission. A Commitment to Quality.</p>
        </div>
      </div>
    </section>
  )
}
