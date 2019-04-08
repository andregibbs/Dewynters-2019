import { createGlobalStyle, withTheme } from "styled-components";
import fontFiles from "./Fonts";

const GlobalStyles = createGlobalStyle`

    @font-face{
        font-family: "Proxima Nova Regular";
        src: url(${fontFiles.ProximaNovaRegularEOT});
        src: 
            url(${fontFiles.ProximaNovaRegularEOT}) format("eot"), 
            url(${fontFiles.ProximaNovaRegularWOFF2}) format("woff2"), 
            url(${fontFiles.ProximaNovaRegularWOFF}) format("woff"), 
            url(${fontFiles.ProximaNovaRegularTTF}) format("truetype");
        font-display: swap;
    }
    @font-face{
        font-family: "Proxima Nova Bold";
        src: url(${fontFiles.ProximaNovaBoldEOT});
        src: 
            url(${fontFiles.ProximaNovaBoldEOT}) format("eot"), 
            url(${fontFiles.ProximaNovaBoldWOFF2}) format("woff2"), 
            url(${fontFiles.ProximaNovaBoldWOFF}) format("woff"), 
            url(${fontFiles.ProximaNovaBoldTTF}) format("truetype");
        font-display: swap;
    }

    body {
        font-family: ${props => props.theme.font.family.body};
        font-size: ${props => props.theme.font.size.md};
        font-weight: normal;
        line-height: ${props => props.theme.font.lineHeight.sm};
        color: ${props => props.theme.colors.white};
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme.colors.black};;
        overflow-x: hidden;
        font-display: swap;
        cursor: none;

        &.modal-active {
            overflow: hidden;
        }
    }

    a, button {
        cursor: none !important;
    }

    img {
        max-width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${props => props.theme.font.family.regular};
        font-weight: normal;
        line-height: ${props => props.theme.font.lineHeight.headings};
    }

    h1 {
        font-size: ${props => props.theme.font.h1.size};
    }
    h2 {
        font-size: ${props => props.theme.font.h2.size};
    }
    h3 {
        font-size: ${props => props.theme.font.h3.size};
    }
    h4 {
        font-size: ${props => props.theme.font.h4.size};
    }
    h5 {
        font-size: ${props => props.theme.font.h5.size};
    }
    h6 {
        font-size: ${props => props.theme.font.h6.size};
    }

    p {
        margin-bottom: 1.5rem;
    }

    a {
        color: ${props => props.theme.colors.white}; 
        position: relative;

        &:hover {
            color: ${props => props.theme.colors.turquoise};
            text-decoration: none;
        }
    }

    .modal-backdrop {
        background-color: transparent;
    }

    .modal-dialog {
        max-width: 1000px;
    }

    .modal-content {
        background-color: transparent;
        border: 0;
    }

    .modal {
        &.fade {
            .modal-dialog {
                transform: translate3d(0, 0, 0) !important;
            }
            
        }

        &.show {
            .modal-dialog {
                transform: translate3d(0, 0, 0) !important;
            }
        }
    }
`;

export default withTheme(GlobalStyles)