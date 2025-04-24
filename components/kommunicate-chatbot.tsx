"use client"

import { useEffect } from "react"

export default function KommunicateChatbot() {
  useEffect(() => {
    // Kommunicate script
    ;((d, m) => {
      var kommunicateSettings = {
        appId: "SEU_APP_ID_AQUI",
        popupWidget: true,
        automaticChatOpenOnNavigation: false,
        primaryColor: "#ff3a3a",
      }
      var s = document.createElement("script")
      s.type = "text/javascript"
      s.async = true
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app"
      var h = document.getElementsByTagName("head")[0]
      h.appendChild(s)
      window.kommunicate = m
      m._globals = kommunicateSettings
    })(document, window.kommunicate || {})

    return () => {
      // Cleanup on unmount
      const kommunicateScript = document.querySelector('script[src="https://widget.kommunicate.io/v2/kommunicate.app"]')
      if (kommunicateScript) {
        kommunicateScript.remove()
      }
      // Remove kommunicate widget if it exists
      const kommunicateWidget = document.getElementById("kommunicate-widget-iframe")
      if (kommunicateWidget) {
        kommunicateWidget.remove()
      }
    }
  }, [])

  return null
}
