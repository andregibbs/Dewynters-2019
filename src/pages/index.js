import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import videoDesktop from "video/video-desktop.mp4"
import videoMobile from "video/video-mobile.mp4"
import dewyntersSVG from "../images/desktop-bg.svg"
import dewyntersStackedSVG from "../images/mobile-bg.svg"

const LandingContainer = styled(Container)`
    width: 100%;
    position: relative;
    z-index: 1;
    overflow: hidden;
`

const LandingRow = styled(Row)`
    position: relative;
    z-index: 1;
`

const LandingFillerCol = styled(Col)`
    background-color: black;
    opacity: .7;
    display: none;

    @media (min-width: 1600px) {
        display: block;
    }
`

const LandingLogoCol = styled(Col)`
    width: 100%;
    max-width: 1600px;
    padding: 0;

    img {
        width: 100%;
    }
`

const LandingVideoBg = styled.div`
    display: block;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        transform: translateX(-50%) translateY(-50%);
    }
`



class IndexPage extends Component {

	play() {
		const video = document.getElementById('video')
		video.play()
	}

	render() {

        // workout what video depending on browser width
        const videoSrc = typeof window !== 'undefined' && window.innerWidth > 768 ? videoDesktop : videoMobile

		return (
			<Layout>
				<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

                <LandingContainer fluid>
                    <LandingRow>
                        <LandingFillerCol />
                        <LandingLogoCol md="auto">
                            <picture>
                                <source srcSet={dewyntersSVG} media="(min-width: 768px)" />
                                <img src={dewyntersStackedSVG} alt="Dewynters" />
                            </picture>
                        </LandingLogoCol>
                        <LandingFillerCol />
                    </LandingRow>
                    <LandingVideoBg>
                        <video
                            id="video"
                            muted
                            autoPlay
                            playsInline
                            loop
                            preload="true"
                        >
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    </LandingVideoBg>
                </LandingContainer>

			</Layout>
		)
	}

}

export default IndexPage


