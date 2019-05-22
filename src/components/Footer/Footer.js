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

import newmans from "images/newmans-black.svg"
import wtb from "images/wakethebear.svg"

const FooterContainer = styled.footer`
    color: ${props => props.theme.colors.grey};
    font-size: ${props => props.theme.font.size.sm};
    padding: 1.5rem 0;
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
                        <LinkItem href="https://twitter.com/dewynterslondon" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon icon={faTwitter} />
                        </LinkItem>
                        <LinkItem href="https://www.instagram.com/dewynterslondon/" target="_blank" rel="noreferrer noopener">
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
                <Col xs={12} md={{ size: 5, order: 1 }}>
                    <Row className="align-items-center">
                        <Col>
                            <CompanyLink href="https://newman-displays.com/" target="_blank" rel="noreferrer noopener" aria-label="Newmans">
                                <img src={newmans} alt="Newmans" width="90" height="61" />
                            </CompanyLink>
                        </Col>
                        <Col>
                            <CompanyLink href="https://wtb.london/" target="_blank"  rel="noopener noreferrer" aria-label="Wake the Bear">
                                <img src={wtb} alt="Wake the Bear" width="60" height="60" />
                            </CompanyLink>
                        </Col>
                        <Col>
                            <CompanyLink href="https://www.spotnyc.com/" target="_blank" rel="noopener noreferrer" aria-label="Spotco">
                                <img src={spotco} alt="Spotco" width="114" height="44" />
                            </CompanyLink>
                        </Col>
                    </Row>
                    <Row className="align-items-center mt-2">
                        <Col sm={{ size: '4', offset: 2 }}>
                            <CompanyLink href="https://www.dewynters.de" target="_blank" rel="noreferrer noopener" aria-label="Dewynters Germany">
                                <img src={dewyntersDE} alt="Dewynters Germany" width="114" height="24" />
                            </CompanyLink>
                        </Col>
                        <Col sm={4}>
                            <CompanyLink href="https://www.dewynters.nl" target="_blank"  rel="noopener noreferrer" aria-label="Dewynters Netherlands">
                                <img src={dewyntersNL} alt="Dewynters Netherlands" width="114" height="24" className="align-self-center"/>
                            </CompanyLink>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-center text-center mt-3">
                <Col xs={12}>
                    Dewynters is a member of the reach4entertainment enterprises plc group of companies.<br/>Click <a href="https://www.r4e.com/pdfs/announcements/r4e-plc-Anti-Slavery-Statement[2].pdf" target="_blank" rel="noopener noreferrer" download="true">here</a> to see the groups’ Anti-Slavery Statement.
                </Col>
            </Row>
        </Container>
    </FooterContainer>
)

export default Footer