import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, X, Smartphone, BarChart3, FileText, Zap } from 'lucide-react'

export default function Planos() {
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
          <Link href="/planos" className="text-blue-600 font-semibold">
            Planos
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">
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
          Planos Flexíveis
        </Badge>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Escolha o Plano Ideal para Você
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Comece gratuitamente e evolua com análises ilimitadas e relatórios detalhados.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-2xl">Gratuito</CardTitle>
              <CardDescription className="text-lg">
                <span className="text-3xl font-bold">R$ 0</span>/mês
              </CardDescription>
              <Badge variant="outline" className="w-fit">Perfeito para começar</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <span>3 análises por semana</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <span>Feedback básico com IA</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <span>Histórico de análises</span>
                </li>
                <li className="flex items-center">
                  <X className="h-5 w-5 text-red-600 mr-2" />
                  <span className="text-gray-500">Sem exportação de PDF</span>
                </li>
                <li className="flex items-center">
                  <X className="h-5 w-5 text-red-600 mr-2" />
                  <span className="text-gray-500">Sem gráficos avançados</span>
                </li>
                <li className="flex items-center">
                  <X className="h-5 w-5 text-red-600 mr-2" />
                  <span className="text-gray-500">Sem comparativos</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/app">Começar Grátis</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-blue-500 border-2">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-600">Mais Popular</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Premium</CardTitle>
              <CardDescription className="text-lg">
                <span className="text-3xl font-bold">R$ 19,90</span>/mês
              </CardDescription>
              <Badge variant="outline" className="w-fit">Análises ilimitadas</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <span>Análises ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <span>Feedback avançado com IA</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <span>Histórico completo</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <span>Exportação de PDF</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <span>Gráficos e comparativos</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/checkout">Assinar Premium</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Compare os Planos
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6">Funcionalidades</th>
                  <th className="text-center py-4 px-6">Gratuito</th>
                  <th className="text-center py-4 px-6">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6">Análises por semana</td>
                  <td className="text-center py-4 px-6">3</td>
                  <td className="text-center py-4 px-6">Ilimitadas</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Feedback com IA</td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Histórico de análises</td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Exportar PDF</td>
                  <td className="text-center py-4 px-6"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Gráficos avançados</td>
                  <td className="text-center py-4 px-6"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Comparativos de evolução</td>
                  <td className="text-center py-4 px-6"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Suporte</td>
                  <td className="text-center py-4 px-6">Básico</td>
                  <td className="text-center py-4 px-6">Prioritário</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ainda tem dúvidas?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Teste gratuitamente e veja a diferença que o MoveID faz nos seus treinos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/faq">Ver FAQ</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/contato">Falar com Suporte</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}