import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Play, Upload, BarChart3, Shield, Smartphone, Zap, CheckCircle, Video, Cpu, FileText } from 'lucide-react'

export default function ComoFunciona() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2" prefetch={false}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-xl font-bold text-gray-900">MoveID</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/como-funciona" className="text-blue-600 font-semibold" prefetch={false}>
            Como Funciona
          </Link>
          <Link href="/planos" className="text-gray-600 hover:text-blue-600 transition-colors" prefetch={false}>
            Planos
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors" prefetch={false}>
            FAQ
          </Link>
          <Link href="/contato" className="text-gray-600 hover:text-blue-600 transition-colors" prefetch={false}>
            Contato
          </Link>
        </nav>
        <div className="flex space-x-2">
          <Button variant="outline" asChild>
            <Link href="/login" prefetch={false}>Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="/planos" prefetch={false}>Assinar Premium</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          Entenda o Processo
        </Badge>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Como o MoveID Funciona
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Descubra como nossa IA analisa seus movimentos e fornece feedback biomecânico preciso em segundos.
        </p>
      </section>

      {/* Step by Step */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Video className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">1. Capture o Vídeo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Grave um vídeo curto (5-10s) do seu exercício usando a câmera do celular ou faça upload de um vídeo existente.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Cpu className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-lg">2. IA Processa</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Nossa IA usa TensorFlow e MediaPipe para detectar pontos-chave do corpo e calcular ângulos articulares.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-lg">3. Análise Biomecânica</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Calculamos postura, valgo/varo do joelho, amplitude de movimento e estabilidade lateral.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <FileText className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-lg">4. Feedback Instantâneo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Receba uma nota de 0-100 e dicas personalizadas para melhorar sua técnica de exercício.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Details */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            O que a IA Analisa
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Métricas Biomecânicas</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Ângulo do Joelho:</strong> Detecta flexão/extensão adequada durante agachamentos e saltos.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Ângulo do Quadril:</strong> Avalia profundidade e alinhamento do movimento.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Postura do Tronco:</strong> Verifica inclinação e rotação durante exercícios.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Valgo/Varo do Joelho:</strong> Identifica joelhos voltados para dentro/fora.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Amplitude de Movimento:</strong> Mede alcance completo das articulações.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Estabilidade Lateral:</strong> Avalia equilíbrio e controle durante o movimento.
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Tecnologia Utilizada</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900">TensorFlow.js</h4>
                  <p className="text-blue-700">Framework de machine learning que roda no navegador e mobile.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">MediaPipe</h4>
                  <p className="text-green-700">Biblioteca Google para detecção de pose em tempo real.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900">MoveNet</h4>
                  <p className="text-purple-700">Modelo de IA para estimativa de pose de alta precisão.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900">Processamento Local</h4>
                  <p className="text-orange-700">Análise acontece no dispositivo para máxima privacidade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Veja Como Funciona na Prática
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Vídeo demonstrativo do MoveID em ação</p>
              <p className="text-sm text-gray-500 mt-2">Em breve disponível</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Testar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Comece sua primeira análise gratuita agora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/analise" prefetch={false}>
                <Smartphone className="mr-2 h-5 w-5" />
                Começar Análise
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/planos" prefetch={false}>
                Ver Planos Premium
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}