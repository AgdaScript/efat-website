import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactosPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-20 md:pt-24">
        <div className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">CONTACTOS</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
              Entre em contacto connosco. Estamos prontos para ajudar
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">INFORMACOES DE CONTACTO</h2>

              <div className="flex flex-col gap-6 mb-10">
                <Card className="border-2 hover:border-primary transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-1">Localizacao</h3>
                      <p className="text-muted-foreground">Achada Grande Tras</p>
                      <p className="text-muted-foreground">Cidade da Praia, Santiago</p>
                      <p className="text-muted-foreground">Cabo Verde</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-1">Telefone</h3>
                      <p className="text-muted-foreground">(+238) 5 944582</p>
                      <p className="text-muted-foreground">(+238) 9 712994</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">geral@efat.cv</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-card-foreground mb-1">Horario de Funcionamento</h3>
                      <p className="text-muted-foreground">Segunda a Sexta: 08:00 - 18:00</p>
                      <p className="text-muted-foreground">Sabado: 08:00 - 13:00</p>
                      <p className="text-muted-foreground">Treinos: conforme escaloes</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-2 text-card-foreground">ENVIE-NOS UMA MENSAGEM</h2>
                  <p className="text-muted-foreground mb-8">
                    Preencha o formulario abaixo para inscricoes, informacoes ou qualquer questao.
                  </p>
                  <form className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-card-foreground mb-2">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          id="nome"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefone" className="block text-sm font-medium text-card-foreground mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                          placeholder="(+238) ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                        placeholder="seu@email.cv"
                      />
                    </div>

                    <div>
                      <label htmlFor="assunto" className="block text-sm font-medium text-card-foreground mb-2">
                        Assunto
                      </label>
                      <select
                        id="assunto"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="inscricao">Inscricao de Atleta</option>
                        <option value="informacao">Pedido de Informacao</option>
                        <option value="parceria">Proposta de Parceria</option>
                        <option value="voluntariado">Voluntariado</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="escalao" className="block text-sm font-medium text-card-foreground mb-2">
                        Escalao (se aplicavel)
                      </label>
                      <select
                        id="escalao"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                      >
                        <option value="">Selecione um escalao</option>
                        <option value="sub11">Sub-11</option>
                        <option value="sub13">Sub-13</option>
                        <option value="sub15">Sub-15</option>
                        <option value="sub17">Sub-17</option>
                        <option value="feminino">Senior Feminino</option>
                        <option value="masculino">Senior Masculino</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-medium text-card-foreground mb-2">
                        Mensagem
                      </label>
                      <textarea
                        id="mensagem"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                        placeholder="Escreva a sua mensagem aqui..."
                      />
                    </div>

                    <Button size="lg" className="w-full text-lg py-6" type="button">
                      ENVIAR MENSAGEM
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MAPA DE LOCALIZACAO</h2>
            <p className="text-muted-foreground">Visite-nos em Achada Grande Tras, Cidade da Praia, Cabo Verde</p>
          </div>
          <div className="rounded-lg overflow-hidden border-2 border-border shadow-lg aspect-[16/7]">
            <iframe
              title="Localizacao EFAT"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2!2d-23.519!3d14.921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDU1JzE1LjYiTiAyM8KwMzEnMDguNCJX!5e0!3m2!1spt!2scv!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
