"use client"

import { useEffect } from "react"

export default function BotpressChatbot() {
  useEffect(() => {
    // Botpress script
    const script = document.createElement("script")
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js"
    script.async = true
    document.body.appendChild(script)

    // Botpress config
    script.onload = () => {
      window.botpressWebChat.init({
        botId: "SEU_BOT_ID_AQUI",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "SEU_CLIENT_ID_AQUI",
        webhookId: "SEU_WEBHOOK_ID_AQUI",
        lazySocket: true,
        themeName: "prism",
        frontendVersion: "v1",
        showPoweredBy: false,
        theme: "light",
        themeColor: "#ff3a3a",
      })
    }

    return () => {
      // Cleanup on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      // Remove botpress webchat if it exists
      const botpressWebchat = document.getElementById("bp-web-widget-container")
      if (botpressWebchat) {
        botpressWebchat.remove()
      }
    }
  }, [])

  return null
}
