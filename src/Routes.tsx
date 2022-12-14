import { Route, Routes } from 'react-router-dom'
import { DeaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { HomePage } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DeaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
