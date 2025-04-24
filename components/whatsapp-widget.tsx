"use client"

import { useState } from "react"

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "5516991486936" // Seu número com código do país e DDD
  const welcomeMessage = "Olá! Estou interessado em saber mais sobre a CFT DROP."

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 w-72 animate-fade-in">
          <div className="bg-[#075E54] text-white p-3 rounded-t-lg">
            <h3 className="font-bold">CFT DROP</h3>
            <p className="text-xs">Responde normalmente em 1 hora</p>
          </div>

          <div className="bg-[#E5DDD5] p-3 h-60 overflow-y-auto">
            <div className="bg-white p-2 rounded-lg shadow-sm mb-2 max-w-[80%]">
              <p className="text-sm">Olá! Como posso ajudar você hoje?</p>
              <p className="text-[10px] text-gray-500 text-right">10:00</p>
            </div>

            <div className="bg-[#DCF8C6] p-2 rounded-lg shadow-sm mb-2 max-w-[80%] ml-auto">
              <p className="text-sm">Estou interessado em saber mais sobre dropshipping.</p>
              <p className="text-[10px] text-gray-500 text-right">10:01</p>
            </div>

            <div className="bg-white p-2 rounded-lg shadow-sm max-w-[80%]">
              <p className="text-sm">
                Claro! A CFT DROP é uma plataforma de dropshipping de calçados sem taxa de adesão ou mensalidade. Clique
                no botão abaixo para conversar diretamente conosco.
              </p>
              <p className="text-[10px] text-gray-500 text-right">10:02</p>
            </div>
          </div>

          <div className="p-3 border-t">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(welcomeMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2 px-4 rounded-full w-full block text-center"
            >
              Iniciar Conversa
            </a>
          </div>

          <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#128C7E] w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Chat no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
