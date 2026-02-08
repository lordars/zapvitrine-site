import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Image src="/assets/astorcode.png" alt="Astor Code" width={64} height={64} />
        <strong className={styles.brand}>Astor Code</strong>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <Image
            className={styles.logoMark}
            src="/assets/ZapVitrine.png"
            alt="ZapVitrine"
            width={220}
            height={220}
          />
          <h1>Crie sua vitrine digital</h1>
          <p>Venda pelo WhatsApp, sem comissões.</p>
          <div className={styles.ctaRow}>
            <a
              href="https://play.google.com/store/apps/details?id=com.zapvitrine.app"
              target="_blank"
              rel="noreferrer"
              className={styles.primaryCta}
            >
              Baixar na Play Store
            </a>
            <Link href="/store/demo" className={styles.secondaryCta}>
              Ver exemplo de vitrine
            </Link>
          </div>
        </div>
        <div className={styles.heroArt}>
          <Image
            className={styles.banner}
            src="/assets/logo.png"
            alt="ZapVitrine banner"
            width={520}
            height={360}
          />
        </div>
      </section>

      <footer className={styles.footer}>© {new Date().getFullYear()} Astor Code</footer>
    </main>
  )
}
