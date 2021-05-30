import React from 'react'
import Head from 'next/head'
import styles from './styles.module.css'

const THead = () => (
  <div className={styles.head}>
    <Head>
      <title>Training Buddy</title>
    </Head>
    <h1>Training Buddy</h1>
    <h3>Início</h3>
    <h3>Configurações</h3>
  </div>
)

export default THead
