import jsPDF from 'jspdf'

interface AnalysisData {
  overall_score: number
  movement_type: string
  date: string
  duration: string
  frames_analyzed: number
  joints_tracked: number
  confidence: number
  biomechanical_metrics: {
    knee_angle_max: number
    hip_angle_max: number
    ankle_dorsiflexion: number
    trunk_lean: number
    knee_valgus: number
    weight_distribution: string
  }
  phase_analysis: Array<{
    phase: string
    score: number
    duration: string
    notes: string
  }>
  recommendations: Array<{
    type: string
    title: string
    description: string
    impact: string
  }>
  clothing_recommendations: string[]
  recording_tips: string[]
}

export class PDFReportGenerator {
  private doc: jsPDF
  private pageHeight: number
  private currentY: number
  private margin: number

  constructor() {
    this.doc = new jsPDF()
    this.pageHeight = this.doc.internal.pageSize.height
    this.currentY = 20
    this.margin = 20
  }

  private checkPageBreak(neededHeight: number = 20) {
    if (this.currentY + neededHeight > this.pageHeight - 20) {
      this.doc.addPage()
      this.currentY = 20
    }
  }

  private addTitle(text: string, fontSize: number = 16) {
    this.checkPageBreak(30)
    this.doc.setFontSize(fontSize)
    this.doc.setFont('helvetica', 'bold')
    this.doc.text(text, this.margin, this.currentY)
    this.currentY += fontSize + 5
  }

  private addSubtitle(text: string, fontSize: number = 12) {
    this.checkPageBreak(20)
    this.doc.setFontSize(fontSize)
    this.doc.setFont('helvetica', 'bold')
    this.doc.text(text, this.margin, this.currentY)
    this.currentY += fontSize + 3
  }

  private addText(text: string, fontSize: number = 10) {
    this.checkPageBreak(15)
    this.doc.setFontSize(fontSize)
    this.doc.setFont('helvetica', 'normal')
    
    // Quebra de linha automática
    const lines = this.doc.splitTextToSize(text, 170)
    this.doc.text(lines, this.margin, this.currentY)
    this.currentY += lines.length * (fontSize * 0.5) + 5
  }

  private addBulletPoint(text: string, fontSize: number = 10) {
    this.checkPageBreak(15)
    this.doc.setFontSize(fontSize)
    this.doc.setFont('helvetica', 'normal')
    
    const lines = this.doc.splitTextToSize(text, 160)
    this.doc.text('•', this.margin, this.currentY)
    this.doc.text(lines, this.margin + 10, this.currentY)
    this.currentY += lines.length * (fontSize * 0.5) + 3
  }

  private addMetricBox(label: string, value: string, color: string = 'black') {
    this.checkPageBreak(25)
    
    // Desenha retângulo
    this.doc.setDrawColor(200, 200, 200)
    this.doc.rect(this.margin, this.currentY - 5, 80, 20)
    
    // Label
    this.doc.setFontSize(9)
    this.doc.setFont('helvetica', 'normal')
    this.doc.text(label, this.margin + 5, this.currentY + 2)
    
    // Value
    this.doc.setFontSize(14)
    this.doc.setFont('helvetica', 'bold')
    this.doc.text(value, this.margin + 5, this.currentY + 12)
    
    this.currentY += 25
  }

  private addSeparator() {
    this.checkPageBreak(10)
    this.doc.setDrawColor(200, 200, 200)
    this.doc.line(this.margin, this.currentY, 190, this.currentY)
    this.currentY += 10
  }

