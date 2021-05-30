import React from 'react'
import styles from './styles.module.css'

type Props = {
  title: string
  options: string[]
}

const TLayerOptions = ({ title, options }: Props) => (
  <div className={styles.layerOptions}>
    <h2>{title}</h2>
    {options.map(option => (
      <h5 key={`option-${title}-${option}`}>{option}</h5>
    ))}
  </div>
)

export default TLayerOptions
