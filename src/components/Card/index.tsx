import {
  CardContainer,
  TagContainer,
  PriceContainer,
  QuantityContainer,
  PriceWrapper,
  CartButtonContainer,
  TagWrapper,
} from "./styles";

import {ShoppingCart} from "@phosphor-icons/react";
interface CardProps {
  imgSrc: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

export function Card({imgSrc, tags, name, description, price}: CardProps) {
  return (
    <CardContainer>
      <img src={imgSrc}></img>
      <TagWrapper>
        {tags.map((tag) => (
          <TagContainer>{tag}</TagContainer>
        ))}
      </TagWrapper>
      <h3>{name}</h3>
      <p>{description}</p>
      <PriceWrapper>
        <PriceContainer>R${price.toFixed(2)}</PriceContainer>
        <QuantityContainer>
          <button>+</button>1<button>-</button>
        </QuantityContainer>
        <CartButtonContainer>
          <ShoppingCart weight="fill" />
        </CartButtonContainer>
      </PriceWrapper>
    </CardContainer>
  );
}

//Retormar daqui: display flex na div das tags
