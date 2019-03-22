import React, { Component } from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import video from "video/dewynters-video-20sec-edit.mp4"
import dewyntersSVG from "../images/dw-logo-black.svg"
import dewyntersStackedSVG from "../images/dw-logo-stacked.svg"

const VideoBgWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: .5;
    }

    video {
        position: absolute;
        top: 50%;
        left: 50%;
        bottom: 0;
        right: 0;
        transform: translate(-50%, -50%);
    }
`


const Svg = styled.svg`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    mask rect {
        fill: rgba(255, 255, 255, 0.75);
    }

    > rect {
        fill: #333;
        -webkit-mask: url(#mask);
        mask: url(#mask);
    }
`

class IndexPage extends Component {

	play() {
		const video = document.getElementById('video')
		video.play()
	}

	render() {
		return (
			<Layout>
				<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />



            <div id="header">
                <Svg>
                    <defs>
                        <mask id="mask" x="0" y="0" width="100%" height="100%">
                            <rect x="0" y="0" width="100%" height="100%" />
                            <image href={dewyntersSVG} x="0" y="0" width="50%" height="100%" style={{
                                transform: "translateX(25%)",
                                left: "-25%"
                            }}></image>
                        </mask>
                    </defs>
                    <rect width="100%" height="100%"/>
                </Svg>
                <rect width="100%" height="100%" />
                <video id="video_target" src={video} autoPlay playsInline muted loop preload></video>
            </div>


                {/* <Wrapper>
                    <Video autoPlay playsInline muted loop preload>
                        <source src={video} />
                    </Video>
                    <Svg viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <mask id="mask" x="0" y="0" width="100%" height="100%" >
                                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                <text x="72" y="50">Simon</text>
                            </mask>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="white" mask="url(#mask)" />
                    </Svg>
                </Wrapper>  */}



                {/* <video
                    id="video"
                    muted
                    autoPlay
                    playsInline
                    loop
                    preload
                    style={{
                        display: "none"
                    }}
                >
                    <source src={video} type="video/mp4" />
                </video> 
				<canvas ref={canvas => this.canvas = canvas}></canvas> */}

{/* 
                <VideoBgWrapper>
                    <video
                        id="video"
                        muted
                        autoPlay
                        playsInline
                        loop
                        preload
                        // ref={video => this.video = video}
                    >
                        <source src={video} type="video/mp4" />
                    </video> 
                </VideoBgWrapper> */}

			</Layout>
		)
	}

}

export default IndexPage


