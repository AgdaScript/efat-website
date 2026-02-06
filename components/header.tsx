"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const sobreNosSubItems = [
  { label: "A Nossa Historia", href: "/sobre-nos" },
  { label: "Orgaos Sociais", href: "/sobre-nos/orgaos-sociais" },
  { label: "Documentos", href: "/sobre-nos/documentos" },
  { label: "Apadrinhamento", href: "/sobre-nos/apadrinhamento" },
]

const navItems = [
  { label: "INICIO", href: "/" },
  { label: "SOBRE NOS", href: "/sobre-nos", subItems: sobreNosSubItems },
  { label: "NOTICIAS", href: "/noticias" },
  { label: "GALERIA", href: "/galeria" },
  { label: "PARCERIAS", href: "/parcerias" },
  { label: "CONTACTOS", href: "/contactos" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-sm border-b border-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 md:h-14">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/EFAT_LOGO.png"
              alt="Associação Escola EFAT"
              width={180}
              height={48}
              className="h-8 w-auto md:h-10 object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.href} className="relative">
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-primary-foreground hover:text-primary-foreground/90 transition-colors"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-border bg-background shadow-xl py-2 z-50">
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors font-medium"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Visao Geral
                      </Link>
                      <div className="h-px bg-border mx-3 my-1" />
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/90 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white border-0">
              <Link href="/contactos">INSCREVER-SE</Link>
            </Button>
          </nav>

          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary/80">
            <div className="flex flex-col gap-1">
              {navItems.map((item) =>
                item.subItems ? (
                  <div key={item.href}>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-primary-foreground hover:text-primary-foreground/90 hover:bg-primary/80 rounded-lg transition-colors"
                      onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSubmenu === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {openMobileSubmenu === item.label && (
                      <div className="ml-4 flex flex-col gap-1 border-l-2 border-primary/20 pl-4 py-1">
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-primary-foreground hover:text-primary-foreground/90 transition-colors font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Visao Geral
                        </Link>
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-primary-foreground hover:text-primary-foreground/90 hover:bg-primary/80 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="px-4 pt-2">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white border-0" asChild>
                  <Link href="/contactos">INSCREVER-SE</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
