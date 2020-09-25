// Pga vi använder oss av link behöver vi react.
import React from "React"
import styled from "styled-components"
import {Link} from "gatsby"

export const PaginationWrapper = styled.div`
    grid-column: 2 / span 12;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

// Fixar så att om man är på förstasidan så kan man inte klicka "bakåt" exempelvis.
    a:nth-child(1){
        color: ${props => props.isFirst ? props.theme.colors.dark3 : props.theme.colors.dark1};
        pointer-events: ${props => (props.isFirst ? "none" : "auto")};
        cursor: ${props => (props.isFirst ? "default" : "pointer")};
    }

    a:nth-child(2) {
    color: ${props =>
      props.isLast ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }


  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const PaginationElement = styled(props => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  text-decoration: none;
  margin: 0 2rem;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
