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
          I am a full-stack software engineer, focussed on delivering simple, fast and efficient cloud based web applications and software solutions.
        </p>
        <p className={styles.text}>
          If you want to improve your speed up your web application, increase user retention rate, improve accessibility, or simply build an easy to maintain application, contact me.
        </p>
      </div>
    </div>
  )
}
