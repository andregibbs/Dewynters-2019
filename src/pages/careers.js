import React, { Component } from "react"
import { StaticQuery } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import { media } from "utils/Media"
import Layout from "components/Layout/Layout"
import Heading from "components/shared/Heading"
import SEO from "utils/Seo"

import envelope from "images/envelope.svg"
import download from "images/download.svg"

const ContainerStyled = styled(Container)`
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

const NoVacancies = styled.p`
    font-size: ${props => props.theme.font.h4.size};
    color: ${props => props.theme.colors.turquoise};
    padding: 2rem 0;
`

const CareerRow = styled(Row)`
    padding: 2rem 0;

    h3 {
        color: ${props => props.theme.colors.turquoise};
    }
`

const CareerCopy = styled.div`
    padding: 1rem 0;
    p {
        font-family: ${props => props.theme.font.family.base};
        font-size: ${props => props.theme.font.size.md};
    }
`

const CareerInfoLink = styled.a`
    display: flex;
    flex-wrap: nowrap;

    img {
        padding-right: 1rem;
    }

    div {
        &:first-child {
            flex-grow: 10;
        }
        &:last-child {
            flex-shrink: 10;
        }
    }

    span {
        @media ${media.md} {
            font-size: ${props => props.theme.font.size.lg};
        }
    }
`

const CareersPage = () => (
    // Query all careers
    <StaticQuery
        query={graphql`
            query {
                allCareersJson {
                    edges {
                        node {
                            title
                            copyHTML
                            pdf
                        }
                    }
                }
            }
		`}
        render={data => (
            <CareersBlock data={data} />
        )}
    />
) 

class CareersBlock extends Component {
    render() {

        let careersContent
        let careers = this.props.data.allCareersJson.edges

        if (careers.length) {
            careersContent = careers.map(({ node }, i) => {
                return (
                    <CareerRow key={i}>
                        <Col>
                            <h3>{node.title}</h3>
                            <CareerCopy dangerouslySetInnerHTML={{ __html: node.copyHTML }} />
                            <Row>
                                <Col xs={6} md="auto">
                                    <CareerInfoLink href={node.pdf} target="_blank" rel="noopener noreferrer">
                                        <div style={{ width: "50px", maxWidth: "50px" }}><img src={download} alt="" width="50"/></div>
                                        <div>
                                            <span>Download job description</span> <br />
                                            PDF
                                        </div>
                                    </CareerInfoLink>
                                </Col>
                                <Col xs={6} md="auto">
                                    <CareerInfoLink href="mailto:recruitment@dewynters.com" target="_blank" rel="noopener noreferrer">
                                        <div style={{ width: "60px", maxWidth: "60px" }}><img src={envelope} alt="" width="60"/></div>
                                        <div>
                                            <span>Apply</span> <br />
                                            via email
                                        </div>
                                    </CareerInfoLink>
                                </Col>
                            </Row>
                        </Col>
                    </CareerRow>
                )
            })

        } else {
            careersContent = <NoVacancies>There are currently no vacancies.</NoVacancies>
        }

        return (
            <Layout>
                <SEO title="Contact" />
                <ContainerStyled>
                    <Heading><span style={{ color: "white" }}>Careers</span> at Dewynters.</Heading>

                    <p className="lg">We’re Dewynters, the <span style={{ color: "white" }}>leading live entertainment marketing agency</span>. Based in central London, we create ground-breaking campaigns that are seen across the world, spanning the fields of <span style={{ color: "white" }}>theatre, music, arena events, opera, sport, film, comedy</span> and <span style={{ color: "white" }}>exhibitions</span>.</p>

                    <p>Clients include the Royal Shakespeare Company, Nitto ATP World Tennis Finals, Les Misérables, Mamma Mia!, The Lion King, The Book of Mormon, Taste London Festival, Ubisoft and Marvel Universe Live! We recently embarked on an international new business drive that has generated clients in France, Germany, Sweden, Asia and The Gulf.</p>


                    {careersContent}
                </ContainerStyled>
            </Layout>
        )
    }

}

export default CareersPage