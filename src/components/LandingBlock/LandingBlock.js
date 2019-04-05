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
   
    @media ${media.md} {
        padding: 0 2rem;
    }

    img {
        width: 100%;
        transform: scale(10);
        opacity: 0;
    }
`

const ModalButton = styled.button`
    background-color: transparent;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.font.family.bold};
    font-size: ${props => props.theme.font.size.lg};
    border: 0;
    opacity: 0;
    margin-top: 2rem;

    @media ${media.md} {
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
        top: 70%;
        position: absolute;
    }
`

const ContactLink = styled(Link)`
    background-color: transparent;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.font.family.bold};
    font-size: ${props => props.theme.font.h3.size};
    margin-top: 2rem;

    @media ${media.md} {
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
        top: 70%;
        position: absolute;
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
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    border: 0;
    width: 25px;
    height: 25px;
    cursor: pointer;
    padding: 0;

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

class LandingBlock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            text: false
        };
        this.masterLogoTimeline = new TimelineMax({ paused: true })
        this.animation = this.animation.bind(this)
        this.play = this.play.bind(this)
        this.mouseMoveTilt = this.mouseMoveTilt.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.updateText = this.updateText.bind(this)
    }

    componentDidMount() {
        // create animation
        this.animation()
        this.play()
        window.addEventListener('mousemove', this.mouseMoveTilt)
    }

    componentWillUnmount() {
        // Kill on unmount
        this.masterLogoTimeline.kill()
        window.removeEventListener('mousemove', this.mouseMoveTilt)
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
        var xPos = (e.clientX / window.innerWidth) - 0.5;
        var yPos = (e.clientY / window.innerHeight) - 0.5;

        // Tilt the hero container
        tiltTimeline.to(this.logoContainer, 0.6, { 
            rotationY: 15 * xPos, 
            rotationX: 15 * yPos, 
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
    }

    updateText() {
        this.setState({
            text: true
        })
    }

    render() {
        return (
            <LandingContainer fluid>
                <LogoContainer ref={logoContainer => this.logoContainer = logoContainer} >
                    <picture>
                        <source srcSet={logo} media="(min-width: 768px)" />
                        <img src={logoMobile} alt="Dewynters" ref={logo => this.logo = logo} />
                    </picture>
                </LogoContainer>

                {/* {this.state.text ? (
                    <ContactLink to="/contact/">
                        Want to talk? Say hello...
                    </ContactLink>
                ) : (
                  
                )} */}

                <ModalButton onClick={this.toggleModal} ref={discover => this.discover = discover}>
                    Discover more
                </ModalButton>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} centered={true}>
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