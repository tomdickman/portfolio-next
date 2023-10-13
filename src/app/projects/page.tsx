import { EN } from './lang'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

const Projects = () => {
  return (
    <article>
      <h1>Projects</h1>
      <h2 className={styles.project_title}>2022-2023 Target Australia - UI Replatforming</h2>
      <h3 className={styles.project_position}>Senior Software Engineer</h3>
      <div className={styles.project_description}>
        <ul className={styles.project_description_list}>
          <li>Creation of brand new Target Design System designed for performance (not built on pre-existing framework)</li>
          <li>Implementation of a NextJS frontend focussed on performance and Search Engine Optimisation (SEO)</li>
          <li>Rollout of new platform alongside existing legacy platform to allow for staggered release and feature development</li>
          <li>Assist in implementation of zero downtime feature rollout and A/B testing</li>
          <li>Add accessibility features and automated A11Y testing to Target UI platform</li>
        </ul>
        <div className={styles.image_container}>
          <Link href={'https://www.target.com.au/'} title={EN.TARGET_LINK}>
            <Image style={{ width: '100%', height: 'auto' }} height={400} width={600} src={'/images/target.webp'} alt={EN.TARGET_IMAGE_ALT} />
          </Link>
        </div>
      </div>
      <h2 className={styles.project_title}>2021-2022 Iress - Transactions Hub Micro Frontend</h2>
      <h3 className={styles.project_position}>Software Engineer</h3>
      <div className={styles.project_description}>
        <ul className={styles.project_description_list}>
          <li>Replacement of monolith platform page with a micro frontend</li>
          <li>Development of Backend for Frontend (BFF) to abstract API calls</li>
          <li>Implementation of AG Grid for data display and management in UI</li>
          <li>Mounting of micro frontend in web component to prevent style conflicts</li>
          <li>Development of user session state management between monolith and micro frontend via a pub/sub model and event driven data</li>
          <li>First project to use and ratify <a href='https://iress-design-system.aws-demo-production-au.iress.online/?path=/story/introduction-iress-design-system--page'>Iress Design System</a></li>
        </ul>
      </div>
      <div className={styles.image_container}>
        <Link href={'https://www.iress.com/'} title={EN.IRESS}>
          <Image style={{ width: '100%', height: 'auto' }} height={400} width={600} src={'/images/xplan.webp'} alt={EN.XPLAN_THUB_IMAGE_ALT} />
        </Link>
      </div>
      <h2 className={styles.project_title}>2020-2021 Catalyst IT</h2>
      <h3 className={styles.project_position}>Web Developer / Software Engineer</h3>
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
