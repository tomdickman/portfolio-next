import { Projects } from '@/components/lists/projects/Projects'

import styles from './styles.module.css'

const ProjectsPage = () => {
  return (
    <article>
      <h1>Projects</h1>
      <Projects />
      <div className={styles.spacer} />
    </article>
  )
}

export default ProjectsPage
