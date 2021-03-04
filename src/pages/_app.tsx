import '../styles/global.css'

import { ChallengesContext } from '../contexts/ChallengeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesContext.Provider value={'teste1'}>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
  )
}

export default MyApp
