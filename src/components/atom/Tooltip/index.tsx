import { useEffect, useState, type FC } from 'react'

import type { TTooltipProps } from './types'
import styles from './Tooltip.module.scss'
import classNames from 'classnames'

const Tooltip: FC<TTooltipProps> = ({ children, content, className, showFromStart }) => {
  const [visible, setVisible] = useState(false)

  const mouseEnterHandler = () => setVisible(true)
  const mouseLeaveHandler = () => setVisible(false)

  useEffect(() => {
    if (showFromStart) {
      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, 2300)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={classNames(className, styles.wrapper)}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {children}
      <p className={classNames(styles.wrapper__content, { [styles.wrapper__content__visible]: visible })}>{content}</p>
    </div>
  )
}

export default Tooltip
