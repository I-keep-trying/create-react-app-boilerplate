import React from 'react'
import Desktop from './components/DesktopContainer'
import Mobile from './components/MobileContainer'
import Footer from './components/Footer'
import { MediaContextProvider, Media } from './Media'
import { ToastContainer, Slide } from 'react-toastify'


const App = () => (
  <MediaContextProvider>
    <ToastContainer
      pauseOnFocusLoss={false}
      autoClose={2000}
      transition={Slide}
    />
    <Media lessThan="lg">
      <Mobile />
    </Media>
    {/*     <Media at="md">
      <TabletApp />
    </Media> */}
    <Media greaterThanOrEqual="lg">
      <Desktop />
    </Media>
    <Footer />
  </MediaContextProvider>
)

export default App
