import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "utils/Media"

const NavToggle = styled.button`
    position: fixed;
    z-index: 200;
    left: 50%;
    transform: translateX(-50%);
    top: 1rem;
    background-color: transparent;
    border: 0;
    width: 35px;
    height: 30px;
    padding: 0;
    transition: ${props => props.theme.transitionBase};
    background-color: ${props => props.theme.colors.black};

    span {
        width: 70%;
        height: 2px;
        background-color: white;
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

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
            transition: ${props => props.theme.transitionBase};
            transform: translateY(0) rotate(0);
        }

        &:after {
            top: 7px;
        }
    }

    &.active {
        span {
            background-color: transparent;

            &:after {
                top: 50%;
                transform: translateY(-50%) rotate(45deg);
            }
            &:before {
                top: 50%;
                transform: translateY(-50%) rotate(-45deg);
            }
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
                font-size: 55px;
                transition: ${props => props.theme.transitionBase};

                @media ${media.md} {
                    font-size: 75px;
                }

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
        const logoContainer = document.getElementById('logoContainer')

        if (logoContainer !== null) {
            if (logoContainer.classList.contains('transform-none')) {
                setTimeout(() => {
                    logoContainer.classList.remove('transform-none')
                }, 500);
            } else {
                logoContainer.classList.add('transform-none')
            }
        }

        document.getElementById('site-content-wrap').classList.toggle('blur')
        document.body.classList.toggle('modal-active')

        this.setState({ navOpen: !this.state.navOpen })
    }

    render() {
        return (
            <>
                <NavToggle id="nav-toggle" aria-label="Toggle navigation" onClick={this.toggleNav} className={`${this.state.navOpen ? 'active' : ''}`}>
                    <span></span>
                </NavToggle>
                <Nav className={`${this.state.navOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/" activeClassName="active" onClick={this.toggleNav}>Home</Link>
                        </li>
                        <li>
                            <Link to="/our-work/" activeClassName="active" onClick={this.toggleNav}>Our work</Link>
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