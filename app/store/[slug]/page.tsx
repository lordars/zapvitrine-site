'use client'

import { useEffect } from 'react'

export default function StorePage({ params }: { params: { slug: string } }) {
  useEffect(() => {
    const t = setTimeout(() => {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.zapvitrine.app'
    }, 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <main style={{ fontFamily: 'system-ui', padding: 24, textAlign: 'center' }}>
      <h1>Abrindo vitrine…</h1>
      <p>Se o app não abrir automaticamente, você será redirecionado para a Play Store.</p>
    </main>
  )
}
