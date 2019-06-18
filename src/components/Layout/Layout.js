import React, { Component } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import "scss/bootstrap.scss"
import "scss/quantcast.scss"
import theme from "utils/Theme"
import GlobalStyles from "utils/GlobalStyles"
import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
// import CustomCursor from "./CustomCursor"

const SiteContentWrap = styled.div`
    transition: filter .4s ease-in-out;
    &.blur {
        filter: blur(.5rem);
        backface-visibility: hidden;
        transform: translate3d(0,0,0);

        &:after {
            content: "";
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .2);
        }

        &--large {
            filter: blur(1.5rem);
        }
    }
`

class Layout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cursor: false
        }
    }

    componentDidMount() {
        this.displayCursorCheck()
        document.addEventListener('resize', this.displayCursorCheck)
    }

    displayCursorCheck() {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 768) {
                this.setState({
                    cursor: true
                })
            } else {
                this.setState({
                    cursor: false
                })
            }
        }
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    <Header />
                    <SiteContentWrap id="site-content-wrap">
                        <main>{this.props.children}</main>
                        <Footer />
                    </SiteContentWrap>
                    {/* {this.state.cursor &&
                        <CustomCursor />
                    } */}
                </>
            </ThemeProvider>
        )
    }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout