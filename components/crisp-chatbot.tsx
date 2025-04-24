"use client"

import { useEffect } from "react"

export default function CrispChatbot() {
  useEffect(() => {
    // Crisp script
    window.$crisp = []
    window.CRISP_WEBSITE_ID = "SEU_WEBSITE_ID_AQUI"

    const script = document.createElement("script")
    script.src = "https://client.crisp.chat/l.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
        delete window.$crisp
        delete window.CRISP_WEBSITE_ID
      }
    }
  }, [])

  return null
}
