import { Github, LinkedIn, Mail, X } from '@/components/icons'
import styles from './styles.module.css'

const Contact = () => {
  return (
    <article>
      <h1>Skills</h1>
      <p>I am a full-stack senior software engineer experienced across multiple languages, frontend frameworks, and backend stacks.</p>
      <p>As an experienced consultant having worked across multiple organisations and open source projects, I also have skills and knowledge around continuous integration/deployment, DevOps and cloud architecture.</p>
      <p>These skills include:</p>
      <ul className={styles.wordcloud}>
        <li className={styles.wordcloud_word}>React</li>
        <li className={styles.wordcloud_word}>TypeScript</li>
        <li className={styles.wordcloud_word}>NextJS</li>
        <li className={styles.wordcloud_word}>NodeJS</li>
        <li className={styles.wordcloud_word}>NestJS</li>
        <li className={styles.wordcloud_word}>GraphQL</li>
        <li className={styles.wordcloud_word}>Python</li>
        <li className={styles.wordcloud_word}>Terraform</li>
        <li className={styles.wordcloud_word}>Serverless</li>
        <li className={styles.wordcloud_word}>AWS</li>
        <li className={styles.wordcloud_word}>Vercel</li>
        <li className={styles.wordcloud_word}>Docker</li>
        <li className={styles.wordcloud_word}>Kubernetes</li>
        <li className={styles.wordcloud_word}>Git</li>
        <li className={styles.wordcloud_word}>nx</li>
        <li className={styles.wordcloud_word}>Turborepo</li>
        <li className={styles.wordcloud_word}>Turbopack</li>
        <li className={styles.wordcloud_word}>Webpack</li>
        <li className={styles.wordcloud_word}>Rollup</li>
        <li className={styles.wordcloud_word}>Storybook</li>
        <li className={styles.wordcloud_word}>Jest</li>
        <li className={styles.wordcloud_word}>Cypress</li>
        <li className={styles.wordcloud_word}>Puppeteer</li>
        <li className={styles.wordcloud_word}>Playwright</li>
        <li className={styles.wordcloud_word}>pnpm</li>
        <li className={styles.wordcloud_word}>yarn</li>
        <li className={styles.wordcloud_word}>Buildkite</li>
        <li className={styles.wordcloud_word}>Travis</li>
        <li className={styles.wordcloud_word}>Pactflow</li>
      </ul>
    </article>
  )
}

export default Contact
