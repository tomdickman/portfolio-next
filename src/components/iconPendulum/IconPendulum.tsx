import { AWS, CSS, Docker, Github, HTML, Next, Node, Python, React, TypeScript } from '../icons'
import styles from './styles.module.css'

export const IconPendulum = () => {

  return (
    <div className={styles.container}>
      <div className={styles.pendulum_container}>
        <div className={styles.pendulum}>
          <Next className={styles.icon} />
          <Node className={styles.icon} />
          <React className={styles.icon} />
          <TypeScript className={styles.icon} />
          <Docker className={styles.icon} />
          <HTML className={styles.icon} />
          <AWS className={styles.icon} />
          <CSS className={styles.icon} />
          <Github className={styles.icon} />
          <Python className={styles.icon} />
        </div>
      </div>
    </div>
  )}
