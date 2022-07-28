import Head from 'next/head'
import {
  Slides,
  Products,
  Benefits,
  VideoIntroduction,
  LatestNews,
  LatestProjects,
  TopProducts
} from 'Index'

export default function Home() {

  return <>
    <Head>
      <title>سرو</title>
      <meta name="description" content="Sarv" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Slides />
    <Products />
    <Benefits />
    <VideoIntroduction />
    <LatestNews />
    <LatestProjects />
    <TopProducts />
  </>
}
