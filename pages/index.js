import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Photography Portfolio</title>
      </Head>
      <main>
        <h1>Home</h1>
      </main>

      <footer></footer>
    </div>
  )
}
