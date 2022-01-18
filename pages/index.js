import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Photography Portfolio</title>
      </Head>
      <nav>
        <ul>
          <li>
            <Link href='/nature'>
              <a>Nature</a>
            </Link>
          </li>
          <li>
          <Link href='/people'>
              <a>People</a>
            </Link>
          </li>
          <li>
          <Link href='/night'>
              <a>Night</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Home</h1>
      </main>

      <footer></footer>
    </div>
  )
}
