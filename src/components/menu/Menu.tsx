'use client'
import { useEffect, useRef, useState } from 'react'

import { Burger } from '../burger'
import Link from 'next/link'
import styles from './styles.module.css'

export const Menu = () => {
  const [open, setOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        console.log('Menu closed')
        setOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  const clickHandler = () => setOpen(current => !current)

  return (
    <div ref={ref} className={`${styles.menu} ${open ? styles.open : ''}`}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={clickHandler} >
          <Burger className={`${styles.burger} ${open ? styles.open : ''}`} open={open} />
        </button>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <Link className={styles.link} href='/'>Home</Link>
          </li>
          <li>
            <Link className={styles.link} href='/projects'>Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
