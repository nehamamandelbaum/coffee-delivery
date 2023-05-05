import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  height: 6.5rem;
  align-items: center;
  background: ${(props) => props.theme.white};
`;

export const LocationContainer = styled.span`
  padding: 0.5rem;
  background: ${(props) => props.theme["purple-300"]};
  color: ${(props) => props.theme["purple-700"]};
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 4px;

  svg {
    color: ${(props) => props.theme["purple-500"]};
  }
`;

export const CartButtonContainer = styled.button`
  background: ${(props) => props.theme["yellow-300"]};
  border: none;
  padding: 0.5rem;
  border-radius: 4px;

  svg {
    color: ${(props) => props.theme["yellow-700"]};
  }

  &:hover {
    transition: 0.4s;
    background: ${(props) => props.theme["yellow-700"]};

    svg {
      color: ${(props) => props.theme["yellow-300"]};
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 1.3rem;
`;

export const CartButtonWrapper = styled.div`
  position: relative;
  span {
    border-radius: 50%;
    background: ${(props) => props.theme["yellow-700"]};
    color: ${(props) => props.theme.white};
    font-weight: 700;
    padding: 3px;
    font-size: 12px;
    width: 20px;
    display: inline-block;
    height: 20px;
    text-align: center;
    position: absolute;
    top: -10px;
    right: -10px;
  }
`;