  generateReport(data: AnalysisData): jsPDF {
    // Cabeçalho
    this.doc.setFontSize(20)
    this.doc.setFont('helvetica', 'bold')
    this.doc.text('MoveID - Relatório de Análise Biomecânica', this.margin, this.currentY)
    this.currentY += 30

    // Informações básicas
    this.addText(`Movimento Analisado: ${data.movement_type}`)
    this.addText(`Data da Análise: ${new Date(data.date).toLocaleDateString('pt-BR')}`)
    this.addText(`Duração do Vídeo: ${data.duration}`)
    this.addText(`Frames Analisados: ${data.frames_analyzed}`)
    this.addText(`Articulações Rastreadas: ${data.joints_tracked}`)
    this.currentY += 10

    // Pontuação geral
    this.addSeparator()
    this.addTitle('PONTUAÇÃO GERAL', 18)
    
    // Caixa de pontuação
    this.doc.setFillColor(240, 248, 255)
    this.doc.rect(this.margin, this.currentY - 5, 170, 30, 'F')
    this.doc.setFontSize(24)
    this.doc.setFont('helvetica', 'bold')
    this.doc.text(`${data.overall_score}/100`, this.margin + 10, this.currentY + 15)
    this.doc.setFontSize(12)
    this.doc.text(`Confiança da IA: ${data.confidence}%`, this.margin + 80, this.currentY + 15)
    this.currentY += 40

    // Métricas biomecânicas
    this.addSeparator()
    this.addTitle('ANÁLISE BIOMECÂNICA DETALHADA')
    
    this.addSubtitle('Ângulos Articulares:')
    this.addText(`• Flexão Máxima do Joelho: ${data.biomechanical_metrics.knee_angle_max}°`)
    this.addText(`• Flexão Máxima do Quadril: ${data.biomechanical_metrics.hip_angle_max}°`)
    this.addText(`• Dorsiflexão do Tornozelo: ${data.biomechanical_metrics.ankle_dorsiflexion}°`)
    
    this.addSubtitle('Padrões de Movimento:')
    this.addText(`• Inclinação do Tronco: ${data.biomechanical_metrics.trunk_lean}°`)
    this.addText(`• Valgo do Joelho: ${data.biomechanical_metrics.knee_valgus}°`)
    this.addText(`• Distribuição de Peso: ${data.biomechanical_metrics.weight_distribution}`)

    // Análise por fases
    this.addSeparator()
    this.addTitle('ANÁLISE POR FASES DO MOVIMENTO')
    
    data.phase_analysis.forEach(phase => {
      this.addSubtitle(`${phase.phase} (${phase.duration})`)
      this.addText(`Pontuação: ${phase.score}/100`)
      this.addText(`Observações: ${phase.notes}`)
      this.currentY += 5
    })

    // Recomendações
    this.addSeparator()
    this.addTitle('RECOMENDAÇÕES PERSONALIZADAS')
    
    data.recommendations.forEach(rec => {
      this.addSubtitle(`${rec.title} (Impacto: ${rec.impact})`)
      this.addText(rec.description)
      this.currentY += 3
    })

    // Guia de vestimenta
    this.addSeparator()
    this.addTitle('GUIA DE VESTIMENTA PARA MELHOR ANÁLISE')
    
    this.addSubtitle('Recomendações:')
    data.clothing_recommendations.forEach(tip => {
      this.addBulletPoint(tip)
    })

    this.addSubtitle('Evitar:')
    this.addBulletPoint('Roupas muito largas ou baggy')
    this.addBulletPoint('Estampas muito chamativas ou listras')
    this.addBulletPoint('Cores que se confundem com o fundo')
    this.addBulletPoint('Acessórios que balançam (brincos grandes, colares)')

    // Guia de gravação
    this.addSeparator()
    this.addTitle('GUIA DE GRAVAÇÃO PARA MÁXIMA PRECISÃO')
    
    data.recording_tips.forEach(tip => {
      this.addBulletPoint(tip)
    })

    // Especificações técnicas
    this.addSeparator()
    this.addSubtitle('Especificações Técnicas Recomendadas:')
    this.addBulletPoint('Distância da câmera: 2-3 metros')
    this.addBulletPoint('Taxa de quadros: mínimo 30fps')
    this.addBulletPoint('Resolução: 1080p ou superior')
    this.addBulletPoint('Iluminação: natural ou artificial uniforme')

    // Interpretação profissional
    this.addSeparator()
    this.addTitle('INTERPRETAÇÃO PROFISSIONAL')
    
    this.addText(`Os ângulos articulares analisados estão ${data.overall_score >= 80 ? 'dentro dos parâmetros normais' : 'com alguns desvios que requerem atenção'} para o movimento de ${data.movement_type.toLowerCase()}.`)
    
    if (data.biomechanical_metrics.knee_angle_max >= 120) {
      this.addText('A flexão do joelho demonstra boa amplitude de movimento e profundidade adequada.')
    }
    
    if (data.biomechanical_metrics.knee_valgus <= 5) {
      this.addText('O controle neuromuscular está excelente, com mínimo valgo do joelho.')
    }
    
    this.addText(`A confiança da análise de ${data.confidence}% indica alta precisão na detecção dos pontos anatômicos e cálculo dos ângulos articulares.`)

    // Rodapé
    this.addSeparator()
    this.doc.setFontSize(8)
    this.doc.setFont('helvetica', 'normal')
    this.doc.text('Relatório gerado automaticamente pelo MoveID - Análise Biomecânica com IA', this.margin, this.pageHeight - 10)
    this.doc.text(`Gerado em: ${new Date().toLocaleString('pt-BR')}`, this.margin, this.pageHeight - 5)

    return this.doc
  }
}

export const generatePDFReport = (data: AnalysisData): void => {
  const generator = new PDFReportGenerator()
  const pdf = generator.generateReport(data)
  pdf.save(`relatorio-moveid-${data.date}-${data.movement_type.toLowerCase().replace(' ', '-')}.pdf`)
}