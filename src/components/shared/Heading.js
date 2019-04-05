import styled from "styled-components"
import { media } from "utils/Media"

const Heading = styled.h1`
    padding-bottom: 1rem;
    font-family: ${props => props.theme.font.family.bold};
    color: ${props => props.theme.colors.grey};
    
    @media ${media.md} {
        font-size: 75px;
    }
`

export default Heading