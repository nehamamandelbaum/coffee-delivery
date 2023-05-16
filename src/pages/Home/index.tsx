import coffeeImage from "../../assets/imagemCafe.svg";
import traditionalCoffeeImg from "../../assets/tradicional.svg";
import {
  SectionContainer,
  IconSpanContainer,
  ContentWrapper,
  ListContainer,
  CoffeeListWrapper,
  ListTitleWrapper,
  FiltersContainer,
  TagContainer,
} from "./styles";
import {ShoppingCart, Timer, Package, Coffee} from "@phosphor-icons/react";
import {Card} from "../../components/Card";
//TODO: Deixar a página responsiva!
export function Home() {
  const filters = [
    "tradicional",
    "especial",
    "com leite",
    "alcóolico",
    "gelado",
  ];
  return (
    <>
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
      <main>
        <ListTitleWrapper>
          <h2>Nossos Cafés</h2>
          <FiltersContainer>
            {filters.map((filter) => (
              <TagContainer>{filter}</TagContainer>
            ))}
          </FiltersContainer>
        </ListTitleWrapper>
        <CoffeeListWrapper>
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <Card
            imgSrc={traditionalCoffeeImg}
            tags={["tradicional"]}
            name={"Expresso Tradicional"}
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
        </CoffeeListWrapper>
      </main>
    </>
  );
}

//Retomar daqui:
// - Organizar o container dos cards.
// -
//
