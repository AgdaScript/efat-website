export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DRAGON FORCE</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Elite Sport Academy preparing champions for life since 2008.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#eventos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#escolas"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Schools
                </a>
              </li>
              <li>
                <a
                  href="#internacional"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  International
                </a>
              </li>
              <li>
                <a href="#dna" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  DNA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">INFORMATION</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Quality Certificate
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">CONTACT</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>info@dragonforce.com</li>
              <li>+351 220 000 000</li>
              <li>Porto, Portugal</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>© {new Date().getFullYear()} Dragon Force Elite Sport Academy. All rights reserved.</p>
          <p className="mt-2">ISO 9001:2015 Certified Quality Management System</p>
        </div>
      </div>
    </footer>
  )
}
