"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Play, X } from "lucide-react"

const videos = [
  { id: 1, title: "EFAT Podcast Edicao Especial", thumbnail: "/images/video-podcast.jpg" },
  { id: 2, title: "EFAT Podcast - Ianique Stopira", thumbnail: "/images/video-stopira.jpg" },
  { id: 3, title: "EFAT Podcast - Carlos Monteiro", thumbnail: "/images/video-monteiro.jpg" },
  { id: 4, title: "Torneio Sub-13 Lyon Franca 2019", thumbnail: "/images/video-lyon.jpg" },
]

const galeriaFotos = [
  { id: 1, src: "/images/galeria-treino-1.jpg", alt: "Treino dos jovens atletas EFAT", category: "Treinos" },
  { id: 2, src: "/images/galeria-competicao-1.jpg", alt: "Competicao Liga Play CV", category: "Competicoes" },
  { id: 3, src: "/images/galeria-equipa-1.jpg", alt: "Equipa EFAT Sub-17", category: "Equipa" },
  { id: 4, src: "/images/galeria-comunidade-1.jpg", alt: "Atividade comunitaria EFAT", category: "Comunidade" },
  { id: 5, src: "/images/galeria-treino-2.jpg", alt: "Sessao de treino tecnico", category: "Treinos" },
  { id: 6, src: "/images/galeria-competicao-2.jpg", alt: "Jogo do campeonato feminino", category: "Competicoes" },
  { id: 7, src: "/images/galeria-parceria-1.jpg", alt: "Assinatura de protocolo", category: "Parcerias" },
  { id: 8, src: "/images/galeria-equipa-2.jpg", alt: "Equipa feminina EFAT", category: "Equipa" },
  { id: 9, src: "/images/galeria-evento-1.jpg", alt: "Evento na sede EFAT", category: "Eventos" },
]

const categories = ["Todos", "Treinos", "Competicoes", "Equipa", "Comunidade", "Parcerias", "Eventos"]

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filteredFotos = selectedCategory === "Todos"
    ? galeriaFotos
    : galeriaFotos.filter((f) => f.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-20 md:pt-24">
        <div className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">GALERIA</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
              Momentos e memorias da EFAT em imagens e videos
            </p>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">MULTIMIDIA</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">VIDEOS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative group overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/60 flex items-center justify-center transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="text-primary-foreground text-sm font-medium">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">FOTOGRAFIAS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">IMAGENS</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground border border-border hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFotos.map((foto) => (
              <div
                key={foto.id}
                className="relative group overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                onClick={() => setLightboxImage(foto.src)}
              >
                <img
                  src={foto.src || "/placeholder.svg"}
                  alt={foto.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end">
                  <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity w-full bg-gradient-to-t from-foreground/60 to-transparent">
                    <p className="text-primary-foreground text-sm font-medium">{foto.alt}</p>
                    <span className="text-primary-foreground/80 text-xs">{foto.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Fechar imagem"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage || "/placeholder.svg"}
            alt="Imagem ampliada"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </main>
  )
}
