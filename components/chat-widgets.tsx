"use client"

import { useEffect, useState } from "react"

export default function ChatWidgets() {
  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    // Tawk.to script
    const s1 = document.createElement("script")
    s1.async = true
    s1.src = "https://embed.tawk.to/SEU_ID_AQUI/default"
    s1.charset = "UTF-8"
    s1.setAttribute("crossorigin", "*")
    document.head.appendChild(s1)

    return () => {
      // Cleanup on unmount
      if (document.head.contains(s1)) {
        document.head.removeChild(s1)
      }
    }
  }, [])

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary-dark w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Opções de chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M12 1c-6.627 0-12 4.364-12 9.749 0 3.131 1.817 5.917 4.64 7.7.868 2.167-1.083 4.008-3.142 4.503 2.271.195 6.311-.121 9.374-2.498 7.095.538 13.128-3.997 13.128-9.705 0-5.385-5.373-9.749-12-9.749z" />
        </svg>
      </button>

      {/* Chat options */}
      {showOptions && (
        <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-xl p-4 z-50 w-64 border border-gray-200">
          <h3 className="text-gray-800 font-bold mb-3 text-center">Fale Conosco</h3>

          <a
            href="https://wa.me/5516991486936"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#25D366] w-10 h-10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="text-gray-700">WhatsApp</span>
          </a>

          <button
            onClick={() => {
              // Abrir o chat do Tawk.to
              if (window.Tawk_API) {
                window.Tawk_API.maximize()
              }
              setShowOptions(false)
            }}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
              </svg>
            </div>
            <span className="text-gray-700">Chat Online</span>
          </button>
        </div>
      )}
    </>
  )
}
