import React from "react"
import { Link } from "gatsby"
import { Container } from "reactstrap"
import Layout from "components/Layout/Layout"
import SEO from "utils/Seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Container className="text-center py-4">
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Link to="/">Return home</Link>
        </Container>
    </Layout>
)

export default NotFoundPage