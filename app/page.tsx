import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto',
        padding: 24,
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      <header style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
        <Image src="/assets/astorcode.png" alt="Astor Code" width={64} height={64} />
        <strong>Astor Code</strong>
      </header>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          alignItems: 'center',
        }}
      >
        <div>
          <Image src="/assets/ZapVitrine.png" alt="ZapVitrine" width={220} height={220} />
          <h1 style={{ fontSize: 40, margin: '16px 0' }}>Crie sua vitrine digital</h1>
          <p style={{ fontSize: 18, opacity: 0.85 }}>Venda pelo WhatsApp, sem comissões.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.zapvitrine.app"
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#1a7f37',
                color: '#fff',
                padding: '12px 18px',
                borderRadius: 10,
                textDecoration: 'none',
              }}
            >
              Baixar na Play Store
            </a>
            <Link
              href="/store/demo"
              style={{
                padding: '12px 18px',
                borderRadius: 10,
                border: '1px solid #ddd',
                textDecoration: 'none',
              }}
            >
              Ver exemplo de vitrine
            </Link>
          </div>
        </div>
        <div>
          <Image src="/assets/logo.png" alt="ZapVitrine banner" width={520} height={360} />
        </div>
      </section>

      <footer style={{ marginTop: 60, opacity: 0.7 }}>
        © {new Date().getFullYear()} Astor Code
      </footer>
    </main>
  )
}
