import { FC } from 'react'

import styles from './styles.module.css'

type NextProps = {
  className?: string
}

export const Next: FC<NextProps> = ({
  className
}) => {
  return (
    <svg className={className} width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id={styles.next_mask} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="currentcolor"/>
      </mask>
      <g mask={`url(#${styles.next_mask})`}>
        <circle cx="90" cy="90" r="90" fill="currentcolor"/>
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill={`url(#${styles.next_linear_gradient_1})`} />
        <rect x="115" y="54" width="12" height="72" fill={`url(#${styles.next_linear_gradient_2})`}/>
      </g>
      <defs>
        <linearGradient id={styles.next_linear_gradient_1} x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop className={styles.next_stop} />
          <stop className={styles.next_stop} offset="1" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id={styles.next_linear_gradient_2} x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop className={styles.next_stop} />
          <stop className={styles.next_stop} offset="1" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  )
}
