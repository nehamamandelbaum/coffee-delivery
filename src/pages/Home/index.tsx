import coffeeImage from "../../assets/imagemCafe.svg";

import {
  SectionContainer,
  IconSpanContainer,
  ContentWrapper,
  ListContainer,
} from "./styles";

import {ShoppingCart, Timer, Package, Coffee} from "@phosphor-icons/react";

export function Home() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <ListContainer>
          <li>
            <IconSpanContainer color="yellowDark">
              <ShoppingCart weight="fill" />
            </IconSpanContainer>
            Compra simples e segura
          </li>
          <li>
            <IconSpanContainer color="gray">
              <Package weight="fill" />
            </IconSpanContainer>
            Embalagem mantém o café intacto
          </li>
          <li>
            <IconSpanContainer color="yellowLight">
              <Timer weight="fill" />
            </IconSpanContainer>
            Entrega rápida e rastreada
          </li>
          <li>
            <IconSpanContainer color="purple">
              <Coffee weight="fill" />
            </IconSpanContainer>
            O café chega fresquinho até você
          </li>
        </ListContainer>
      </ContentWrapper>
      <img src={coffeeImage} alt="Imagem de copo de café" />
    </SectionContainer>
  );
}
//Fazer a cor baseada nas props do span container
