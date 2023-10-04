import styles from './styles.module.css'

const Projects = () => {
  return (
    <article>
      <h1>Projects</h1>
      <h2 className={styles.project_title}>2022-2023 Target Australia - UI Replatforming</h2>
      <div className={styles.project_description}>
        <ul className={styles.project_description_list}>
          <li>Creation of brand new Target Design System designed for performance (not built on pre-existing framework)</li>
          <li>Implementation of a NextJS frontend focussed on performance</li>
          <li>Rollout of new platform alongside existing legacy platform to allow for staggered release and feature development</li>
          <li>Zero downtime rollout and A/B testing</li>
          <li>Add accessibility to Target website platform</li>
        </ul>
      </div>
      <h2 className={styles.project_title}>2021-2022 Iress - Transactions Hub Micro Frontend</h2>
      <div className={styles.project_description}>
        <ul className={styles.project_description_list}>
          <li>Replacement of monolith platform page with a micro frontend</li>
          <li>Development of Backend for Frontend (BFF) to abstract API calls</li>
          <li>Mounting of micro frontend in web component to prevent style conflicts</li>
          <li>Development of user session state management between monolith and micro frontend</li>
          <li>First project to use and ratify Iress Design System</li>
        </ul>
      </div>
      <h2 className={styles.project_title}>2020-2021 Catalyst IT</h2>
      <div className={styles.project_description}>
        <ul className={styles.project_description_list}>
          <li>Developed an open-source plugin for extracting metadata from existing resources in the Moodle LMS (Learning Management System), along with subplugins for extracting different metadata using Apache Tika and an open source readability API.</li>
          <li>Amended the Moodle license API and added the ability to create custom licenses in Moodle.</li>
          <li>Added pagination options to the Moodle dashboard for improved usability</li>
          <li>Contributed performance improvements to reduce class loading times by around 80%</li>
        </ul>
      </div>
    </article>
  )
}

export default Projects
