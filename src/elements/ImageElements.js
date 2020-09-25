import styled from "styled-components"

// Div som wrappar en gatsby image
// Gör bilden flexibel till olika skärmstorlekar


// Valde att ha kvar denna koden men döljer bilden mha opacity
// Mest för jag vill ha kvar koden om jag hittar nån bild som ser vettig ut.
export const FeatureImageWrapper = styled.div`
grid-column: 3 / span 10;
// Start on 2, end on 4
grid-row: 2 / 4;
overflow: hidden;
position: relative;
opacity: 0;

@media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;

}
`