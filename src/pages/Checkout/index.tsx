import { DeaultLayout } from '../../layouts/DefaultLayout'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffess } from './components/SelectedCoffees'
import { CompleteOrderContainer } from './styles'

export function Checkout() {
  return (
    <CompleteOrderContainer>
      <SelectedCoffess />
      <CompleteOrderForm />
    </CompleteOrderContainer>
  )
}
