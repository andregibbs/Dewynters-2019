import React, { Component } from "react"
import { Link } from "gatsby"
import { Container, Modal, ModalBody } from "reactstrap"
import { TimelineMax, Power1 } from "gsap"
import styled from "styled-components"
import { media } from "utils/Media"
import logo from "images/logo.svg"
import logoMobile from "images/logo-mobile.svg"

const LandingContainer = styled(Container)`
    position: relative;
    min-height: 80vh;
    width: 100%;
    padding: 0; 
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const LogoContainer = styled.div`
    width: 100%;
    max-width: 1400px;
    padding: 1rem 0;
   
    @media ${media.md} {
        padding: 0 2rem;
    }

    img {
        width: 100%;
        transform: scale(10);
        opacity: 0;
    }
`

const SubTextWrap = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 1;
    padding: 0 1rem;

    @media ${media.md} {
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
        top: 70%;
        position: absolute;
    }
`

const SubButtons = styled.div`
    opacity: 0;
    margin-top: 2rem;

    button, a {
        background-color: transparent;
        color: ${props => props.theme.colors.white};
        font-family: ${props => props.theme.font.family.bold};
        font-size: ${props => props.theme.font.size.lg};
        border: 0;

        &:hover {
            color: ${props => props.theme.colors.turquoise};
        }
    }
`

const ContactLink = styled(Link)`
    background-color: transparent;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.font.family.bold};
    font-size: ${props => props.theme.font.h4.size};
    margin-top: 2rem;
    width: 100%;

    @media ${media.md} {
        font-size: ${props => props.theme.font.h3.size};
    }
`

const ModalBodyStyled = styled(ModalBody)`
    @media ${media.sm} {
        padding: 0 2rem;
    }
    @media ${media.lg} {
        padding: 0 1rem;
    }
`

const ModalHeading = styled.h3`
    font-family: ${props => props.theme.font.family.bold};
    color: ${props => props.theme.colors.grey};

    @media ${media.sm} {
        font-size: 45px;
    }

    @media ${media.md} {
        font-size: 55px;
    }

    @media ${media.lg} {
        font-size: 75px;
    }
`

const ModalCopy = styled.p`
    font-family: ${props => props.theme.font.family.bold};
    color: ${props => props.theme.colors.grey};
    font-size: 20px;
    line-height: 1.25;

    @media ${media.sm} {
        font-size: 25px;
        line-height: 1.25;
    }

    @media ${media.lg} {
        font-size: 40px;
        line-height: 1.25;
    }
`

const ModalClose = styled.button`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    border: 0;
    width: 25px;
    height: 25px;
    padding: 0;

    @media ${media.sm} {
        bottom: -2rem;
    }

    &:after,
    &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.colors.white};
        transform: rotate(-45deg);
    }

    &:after {
        transform: rotate(45deg); 
    }
`

const Spotlight = styled.div`
    display: none;

    @media ${media.md} {
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        background-image: radial-gradient(
            circle,
            transparent 160px,
            rgba(0, 0, 0, 0.1) 200px
        );
    }
`

