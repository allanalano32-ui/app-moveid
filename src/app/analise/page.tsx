'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Upload, Video, Camera, Play, CheckCircle, AlertCircle } from 'lucide-react'

export default function Analise() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<any>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleAnalysis = async () => {
    if (!selectedFile) return

    setIsAnalyzing(true)

    // Simular análise (em produção, isso seria feito com TensorFlow.js)
    setTimeout(() => {
      const mockResult = {
        score: 78,
        feedback: [
          "Excelente alinhamento dos joelhos durante o movimento",
          "Considere aumentar a profundidade do agachamento",
          "Mantenha os pés paralelos durante toda a execução"
        ],
        metrics: {
          kneeAngle: 85,
          hipAngle: 92,
          trunkAngle: 78
        }
      }

      setAnalysisResult(mockResult)
      setAnalysisComplete(true)
      setIsAnalyzing(false)
    }, 3000)
  }

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
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
            Dashboard
          </Link>
          <Link href="/historico" className="text-gray-600 hover:text-blue-600 transition-colors">
            Histórico
          </Link>
          <Link href="/planos" className="text-gray-600 hover:text-blue-600 transition-colors">
            Planos
          </Link>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {!analysisComplete ? (
            <>
              {/* Upload Section */}
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Análise Biomecânica
                </Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  Analise seu Movimento
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Faça upload de um vídeo ou grave diretamente no navegador para receber feedback instantâneo.
                </p>
              </div>

              {/* Upload Options */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="text-center">
                  <CardHeader>
                    <Upload className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Fazer Upload</CardTitle>
                    <CardDescription>
                      Envie um vídeo existente do seu dispositivo
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="video-upload"
                    />
                    <label htmlFor="video-upload">
                      <Button variant="outline" className="w-full" asChild>
                        <span className="cursor-pointer">
                          <Video className="mr-2 h-4 w-4" />
                          Selecionar Vídeo
                        </span>
                      </Button>
                    </label>
                    {selectedFile && (
                      <p className="text-sm text-gray-600 mt-2">
                        Arquivo selecionado: {selectedFile.name}
                      </p>
                    )}
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Camera className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <CardTitle>Gravar Vídeo</CardTitle>
                    <CardDescription>
                      Use a câmera do navegador para gravar
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <Camera className="mr-2 h-4 w-4" />
                      Abrir Câmera
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      Recomendado para melhor qualidade
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Analysis Button */}
              {selectedFile && !isAnalyzing && (
                <div className="text-center">
                  <Button
                    size="lg"
                    onClick={handleAnalysis}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Iniciar Análise
                  </Button>
                </div>
              )}

              {/* Analyzing State */}
              {isAnalyzing && (
                <Card className="text-center">
                  <CardContent className="py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold mb-2">Analisando seu movimento...</h3>
                    <p className="text-gray-600 mb-4">
                      Nossa IA está processando o vídeo e calculando as métricas biomecânicas.
                    </p>
                    <Progress value={66} className="max-w-xs mx-auto" />
                    <p className="text-sm text-gray-500 mt-2">Tempo estimado: 5-10 segundos</p>
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            /* Results Section */
            <div className="space-y-8">
              <div className="text-center">
                <Badge variant="secondary" className="mb-4">
                  Análise Completa
                </Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  Resultado da Análise
                </h1>
              </div>

              {/* Score Card */}
              <Card className="text-center">
                <CardContent className="py-12">
                  <div className="text-6xl font-bold text-blue-600 mb-4">
                    {analysisResult.score}
                  </div>
                  <div className="text-xl text-gray-600 mb-2">Sua Nota</div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {analysisResult.score >= 80 ? 'Excelente' : analysisResult.score >= 60 ? 'Bom' : 'Precisa Melhorar'}
                  </Badge>
                </CardContent>
              </Card>

              {/* Feedback */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                    Feedback e Dicas
                  </CardTitle>
                  <CardDescription>
                    Sugestões personalizadas para melhorar sua técnica
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {analysisResult.feedback.map((tip: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Métricas Biomecânicas</CardTitle>
                  <CardDescription>
                    Detalhes técnicos da sua execução
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {analysisResult.metrics.kneeAngle}°
                      </div>
                      <div className="text-sm text-gray-600">Ângulo do Joelho</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {analysisResult.metrics.hipAngle}°
                      </div>
                      <div className="text-sm text-gray-600">Ângulo do Quadril</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {analysisResult.metrics.trunkAngle}°
                      </div>
                      <div className="text-sm text-gray-600">Ângulo do Tronco</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" asChild>
                  <Link href="/dashboard">
                    Voltar ao Dashboard
                  </Link>
                </Button>
                <Button size="lg" asChild>
                  <Link href="/relatorios">
                    Gerar Relatório PDF
                  </Link>
                </Button>
                <Button size="lg" variant="outline" onClick={() => {
                  setSelectedFile(null)
                  setAnalysisComplete(false)
                  setAnalysisResult(null)
                }}>
                  Nova Análise
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}