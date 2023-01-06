import { CoffeeCartCard } from '../CoffeeCartCard'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffess() {
  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>
      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
