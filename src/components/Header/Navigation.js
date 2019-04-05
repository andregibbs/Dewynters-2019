import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavToggle = styled.button`
    position: fixed;
    z-index: 200;
    left: 50%;
    transform: translateX(-50%);
    top: 1rem;
    background-color: transparent;
    border: 0;
    width: 25px;
    height: 25px;
    padding: 0;
    cursor: pointer;

    span {
        width: 100%;
        height: 2px;
        background-color: white;
        display: block;
        position: relative;

        &:after,
        &:before {
            content: "";
            width: 100%;
            height: 2px;
            display: block;
            background-color: white;
            position: absolute;
            top: -7px;
            left: 0;
        }

        &:after {
            top: 7px;
        }
    }
`

const Nav = styled.nav`
    position: fixed;
    opacity: 0;
    visibility: hidden;
    z-index: 199;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: opacity .4s ease-in-out;

    ul {
        padding: 0;
        list-style: none;
        text-align: center;
       
        li {
            a {
                font-family: ${props => props.theme.font.family.bold};
                font-size: 75px;
                transition: ${props => props.theme.transitionBase};

                &:hover, 
                &.active {
                    text-decoration: none;
                    color: ${props => props.theme.colors.white};
                    opacity: .5;
                    background-color: transparent;
                }
            }
        }
    }

    &.active {
        visibility: visible;
        opacity: 1;
    }
`

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            navOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        document.getElementById('site-content-wrap').classList.toggle('blur')
        document.body.classList.toggle('modal-active')

        this.setState({ navOpen: !this.state.navOpen })
    }

    render() {
        return (
            <>
                <NavToggle aria-label="Toggle navigation" onClick={this.toggleNav}>
                    <span></span>
                </NavToggle>
                <Nav className={`${this.state.navOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/" activeClassName="active" onClick={this.toggleNav}>Home</Link>
                        </li>
                        <li>
                            <Link to="/careers/" activeClassName="active" onClick={this.toggleNav}>Careers</Link>
                        </li>
                        <li>
                            <Link to="/contact/" activeClassName="active" onClick={this.toggleNav}>Contact</Link>
                        </li>
                    </ul>
                </Nav>
            </>
        )
    }
}

export default Navigation