'use client'

import { Burger } from '../burger'
import Link from 'next/link'
import styles from './styles.module.css'
import { useState } from 'react'

export const Menu = () => {
  const [open, setOpen] = useState(false)

  const clickHandler = () => setOpen(current => !current)

  return (
    <div className={styles.menu}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={clickHandler} >
          <Burger className={`${styles.burger} ${open ? styles.open : ''}`} open={open} />
        </button>
      </div>
      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        <ul className={styles.links}>
          <li>
            <Link className={styles.link} href='/projects'>Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
