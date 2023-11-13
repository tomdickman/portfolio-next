import { EN } from './lang'
import Image from 'next/image'
import { Item } from './Item'
import Link from 'next/link'

import styles from './styles.module.css'

export const Projects = () => {
  return (
    <>
      <h2 className={styles.project_title}>Target Australia - UI Replatforming</h2>
      <h3 className={styles.project_position}>Senior Software Engineer</h3>
      <div className={styles.project_description}>
        <ul className={styles.project_description_list}>
          <Item>Creation of brand new Target Design System designed for performance (not built on pre-existing framework)</Item>
          <Item>Implementation of a NextJS frontend focussed on performance and Search Engine Optimisation (SEO)</Item>
          <Item>Rollout of new platform alongside existing legacy platform to allow for staggered release and feature development</Item>
          <Item>Assist in implementation of zero downtime feature rollout and A/B testing</Item>
          <Item>Add accessibility features and automated A11Y testing to Target UI platform</Item>
        </ul>
        <div className={styles.image_container}>
          <Link href={'https://www.target.com.au/'} title={EN.TARGET_LINK}>
            <Image style={{ width: '100%', height: 'auto' }} height={400} width={600} src={'/images/target.webp'} alt={EN.TARGET_IMAGE_ALT} />
          </Link>
        </div>
      </div>
      <h2 className={styles.project_title}>Iress - Transactions Hub Micro Frontend</h2>
      <h3 className={styles.project_position}>Software Engineer</h3>
      <div className={styles.project_description}>
        <ul className={styles.project_description_list}>
          <Item>Replacement of monolith platform page with a micro frontend</Item>
          <Item>Development of Backend for Frontend (BFF) to abstract API calls</Item>
          <Item>Implementation of AG Grid for data display and management in UI</Item>
          <Item>Mounting of micro frontend in web component to prevent style conflicts</Item>
          <Item>Development of user session state management between monolith and micro frontend via a pub/sub model and event driven data</Item>
          <Item>First project to use and ratify <a href='https://iress-design-system.aws-demo-production-au.iress.online/?path=/story/introduction-iress-design-system--page'>Iress Design System</a></Item>
        </ul>
      </div>
      <div className={styles.image_container}>
        <Link href={'https://www.iress.com/'} title={EN.IRESS}>
          <Image
            style={{ width: '100%', height: 'auto' }}
            height={400}
            width={600}
            src={'/images/xplan.webp'}
            alt={EN.XPLAN_THUB_IMAGE_ALT}
          />
        </Link>
      </div>
      <h2 className={styles.project_title}>Catalyst IT</h2>
      <h3 className={styles.project_position}>Web Developer / Software Engineer</h3>
      <div className={styles.project_description}>
        <ul className={styles.project_description_list}>
          <Item>Developed an open-source plugin for extracting metadata from existing resources in the Moodle LMS (Learning Management System), along with subplugins for extracting different metadata using Apache Tika and an open source readability API.</Item>
          <Item>Amended the Moodle license API and added the ability to create custom licenses in Moodle.</Item>
          <Item>Added pagination options to the Moodle dashboard for improved usability</Item>
          <Item>Contributed performance improvements to reduce class loading times by around 80%</Item>
        </ul>
      </div>
    </>
  )
}
