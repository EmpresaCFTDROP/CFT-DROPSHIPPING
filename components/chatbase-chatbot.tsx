"use client"

import { useEffect } from "react"

export default function ChatbaseChatbot() {
  useEffect(() => {
    // Chatbase script
    const script = document.createElement("script")
    script.src = "https://www.chatbase.co/embed.min.js"
    script.defer = true
    script.chatbotId = "SEU_CHATBOT_ID_AQUI"
    script.domain = "www.chatbase.co"
    document.head.appendChild(script)

    return () => {
      // Cleanup on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      // Remove chatbase widget if it exists
      const chatbaseWidget = document.querySelector(".chatbase-bubble")
      if (chatbaseWidget) {
        chatbaseWidget.remove()
      }
    }
  }, [])

  return null
}
