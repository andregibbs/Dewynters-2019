import styled from "styled-components"
import { Container } from "reactstrap"
import { media } from "utils/Media"

const IntroContainer = styled(Container)`
    padding-top: 3rem; 
    padding-bottom: 3rem; 
    font-family: ${props => props.theme.font.family.bold};
    color: ${props => props.theme.colors.grey};

    p {
        font-size: ${props => props.theme.font.h6.size};

        @media ${media.sm} {
            font-size: ${props => props.theme.font.h5.size};
            line-height: 1.25;
        }

        &.lg {
            font-size: ${props => props.theme.font.h4.size};
            line-height: 1.25;
            
            @media ${media.sm} {
                font-size: ${props => props.theme.font.h3.size};
            }

            @media ${media.md} {
                font-size: ${props => props.theme.font.h2.size};
            }
        }
    }
`


export default IntroContainer