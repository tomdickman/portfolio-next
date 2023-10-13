'use client'

import styles from "./styles.module.css"

export type BurgerProps = {
	className?: string
	open?: boolean
}

export const Burger = ({
  className = '',
  open = false
}) => {
  return (
    <svg
      viewBox="0 0 10 10"
      className={`${className} ${styles.burgerMenuIcon} ${open ? styles.open : ""}`}
    >
      <line
        className={styles.burgerMenuIconTop}
        fill="none"
        x1="1"
        y1="3"
        x2="9"
        y2="3"
        stroke="currentcolor"
      />
      <line
        className={styles.burgerMenuIconMiddle}
        fill="none"
        x1="1"
        y1="5"
        x2="9"
        y2="5"
        stroke="currentcolor"
      />
      <line
        className={styles.burgerMenuIconBottom}
        fill="none"
        x1="1"
        y1="7"
        x2="9"
        y2="7"
        stroke="currentcolor"
      />
    </svg>
  )
}
