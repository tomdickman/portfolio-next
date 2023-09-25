import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.header}>
          <h1 className={styles.title}>TOM DICKMAN</h1>
          <h2 className={styles.subtitle}>Software engineer</h2>
        </div>
        <p className={styles.text}>
          I build lightning fast cloud based web applications and software solutions.
        </p>
      </div>
    </div>
  )
}
