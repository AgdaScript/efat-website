import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground curved-edge-top curved-edge-bottom">
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          READY TO BECOME A <span className="text-accent">CHAMPION</span>?
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed">
          Join over 35 Dragon Force Schools and experience a methodology that has been preparing champions for life for
          17 years.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            PRE-REGISTER NOW
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </section>
  )
}
