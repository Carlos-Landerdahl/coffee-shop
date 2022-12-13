import carrinho from '../../assets/carrinho.png'
import box from '../../assets/box.png'
import cronometro from '../../assets/cronometro.png'
import coffee from '../../assets/coffee.png'
import coffeImageMain from '../../assets/coffeImageMain.png'
import { ContainerMain, Content, NavContent, ImageContainer } from './styles'

export function Main() {
  return (
    <ContainerMain>
      <Content>
        <main>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          </div>
          <div>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
        </main>
        <NavContent>
          <div>
            <li>
              <img src={carrinho} alt="" />
              Compra simples e segura
            </li>
            <li>
              <img src={box} alt="" />
              Entrega rápida e rastreada
            </li>
          </div>
          <div>
            <li>
              <img src={cronometro} alt="" />
              Embalagem mantém o café intacto
            </li>
            <li>
              <img src={coffee} alt="" />O café chega fresquinho até você
            </li>
          </div>
        </NavContent>
      </Content>
      <ImageContainer>
        <img src={coffeImageMain} alt="" />
      </ImageContainer>
    </ContainerMain>
  )
}
