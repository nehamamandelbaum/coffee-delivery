import logoCoffeeDelivery from "../../assets/Logo.svg";
import {MapPin, ShoppingCart} from "@phosphor-icons/react";
import {
  HeaderContainer,
  LocationContainer,
  CartButtonContainer,
  NavContainer,
  CartButtonWrapper,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoCoffeeDelivery} alt="" />
      </span>
      <NavContainer>
        <LocationContainer>
          <MapPin weight="fill" />
          São Paulo, SP
        </LocationContainer>
        <CartButtonWrapper>
          <span>3</span>
          <CartButtonContainer>
            <ShoppingCart weight="fill" />
          </CartButtonContainer>
        </CartButtonWrapper>
      </NavContainer>
    </HeaderContainer>
  );
}
