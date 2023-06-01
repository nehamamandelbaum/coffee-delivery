import styled from "styled-components";

export const SuccessWrapper = styled.div`
  padding: 5% 10%;
  h1 {
    color: ${(props) => props.theme["yellow-700"]};
    font-family: "baloo 2";
    font-weight: 800;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
  }
`;

const ICON_COLORS = {
  yellowDark: "yellow-700",
  yellowLight: "yellow-500",
  purple: "purple-500",
} as const;

interface ListItemProps {
  color: keyof typeof ICON_COLORS;
}

export const ListItem = styled.li<ListItemProps>`
  list-style: none;
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2.18rem;
  span {
    display: inline-flex;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme[ICON_COLORS[props.color]]};
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
`;

export const ListContainer = styled.ul`
  padding: 3%;
  border: 1px solid ${(props) => props.theme["purple-500"]};
  border-radius: 6px 36px;
`;