class LandingBlock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            text: false,
            logo: ""
        };
        this.masterLogoTimeline = new TimelineMax({ paused: true })
        this.setLogo = this.setLogo.bind(this)
        this.animation = this.animation.bind(this)
        this.play = this.play.bind(this)
        this.mouseMoveTilt = this.mouseMoveTilt.bind(this)
        this.orientationTilt = this.orientationTilt.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.updateText = this.updateText.bind(this)
    }

    componentDidMount() {
        // create animation
        this.setLogo()
        window.addEventListener('resize', this.setLogo)
        this.animation()
        this.play()
        
        if (window.DeviceOrientationEvent && window.innerWidth < 768) {
            window.addEventListener("deviceorientation", this.orientationTilt)
        } else {
            window.addEventListener('mousemove', this.mouseMoveTilt)
        }
    }

    componentWillUnmount() {
        // Kill on unmount
        this.masterLogoTimeline.kill()
        window.removeEventListener('mousemove', this.mouseMoveTilt)
        window.removeEventListener("deviceorientation", this.orientationTilt)
        window.removeEventListener('resize', this.setLogo)
    }

    setLogo() {
        if (typeof window !== 'undefined') {
            const logoSVG = window.innerWidth < 768 ? logoMobile : logo
            this.setState({ logo: logoSVG })
        }
    }

    play() {
        this.masterLogoTimeline.play()
    }

    animation() {
        const logoTimeline = new TimelineMax()
        const discoverTimeline = new TimelineMax()

        logoTimeline
            .from(this.logo, 0, { scale: 10, opacity: 0 })
            .to(this.logo, 1.5, { scale: 1, opacity: 1 })

        discoverTimeline
            .from(this.discover, 0, { opacity: 0})
            .to(this.discover, 1, { opacity: 1 })

        this.masterLogoTimeline
            .add(logoTimeline)
            .add(discoverTimeline)
    }

    mouseMoveTilt(e) {
        const tiltTimeline = new TimelineMax()

        // Detect mouse position
        let xPos = (e.clientX / window.innerWidth) - 0.5;
        let yPos = (e.clientY / window.innerHeight) - 0.5;

        // Tilt the hero container
        tiltTimeline.to(this.logoContainer, 0.6, { 
            rotationY: 15 * xPos, 
            rotationX: 15 * yPos, 
            ease: Power1.easeOut, 
            transformPerspective: 800, 
            transformOrigin: "center center",
        });

        // Spotlight over logo
        let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.1) 200px)';
        this.spotlight.style.backgroundImage = `radial-gradient(circle at ${e.clientX / window.innerWidth * 100}% ${e.clientY / window.innerHeight * 100}%, ${spotlightSize}`;
    }

    orientationTilt(e) {
        const tiltTimeline = new TimelineMax()
        let yPos = Math.round(e.gamma);

        if (yPos >= 0) {
            yPos = yPos < 10 ? yPos : 10;
        } else {
            yPos = yPos > - 10 ? yPos : - 10;
        }

        // Tilt the hero container
        tiltTimeline.to(this.logoContainer, 0.6, { 
            rotationY: yPos, 
            ease: Power1.easeOut, 
            transformPerspective: 800, 
            transformOrigin: "center center" 
        });
    }

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))

        const siteWrap = document.getElementById('site-content-wrap')
        siteWrap.classList.toggle('blur')
        siteWrap.classList.toggle('blur--large')

        const navToggle = document.getElementById('nav-toggle')
        navToggle.classList.toggle('d-none')
    }

    updateText() {
        this.setState({
            text: true
        })
    }

    render() {

        return (
            <LandingContainer fluid>
                <LogoContainer ref={logoContainer => this.logoContainer = logoContainer}>
                    <img src={this.state.logo} alt="Dewynters" ref={logo => this.logo = logo} />
                </LogoContainer>

                <Spotlight ref={spotlight => this.spotlight = spotlight} />

                <SubTextWrap>
                    {this.state.text && 
                        <ContactLink to="/contact/">
                            Want to talk? Say hello...
                        </ContactLink>
                    }
                    <SubButtons ref={discover => this.discover = discover}>
                        <button onClick={this.toggleModal}>Discover more</button>&nbsp;&nbsp;|&nbsp;&nbsp; <Link to="/our-work/">Our work</Link>
                    </SubButtons>
                </SubTextWrap>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} centered={true} onClosed={this.updateText}>
                    <ModalBodyStyled>
                        <ModalHeading>
                            Life is made of <span style={{ color: "white" }}>experiences</span>.
                        </ModalHeading>
                        <ModalCopy>
                            From those we share together at theatres, exhibitions, music, sport and live events to those we enjoy online wherever we are - every <span style={{ color: "white" }}>experience</span> matters. We deliver brands that engage, excite and entertain, designed by a global network of experts with an unrivalled passion, unlimited creativity and simply unparalleled <span style={{ color: "white" }}>experience</span>.
                        </ModalCopy>
                        <ModalClose aria-label="Close modal" onClick={this.toggleModal} />
                    </ModalBodyStyled>
                </Modal>
            </LandingContainer>
        )
    }

}

export default LandingBlock