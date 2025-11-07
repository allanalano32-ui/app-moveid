import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contato() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-xl font-bold text-gray-900">MoveID</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/como-funciona" className="text-gray-600 hover:text-blue-600 transition-colors">
            Como Funciona
          </Link>
          <Link href="/planos" className="text-gray-600 hover:text-blue-600 transition-colors">
            Planos
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">
            FAQ
          </Link>
          <Link href="/contato" className="text-blue-600 font-semibold">
            Contato
          </Link>
        </nav>
        <div className="flex space-x-2">
          <Button variant="outline" asChild>
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="/planos">Assinar Premium</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          Fale Conosco
        </Badge>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Estamos Aqui para Ajudar
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Tem dúvidas, sugestões ou precisa de suporte? Entre em contato conosco.
        </p>
      </section>

      {/* Contact Options */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Chat Online</CardTitle>
              <CardDescription>
                Resposta rápida em até 2 horas durante horário comercial
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link href="#chat">Iniciar Chat</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>E-mail</CardTitle>
              <CardDescription>
                Envie suas dúvidas detalhadas para nossa equipe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">suporte@moveid.com</p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="mailto:suporte@moveid.com">Enviar E-mail</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Telefone</CardTitle>
              <CardDescription>
                Para assuntos urgentes ou suporte premium
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">(11) 9999-9999</p>
              <p className="text-xs text-gray-500 mb-4">Seg-Sex: 9h às 18h</p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="tel:+551199999999">Ligar Agora</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Envie sua Mensagem
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" placeholder="Seu nome completo" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="assunto">Assunto</Label>
                <Input id="assunto" placeholder="Sobre o que você quer falar?" />
              </div>
              <div>
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  placeholder="Descreva sua dúvida ou sugestão em detalhes..."
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Informações Adicionais
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-gray-600">
                    Rua da Inovação, 123<br />
                    São Paulo, SP - 01234-567<br />
                    Brasil
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 12h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Por que nos escolher?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <div>
                  <strong>Suporte Especializado:</strong> Nossa equipe tem experiência em fitness e tecnologia.
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                <div>
                  <strong>Respostas Rápidas:</strong> Compromisso com atendimento em até 24 horas.
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></div>
                <div>
                  <strong>Comunidade Ativa:</strong> Junte-se a milhares de usuários melhorando seus treinos.
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></div>
                <div>
                  <div>
                    <strong>Inovação Constante:</strong> Sempre atualizando com as melhores tecnologias.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}