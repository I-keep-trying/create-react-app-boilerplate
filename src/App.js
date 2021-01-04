import React from 'react'
import Footer from './components/Footer'
import { ToastContainer, Slide } from 'react-toastify'

const App = () => (
  <div>
    <ToastContainer
      pauseOnFocusLoss={false}
      autoClose={2000}
      transition={Slide}
    />
    <Footer />
  </div>
)

export default App
