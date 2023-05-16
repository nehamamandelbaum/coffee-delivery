import styled from "styled-components";

export const CardContainer = styled.li`
  background: ${(props) => props.theme["gray-200"]};
  width: 16rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  gap: 0.625rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 100px;
    margin-top: -2.5rem;
  }

  h3 {
    font-family: "baloo 2";
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const TagContainer = styled.span`
  background: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme["yellow-700"]};
  padding: 0.125rem 0.5rem;
  border-radius: 6.25rem;
  font-size: 0.625rem;
  font-weight: 700;
`;

export const PriceContainer = styled.span`
  color: ${(props) => props.theme["gray-700"]};
  font-weight: 800;
`;

export const QuantityContainer = styled.div`
  background: ${(props) => props.theme["gray-400"]};
  border-radius: 6px;
  display: inline-block;
  button {
    background: transparent;
    border: none;
    padding: 0.5rem;
    color: ${(props) => props.theme["purple-500"]};
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

export const CartButtonContainer = styled.button`
  svg {
    color: ${(props) => props.theme["gray-300"]};
  }

  background: ${(props) => props.theme["purple-700"]};
  border: none;
  padding: 0.4375rem;
  border-radius: 6px;
  margin-left: -1.625rem;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 5px;
`;
