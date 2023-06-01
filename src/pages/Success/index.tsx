import {MapPin, Clock, CurrencyDollar} from "@phosphor-icons/react";
import {SuccessWrapper, ListItem, MainContainer, ListContainer} from "./styles";
import SuccessImage from "../../assets/success.svg";

export function Success() {
  return (
    <SuccessWrapper>
      <h1>Uhu! Pedido Confirmado!</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
      <MainContainer>
        <ListContainer>
          <ListItem color="purple">
            <span>
              <MapPin />
            </span>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </ListItem>
          <ListItem color="yellowLight">
            <span>
              <Clock />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </ListItem>
          <ListItem color="yellowDark">
            <span>
              <CurrencyDollar />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de crédito</strong>
              </p>
            </div>
          </ListItem>
        </ListContainer>
        <img src={SuccessImage} alt="man in motorcycle" />
      </MainContainer>
    </SuccessWrapper>
  );
}
