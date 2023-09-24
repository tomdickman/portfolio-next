'use client'

import { Burger } from '../burger'
import styles from './styles.module.css'
import { useState } from 'react'

export const Menu = () => {
  const [open, setOpen] = useState(false)

  const clickHandler = () => setOpen(current => !current)

  return (
    <div className={styles.menu}>
      <button className={styles.button} onClick={clickHandler} >
        <Burger className={styles.burger} open={open} />
      </button>
    </div>
  )
}
