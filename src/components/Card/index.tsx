import {
  CardContainer,
  TagContainer,
  PriceContainer,
  QuantityContainer,
  PriceWrapper,
} from "./styles";

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
      <div>
        {tags.map((tag) => (
          <TagContainer>{tag}</TagContainer>
        ))}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <PriceWrapper>
        <PriceContainer>R${price.toFixed(2)}</PriceContainer>
        <QuantityContainer>
          <button>+</button>1<button>-</button>
        </QuantityContainer>
      </PriceWrapper>
    </CardContainer>
  );
}
