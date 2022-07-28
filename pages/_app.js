import {
  FirstNav,
  SecondNav,
  ThirdNav,
  Footer,
  SubFooter
} from 'Share'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {

  return <>
    <FirstNav />
    <SecondNav />
    <ThirdNav />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
    <SubFooter />
  </>
}

export default MyApp
