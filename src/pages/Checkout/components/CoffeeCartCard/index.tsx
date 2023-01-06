import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import { Trash } from 'phosphor-react'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="" alt="" />
        <div>
          <p>Expresso Tradicional</p>
          <ActionsContainer>
            <RemoveButton>
              <Trash size={16} />
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>$9,90</p>
    </CoffeeCartCardContainer>
  )
}
