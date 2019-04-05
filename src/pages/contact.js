import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import { media } from "utils/Media"
import Layout from "components/Layout/Layout"
import Heading from "components/shared/Heading"
import SEO from "utils/Seo"

import londonMap from "images/london-map.jpg"
import hamburgMap from "images/hamburg-map.jpg"
import amsterdamMap from "images/amsterdam-map.jpg"

import r4e from "images/r4e.svg"
import newman from "images/newman.svg"
import spotco from "images/spotco-white.svg"

const MapRow = styled(Row)`
    padding: 1rem 0;
    position: relative;

    @media ${media.md} {
        padding: 2rem 0;
    }
`

const MapRowContent = styled(Col)`
    @media ${media.lg} {
        position: absolute;
        padding: 2rem;
        right: 0;
        bottom: -1rem;
    }
`

const MapRowContentBg = styled.div`
    background-color: ${props => props.theme.colors.blackOff};
    padding: 1rem;

    @media ${media.lg} {
        padding: 2rem;
    }
`

const CompanyRow = styled(Row)`
    padding: 1rem 0;
    align-items: center; 

    @media ${media.md} {
        padding: 2rem 0;
    }

    img {
        padding-bottom: 1rem;
    }
`

const InlineList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    color: ${props => props.theme.colors.grey};

    li {
        display: block;
        padding-bottom: .5rem;
        position: relative;

        @media ${media.md} {
            display: inline-block;
            padding: 0 2rem;
            padding-bottom: 0;
        }

        &:after {
            @media ${media.md} {
                content: "";
                position: absolute;
                height: 50%;
                width: 1px;
                background-color: ${props => props.theme.colors.grey};
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        &:first-child {
            padding-left: 0;
        }

        &:last-child {
            &:after {
                display: none;
            }
        }

        a {
            color: ${props => props.theme.colors.grey};
            display: block;
        }
    }
`

class ContactPage extends Component {

	constructor(props) {
		super(props)
	}

	render() {

		return (
			<Layout>
				<SEO title="Contact"/>
                <Container>
                    <Heading><span style={{ color: "white" }}>Contact</span> Dewynters.</Heading>

                    <MapRow>
                        <Col md={6}>
                            <img src={londonMap} alt="" />
                        </Col>
                        <MapRowContent md={6} lg={7}>
                            <MapRowContentBg>
                                <h3>London Office</h3>
                                <p>Wellington House, 125 Strand, London WC2R 0AP</p>
                                <InlineList>
                                    <li>
                                        +44 020 7278 1400
                                </li>
                                    <li>
                                        <a href="mailto:info@dewynters.com">info@dewynters.com</a>
                                    </li>
                                </InlineList>
                            </MapRowContentBg>
                        </MapRowContent>
                    </MapRow>

                    <MapRow>
                        <Col md={6}>
                            <img src={hamburgMap} alt="" />
                        </Col>
                        <MapRowContent md={6} lg={7}>
                            <MapRowContentBg>
                                <h3>Hamburg Office</h3>
                                <p>Lemon-Tree-Building, Holzdamm 14, 20099 Hamburg</p>
                                <InlineList>
                                    <li>
                                        +49 40 60869601 
                                    </li>
                                    <li>
                                        <a href="mailto:kontakt@dewynters.de">kontakt@dewynters.de</a>
                                    </li>
                                    <li>
                                        <a href="https://www.dewynters.de" target="_blank" rel="noopener noreferrer">dewynters.de</a>
                                    </li>
                                </InlineList>
                            </MapRowContentBg>
                        </MapRowContent>
                    </MapRow>

                    <MapRow>
                        <Col md={6}>
                            <img src={amsterdamMap} alt="" />
                        </Col>
                        <MapRowContent md={6} lg={7}>
                            <MapRowContentBg>
                                <h3>Amsterdam Office</h3>
                                <p>Gedempt Hamerkanaal 247, 1021KP Amsterdam</p>
                                <InlineList>
                                    <li>
                                        +49 40 60869601 
                                    </li>
                                    <li>
                                        <a href="mailto:info@dewynters.nl">info@dewynters.nl</a>
                                    </li>
                                    <li>
                                        <a href="https://www.dewynters.nl" target="_blank" rel="noopener noreferrer">dewynters.nl</a>
                                    </li>
                                </InlineList>
                            </MapRowContentBg>
                        </MapRowContent>
                    </MapRow>

                    <CompanyRow>
                        <Col md={3}>
                            <img src={r4e} alt="reach4entertainment" />
                        </Col>
                        <Col>
                            <p>Wellington House, 125 Strand, London WC2R 0AP</p>
                            <InlineList>
                                <li>
                                    +44 020 7278 1400
                                </li>
                                <li>
                                    <a href="mailto:info@r4e.com">info@r4e.com</a>
                                </li>
                                <li>
                                    <a href="https://www.r4e.com" target="_blank" rel="noopener noreferrer">r4e.com</a>
                                </li>
                            </InlineList>
                        </Col>
                    </CompanyRow>
                    <CompanyRow>
                        <Col md={3}>
                            <img src={newman} alt="Newmans displays" />
                        </Col>
                        <Col>
                            <p>23a Pakenham Street, London WC1X 0LB</p>
                            <InlineList>
                                <li>
                                    +44 020 7278 1400  
                                </li>
                                <li>
                                    <a href="mailto:info@newman-displays.com<">info@newman-displays.com</a>
                                </li>
                                <li>
                                    <a href="https://www.newman-displays.com" target="_blank" rel="noopener noreferrer">newman-displays.com</a>
                                </li>
                            </InlineList>
                        </Col>
                    </CompanyRow>
                    <CompanyRow>
                        <Col md={3}>
                            <img src={spotco} alt="Spotco" />
                        </Col>
                        <Col>
                            <p>119 W 40th St, Floor 18, New York 10036</p>
                            <InlineList>
                                <li>
                                    +1 212 262 10018 
                                </li>
                                <li>
                                    <a href="mailto:spot@spotnyc.com">spot@spotnyc.com</a>
                                </li>
                                <li>
                                    <a href="https://www.spotnyc.com/" target="_blank" rel="noopener noreferrer">spotnyc.com</a>
                                </li>
                            </InlineList>
                        </Col>
                    </CompanyRow>
                </Container>
			</Layout>
		)
	}

}

export default ContactPage