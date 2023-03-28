import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import LineChart from '@/components/LineChart'
import PieChart from '@/components/PieChart'
import StackBarChart from '@/components/StackBarChart'


export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Dashboard</h1>
        <LineChart />
        <PieChart />
        <StackBarChart />
      </main>
    </>
  )
}
