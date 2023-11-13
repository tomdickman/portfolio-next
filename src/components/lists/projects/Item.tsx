import { FC, ReactNode } from 'react'
import { SquareCheck } from '@/components/icons/SquareCheck'

import styles from './styles.module.css'

type ItemProps = {
  children: ReactNode
}

export const Item: FC<ItemProps> = ({ children }) => {
  return (
    <li className={styles.list_item}>
      <SquareCheck className={styles.list_item_bullet} />
      <div>
        {children}
      </div>
    </li>
  )
}
