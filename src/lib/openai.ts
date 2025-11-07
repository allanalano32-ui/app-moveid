import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface ImageAnalysisResult {
  description: string
  movement_analysis?: {
    posture: string
    alignment: string
    recommendations: string[]
  }
  biomechanics?: {
    joint_angles: Record<string, number>
    muscle_activation: string[]
    risk_factors: string[]
  }
  confidence_score: number
}

export async function analyzeMovementImage(imageUrl: string, analysisType: 'movement' | 'posture' | 'biomechanics' = 'movement'): Promise<ImageAnalysisResult> {
  try {
    const prompt = getAnalysisPrompt(analysisType)
    
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt
            },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
                detail: "high"
              }
            }
          ]
        }
      ],
      max_tokens: 1000,
      temperature: 0.3
    })

    const analysis = response.choices[0]?.message?.content
    if (!analysis) {
      throw new Error('Análise não foi gerada')
    }

    // Tentar parsear como JSON, se falhar, usar como texto simples
    try {
      const parsedAnalysis = JSON.parse(analysis)
      return {
        ...parsedAnalysis,
        confidence_score: parsedAnalysis.confidence_score || 0.8
      }
    } catch {
      return {
        description: analysis,
        confidence_score: 0.7
      }
    }
  } catch (error) {
    console.error('Erro na análise de imagem:', error)
    throw new Error('Falha ao analisar a imagem')
  }
}

function getAnalysisPrompt(analysisType: string): string {
  const basePrompt = `Analise esta imagem de movimento humano e forneça uma análise detalhada em português brasileiro. Retorne a resposta em formato JSON com a seguinte estrutura:`

  switch (analysisType) {
    case 'posture':
      return `${basePrompt}
      {
        "description": "Descrição geral da postura observada",
        "movement_analysis": {
          "posture": "Avaliação da postura (boa/regular/ruim)",
          "alignment": "Análise do alinhamento corporal",
          "recommendations": ["recomendação 1", "recomendação 2"]
        },
        "confidence_score": 0.85
      }`

    case 'biomechanics':
      return `${basePrompt}
      {
        "description": "Análise biomecânica do movimento",
        "biomechanics": {
          "joint_angles": {"joelho": 90, "quadril": 45},
          "muscle_activation": ["quadríceps", "glúteos"],
          "risk_factors": ["sobrecarga no joelho", "desequilíbrio muscular"]
        },
        "confidence_score": 0.80
      }`

    default: // movement
      return `${basePrompt}
      {
        "description": "Análise completa do movimento observado",
        "movement_analysis": {
          "posture": "Avaliação da postura durante o movimento",
          "alignment": "Análise do alinhamento e coordenação",
          "recommendations": ["sugestão de melhoria 1", "sugestão de melhoria 2"]
        },
        "confidence_score": 0.85
      }`
  }
}