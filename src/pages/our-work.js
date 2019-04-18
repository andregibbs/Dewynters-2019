import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Row, Col } from "reactstrap"
import SEO from "utils/Seo"
import { media } from "utils/Media"
import Layout from "components/Layout/Layout"
import Heading from "components/shared/Heading"
import IntroContainer from "components/shared/IntroContainer"

const ClientCol = styled(Col)`
    margin-bottom: 2rem;
    width: 50%;
    position: relative;
    @media ${media.sm} {
        width: 33%;
    }
    @media ${media.md} {
        width: 25%;
    }
    @media ${media.lg} {
        width: 20%;
    }

    .title {
        background-color: ${props => props.theme.colors.turquoise};
        position: absolute;
        z-index: 1;
        top: 0;
        left: 15px;
        right: 15px;
        bottom: 0;
        color: ${props => props.theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        transform: scale(.9);
        opacity: 0;
        line-height: 1.1;
        padding: 1rem;
        transition: ${props => props.theme.transitionBase};
    }

    &:hover {
        .title {
            transform: scale(1.1);
            opacity: 1;
        }
    }
`

const OurClientsPage = () => (
    // Query all careers
    <StaticQuery
        query={graphql`
            query {
                allClientsJson {
                    edges {
                        node {
                            name
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 200) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            url
                        }
                    }
                }
            }
		`}
        render={data => (
            <OurClientsBlock data={data} />
        )}
    />
) 


class OurClientsBlock extends Component {

    render() {

        let clientsBlocks
        let clients = this.props.data.allClientsJson.edges

        if (clients.length) {
            clientsBlocks = clients.map(({ node }, i) => {
                return (
                    <ClientCol xs="auto" key={i} onHover={this.showTitle}>
                        {node.url !== "" ? (
                            <a href={node.url} target="_blank" rel="noopener noreferrer">
                                <Img fluid={node.image.childImageSharp.fluid} alt={node.name} />
                            </a>
                        ) : (
                            <Img fluid={node.image.childImageSharp.fluid}  alt={node.name} />
                        )}
                        <div className="title">{node.name}</div>
                    </ClientCol>
                )
            })

        }

        return (
            <Layout>
                <SEO title="Careers" />
                <IntroContainer>
                    <Heading>Our <span style={{ color: "white" }}>work</span></Heading>

                    <p className="lg">We’re Dewynters, the <span style={{ color: "white" }}>leading live entertainment marketing agency</span>. Based in central London, we create ground-breaking campaigns that are seen across the world, spanning the fields of <span style={{ color: "white" }}>theatre, music, arena events, opera, sport, film, comedy</span> and <span style={{ color: "white" }}>exhibitions</span>.</p>

                    <Row className="pt-3">
                        {clientsBlocks}
                    </Row>
                </IntroContainer>
            </Layout>
        )
    }

}

export default OurClientsPage