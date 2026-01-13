"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">DRAGON FORCE</div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#eventos" className="text-sm font-medium hover:text-primary transition-colors">
              EVENTS
            </a>
            <a href="#escolas" className="text-sm font-medium hover:text-primary transition-colors">
              SCHOOLS
            </a>
            <a href="#internacional" className="text-sm font-medium hover:text-primary transition-colors">
              INTERNATIONAL
            </a>
            <a href="#dna" className="text-sm font-medium hover:text-primary transition-colors">
              DNA
            </a>
            <a href="#noticias" className="text-sm font-medium hover:text-primary transition-colors">
              NEWS
            </a>
            <Button>JOIN US</Button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a href="#eventos" className="block text-sm font-medium hover:text-primary transition-colors">
              EVENTS
            </a>
            <a href="#escolas" className="block text-sm font-medium hover:text-primary transition-colors">
              SCHOOLS
            </a>
            <a href="#internacional" className="block text-sm font-medium hover:text-primary transition-colors">
              INTERNATIONAL
            </a>
            <a href="#dna" className="block text-sm font-medium hover:text-primary transition-colors">
              DNA
            </a>
            <a href="#noticias" className="block text-sm font-medium hover:text-primary transition-colors">
              NEWS
            </a>
            <Button className="w-full">JOIN US</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
