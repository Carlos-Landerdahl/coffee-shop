import { DeaultLayout } from '../../layouts/DefaultLayout'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { CompleteOrderContainer } from './styles'

export function Checkout() {
  return (
    <CompleteOrderContainer>
      <CompleteOrderForm />
    </CompleteOrderContainer>
  )
}
