import { CompleteOrderContainer } from '../../styles'
import { SectionTitle } from '../SectionTitle'
import { FormSectionContainer } from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'

export function CompleteOrderForm() {
  const colors = useTheme()

  return (
    <CompleteOrderContainer>
      <h3>Complete seu pedido</h3>

      <FormSectionContainer>
        <SectionTitle
          title={'Endereço de entrega'}
          subtitle={'Informe o endereço onde deseja receber seu pedido'}
          icon={<MapPinLine color={colors['yellow-dark']} size={22} />}
        ></SectionTitle>

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title={'Pagamento'}
          subtitle={
            'O pagamento é feito na entrega. Escolha a forma que deseja pagar'
          }
          icon={<CurrencyDollar color={colors.purple} size={22} />}
        ></SectionTitle>

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderContainer>
  )
}
