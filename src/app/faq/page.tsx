import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react'

export default function FAQ() {
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
          <Link href="/faq" className="text-blue-600 font-semibold">
            FAQ
          </Link>
          <Link href="/contato" className="text-gray-600 hover:text-blue-600 transition-colors">
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
          Tire suas dúvidas
        </Badge>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Perguntas Frequentes
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Encontre respostas para as dúvidas mais comuns sobre o MoveID.
        </p>
      </section>

      {/* FAQ Accordion */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Como funciona a análise de movimento do MoveID?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                O MoveID usa inteligência artificial avançada com TensorFlow e MediaPipe para analisar vídeos de exercícios. A IA detecta pontos-chave do corpo (pose estimation) e calcula métricas biomecânicas como ângulos articulares, postura e amplitude de movimento. Em segundos, você recebe uma nota de 0-100 e dicas personalizadas para melhorar sua técnica.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                É seguro usar o MoveID? E sobre minha privacidade?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Sim, o MoveID segue rigorosamente a LGPD. Seus vídeos são processados localmente no dispositivo sempre que possível, garantindo máxima privacidade. Você tem controle total sobre o armazenamento: pode optar por não salvar vídeos ou excluí-los a qualquer momento. Todos os dados são criptografados e armazenados de forma segura.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Quais exercícios posso analisar com o MoveID?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                O MoveID funciona com uma ampla variedade de exercícios: agachamentos, flexões, corridas, saltos, remadas, entre outros. A IA é treinada para reconhecer movimentos comuns de musculação, crossfit, corrida e esportes. Para melhores resultados, grave vídeos de 5-10 segundos focando em um movimento específico.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Quanto tempo leva para receber o feedback?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                A análise é extremamente rápida! Em dispositivos modernos, você recebe o feedback em menos de 10 segundos. O processamento acontece localmente no seu aparelho, sem depender de conexão com a internet para a análise básica. Apenas recursos avançados podem requerer upload para nossos servidores.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                O que diferencia o plano gratuito do premium?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                O plano gratuito permite 3 análises por semana com feedback básico. O plano premium (R$ 19,90/mês) oferece análises ilimitadas, exportação de relatórios em PDF, gráficos avançados de evolução, comparativos entre análises e suporte prioritário. É ideal para atletas e profissionais que precisam de acompanhamento detalhado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Posso cancelar minha assinatura a qualquer momento?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Sim, você pode cancelar sua assinatura premium a qualquer momento sem taxas de cancelamento. O acesso ao plano continua até o final do período pago. Se cancelar, você volta automaticamente para o plano gratuito com suas análises anteriores preservadas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                O MoveID funciona offline?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Sim! A análise básica funciona completamente offline no seu dispositivo. Apenas recursos como sincronização de dados entre dispositivos, backup na nuvem e alguns recursos avançados requerem conexão com a internet. Você pode usar o MoveID em qualquer lugar, mesmo sem sinal de celular.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Como posso exportar meus relatórios?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                No plano premium, você pode exportar relatórios detalhados em PDF diretamente do app. Os PDFs incluem sua nota, métricas biomecânicas, dicas de melhoria, gráficos de evolução e até mesmo imagens do vídeo analisado com o overlay do esqueleto. Perfeito para compartilhar com treinadores ou acompanhar seu progresso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                O MoveID substitui um treinador pessoal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Não, o MoveID é uma ferramenta complementar, não substituta. Ele fornece feedback técnico objetivo sobre sua forma e biomecânica, mas um treinador pessoal oferece orientação completa sobre programas de treino, nutrição, recuperação e motivação. Use o MoveID para refinar sua técnica e potencializar os resultados com seu treinador.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Em quais dispositivos o MoveID funciona?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                O MoveID está disponível para smartphones iOS e Android, com app nativo otimizado para cada plataforma. Também oferecemos versão web responsiva que funciona em qualquer navegador moderno. Todos os dispositivos com câmera podem gravar vídeos, mas recomendamos smartphones modernos para melhor performance da IA.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Não encontrou sua resposta?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nossa equipe está pronta para ajudar você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contato">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com Suporte
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="mailto:suporte@moveid.com">
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}