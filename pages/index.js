import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Universal Variable - The Most Global Variable</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Universal Variable.com!
        </h1>
      </main>
    </div>
  )
}
