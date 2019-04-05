import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import { media } from "utils/Media"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

import dewyntersDE from "images/dewynters-de.svg"
import dewyntersNL from "images/dewynters-nl.svg"
import spotco from "images/spotco.svg"

const FooterContainer = styled.footer`
    color: ${props => props.theme.colors.grey};
    font-size: ${props => props.theme.font.size.sm};
    padding: 1rem 0;
    letter-spacing: 0.2em;
    max-width: 1366px;
    margin: 0 auto;
    width: 100%;
`

const FooterNav = styled.nav`
    ul {
        list-style: none; 
        padding: 0;
        li {
            a {
                color: ${props => props.theme.colors.grey};

                &:hover {
                    color: ${props => props.theme.colors.turquoise};
                }
            }
        }
    }
`

const LinkWrap = styled.div`
    display: flex;
    justify-content: center;

    @media ${media.md} {
        justify-content: flex-start;;
    }

    img {
        width: 100%;
    }
`

const LinkItem = styled.a`
    padding: 1rem 1.25rem;
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    transition:  ${props => props.theme.transitionBase};

    @media ${media.sm} {
        padding: 0 1rem;
    }

    &:first-child {
        padding-left: 0;
    }

    &:hover {
        color: ${props => props.theme.colors.turquoise};
    }
`

const CompanyLink = styled.a`
    padding: .5rem 0;
    display: block;

    @media ${media.sm} {
        padding: 0 0 1rem 0;
    }

    img {
        width: 100%;
    }
`

const Footer = () => (
    <FooterContainer>
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} md={{ size: "auto", order: 3 }}>
                    <LinkWrap>
                        <LinkItem href="https://twitter.com/dewynterslondon" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </LinkItem>
                        <LinkItem href="https://www.instagram.com/dewynterslondon/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </LinkItem>
                    </LinkWrap>
                </Col>
                <Col xs={12} md={{ size: 5, order: 2 }} lg={4} className="py-2 py-md-0">
                    <Row>
                        <Col>
                            020 7321 0488<br/>
                            Wellington House<br />
                            125 Strand<br />
                            London WC2R 0AP
                        </Col>
                        <Col>
                            <FooterNav>
                                <ul>
                                    <li><Link to="/privacy/">Privacy & Cookies</Link></li>
                                    {/*<li><Link to="/terms-conditions/">Terms & Conditions</Link></li>*/}
                                    <li><Link to="/contact/">Contact</Link></li>
                                    <li><Link to="/careers/">Careers</Link></li>
                                </ul>
                            </FooterNav>                            
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={{ size: "auto", order: 1 }}>
                    <Row className="align-items-center">
                        <Col>
                            <CompanyLink href="http://www.dewynters.de" rel="noopener noreferrer">
                                <img src={dewyntersDE} alt="Dewynters Germany" />
                            </CompanyLink>
                        </Col>
                        <Col>
                            <CompanyLink href="https://www.dewynters.nl" rel="noopener noreferrer">
                                <img src={dewyntersNL} alt="Dewynters Netherlands" />
                            </CompanyLink>
                        </Col>
                        <Col>
                            <CompanyLink href="https://www.spotnyc.com/" rel="noopener noreferrer">
                                <img src={spotco} alt="Spotco" />
                            </CompanyLink>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </FooterContainer>
)

export default Footer