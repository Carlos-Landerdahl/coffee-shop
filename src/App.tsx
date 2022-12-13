import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  )
}

export default App
