export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          MoveID - Funcionando! 🎉
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Seu aplicativo está rodando perfeitamente
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-green-600 font-semibold">
            ✅ Next.js configurado
          </p>
          <p className="text-green-600 font-semibold">
            ✅ Tailwind CSS funcionando
          </p>
          <p className="text-green-600 font-semibold">
            ✅ Projeto pronto para desenvolvimento
          </p>
        </div>
      </div>
    </div>
  )
}