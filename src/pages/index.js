import React, { Component } from "react"
import SEO from "utils/Seo"
import Layout from "components/Layout/Layout"
import LandingBlock from "components/LandingBlock/LandingBlock"


class IndexPage extends Component {

    
	render() {
		return (
            <>
                <Layout>
                    <SEO title="Home" />
                    <LandingBlock />

  
                </Layout>
            </>
		)
	}

}

export default IndexPage