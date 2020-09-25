import styled from "styled-components"
// Direct Child of Body
export const ContainerWrapper = styled.div`
height: 100;


display: grid;
grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
grid-template-rows: 7.8rem 20rem 5rem auto;
gap: 0 2rem;

@media ${props => props.theme.breakpoints.tablet}{
    grid-template-columns: 2 rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
}

@media ${props => props.theme.breakpoints.mobile}{
    grid-template-columns: 1 rem repeat(6, 1fr) 1rem;
}
`