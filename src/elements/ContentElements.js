import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 2 / span 5;
  background-color: ${props => props.theme.colors.custom};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;
  border-radius: 10px;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }
`

