import styled from "styled-components";

import background from "../../assets/Background.svg";

export const SectionContainer = styled.section`
  background-image: url(${background});
  max-height: 544px;
  display: flex;
  padding-top: 5.875rem;
  padding: 5.75rem 10rem;

  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  span {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.25rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 58%;
`;

const ICON_COLORS = {
  yellowDark: "yellow-700",
  yellowLight: "yellow-500",
  gray: "gray-700",
  purple: "purple-500",
} as const;

interface IconSpanProps {
  color: keyof typeof ICON_COLORS;
}
// TODO: Fazer isso pelo before e pelo after da Li
export const IconSpanContainer = styled.span<IconSpanProps>`
  background: ${(props) => props.theme[ICON_COLORS[props.color]]};
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
  border-radius: 50%;
  color: ${(props) => props.theme["gray-700"]};
  margin-right: 12px;
  svg {
    color: ${(props) => props.theme.white};
    border-right: 12px;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 4.125rem;
  gap: 4.375rem 9.75rem;
`;

export const CoffeeListWrapper = styled.ul`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10%;
  gap: 40px;
`;

export const ListTitleWrapper = styled.div`
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
`;

export const FiltersContainer = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const TagContainer = styled.span`
  background: ${(props) => props.theme["gray-100"]};
  color: ${(props) => props.theme["yellow-700"]};
  border: 1px solid ${(props) => props.theme["yellow-700"]};
  padding: 0.125rem 0.5rem;
  border-radius: 6.25rem;
  font-size: 0.625rem;
  font-weight: 700;
  cursor: pointer;
`;
