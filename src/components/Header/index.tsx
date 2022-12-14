import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { BtnCity, BtnCar, HeadertContainer } from './styles'
import Logo from './assets/logoCoffee.svg'

export function Header() {
  return (
    <HeadertContainer>
      <Link to="/" title="Home">
        <img src={Logo} alt="" />
      </Link>
      <div>
        <BtnCity>
          <span>
            <MapPin size={19} weight="fill" />
            Uberlândia, MG
          </span>
        </BtnCity>
        <Link to="checkout" title="Checkout">
          <BtnCar>
            <ShoppingCart size={22} weight="fill" />
          </BtnCar>
        </Link>
      </div>
    </HeadertContainer>
  )
}
