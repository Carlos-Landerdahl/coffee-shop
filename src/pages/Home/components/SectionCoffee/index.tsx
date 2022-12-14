import {
  Buy,
  CardCoffee,
  ContainerBuy,
  QuantityBuy,
  ImgCoffeType,
  Section,
  Title,
} from './styles'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import Tradicional from './assets/tradicional.png'
import Americano from './assets/Americano.png'
import Cremoso from './assets/Cremoso.png'
import Gelado from './assets/Gelado.png'
import Leite from './assets/Com-Leite.png'
import Latte from './assets/Latte.png'
import Capuccino from './assets/Capuccino.png'
import Macchiato from './assets/Macchiato.png'
import Mocaccino from './assets/Mocaccino.png'
import Quente from './assets/Quente.png'
import Cubano from './assets/Cubano.png'
import Havaiano from './assets/Havaiano.png'
import Arabe from './assets/Arabe.png'
import Irlandes from './assets/Irlandes.png'

interface CoffeeTypes {
  id: number
  img: string
  type: string
  about: string
  price: string
}

const coffeeType = [
  {
    id: 1,
    img: Tradicional,
    type: 'Tradicional',
    title: 'Expresso Tradicional',
    about: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  {
    id: 2,
    img: Americano,
    type: 'Tradicional',
    title: 'Expresso Americano',
    about: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
  },
  {
    id: 3,
    img: Cremoso,
    type: 'Tradicional',
    title: 'Expresso Cremoso',
    about: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
  },
  {
    id: 4,
    img: Gelado,
    type: 'Tradicional',
    title: 'Expresso Gelado',
    about: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
  },
  {
    id: 5,
    img: Leite,
    type: 'Tradicional',
    title: 'Café com Leite',
    about: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
  },
  {
    id: 6,
    img: Latte,
    type: 'Tradicional',
    title: 'Latte',
    about: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
  },
  {
    id: 7,
    img: Capuccino,
    type: 'Tradicional',
    title: 'Capuccino',
    about: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
  },
  {
    id: 8,
    img: Macchiato,
    type: 'Tradicional',
    title: 'Macchiato',
    about: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
  },
  {
    id: 9,
    img: Mocaccino,
    type: 'Especial',
    title: 'Mocaccino',
    about: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
  },
  {
    id: 10,
    img: Quente,
    type: 'Especial',
    title: 'Chocolate Quente',
    about: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
  },
  {
    id: 11,
    img: Cubano,
    type: 'Especial',
    title: 'Cubano',
    about: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
  },
  {
    id: 12,
    img: Havaiano,
    type: 'Especial',
    title: 'Havaiano',
    about: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
  },
  {
    id: 13,
    img: Arabe,
    type: 'Especial',
    title: 'Árabe',
    about: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
  },
  {
    id: 14,
    img: Irlandes,
    type: 'Especial',
    title: 'Irlandês',
    about: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
  },
]

export function SectionCoffee() {
  return (
    <>
      <Title>
        <h1>Nossos cafés</h1>
      </Title>
      <Section>
        {coffeeType.map(function (item) {
          return (
            <CardCoffee key={item.id}>
              <ImgCoffeType>
                <div>
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <p>{item.type}</p>
                </div>
              </ImgCoffeType>
              <header>
                <h1>{item.title}</h1>
                <p>{item.about}</p>
              </header>
              <ContainerBuy>
                <p>
                  R$<span>{item.price}</span>
                </p>
                <QuantityBuy>
                  <button>
                    <Minus weight="bold" />
                  </button>
                  <span>0</span>
                  <button>
                    <Plus weight="bold" />
                  </button>
                </QuantityBuy>
                <Buy>
                  <button>
                    <ShoppingCart weight="fill" color="white" />
                  </button>
                </Buy>
              </ContainerBuy>
            </CardCoffee>
          )
        })}
      </Section>
    </>
  )
}
