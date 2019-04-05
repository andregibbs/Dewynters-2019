import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"

const HeaderWrap = styled.header`
    padding: 2rem;
`

const Header = () => (
    <HeaderWrap>
        <Navigation />
    </HeaderWrap>
)

export default Header