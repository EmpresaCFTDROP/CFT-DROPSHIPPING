"use client"

import { useEffect } from "react"

export default function TawkChatbot() {
  useEffect(() => {
    // Tawk.to script
    const s1 = document.createElement("script")
    s1.async = true
    s1.src = "https://embed.tawk.to/680a7d4876fc72191422321b/1ipkfiouu"
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

  return null
}
