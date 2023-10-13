import { Github, LinkedIn, Mail, X } from '@/components/icons'
import { EN } from './lang'
import styles from './styles.module.css'

const Contact = () => {
  return (
    <article>
      <h1>Contact</h1>
      <a className={styles.link} href='mailto:twdickman@gmail.com' title={EN.EMAIL}>
        <Mail className={styles.icon} />
        <span className={styles.handle}>twdickman@gmail.com</span>
      </a>
      <a className={styles.link} href='https://github.com/tomdickman' title={EN.GITHUB}>
        <Github className={styles.icon} />
        <span className={styles.handle}>tomdickman</span>
      </a>
      <a className={styles.link} href='https://www.linkedin.com/in/twdickman/' title={EN.LINKEDIN}>
        <LinkedIn className={styles.icon} />
        <span className={styles.handle}>Tom Dickman</span>
      </a>
      <a className={styles.link} href='https://twitter.com/tomwdickman' title={EN.X}>
        <X className={styles.icon} />
        <span className={styles.handle}>@tomwdickman</span>
      </a>
    </article>
  )
}

export default Contact
