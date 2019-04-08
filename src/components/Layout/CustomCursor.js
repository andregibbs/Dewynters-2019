import React, { Component } from "react"
import { TweenMax } from "gsap/all"
import styled from "styled-components"

const Cursor = styled.div`
    position: absolute;
    background-color: #fff;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    z-index: 1;
    transition: 0.3s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
        0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
    user-select: none;
    pointer-events: none;
    z-index: 10000;
    transform: scale(1);

    &.hovered {
        opacity: 0.08;
    }
`

const CursorFollower = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    width: 30px;
    height: 30px;
    border-radius: 100%;
    z-index: 1;
    transition: 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
        0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
    user-select: none;
    pointer-events: none;
    z-index: 10000;
    transform: translate(5px, 5px);
    
    &.active {
        opacity: 1;
        transform: scale(1.5);
        background-color: rgba(0, 228, 225, 0.3);
    }

    &.hovered {
        opacity: 0.08;
    }
`

class CustomCursor extends Component {

    constructor(props) {
        super(props)
        this.createCursor = this.createCursor.bind(this)
    }

    componentDidMount() {
        this.createCursor()
    }

    createCursor() {
        const cursor = this.cursor,
            cursorFollower = this.cursorFollower;

        let posX = 0,
            posY = 0;

        let mouseX = 0,
            mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
        })

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 10;
                posY += (mouseY - posY) / 10;

                TweenMax.set(cursorFollower, {
                    css: {
                        left: posX - 17,
                        top: posY - 17 
                    }
                });

                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });
            }
        });


        let anchors = document.getElementsByTagName("A");
        let buttons = document.getElementsByTagName("BUTTON");

        if (anchors) {
            for (let i = 0; i < anchors.length; i++) {
                anchors[i].addEventListener("mouseenter", () => {
                    cursor.classList.add("active");
                    cursorFollower.classList.add("active");
                    console.log('hovered')
                });
            }
            for (let i = 0; i < anchors.length; i++) {
                anchors[i].addEventListener("mouseleave", () => {
                    cursor.classList.remove("active");
                    cursorFollower.classList.remove("active");
                });
            }
        };
        
        if (buttons) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("mouseenter", () => {
                    cursor.classList.add("active");
                    cursorFollower.classList.add("active");
                });
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("mouseleave", () => {
                    cursor.classList.remove("active");
                    cursorFollower.classList.remove("active");
                });
            }
        };

    }

    render() {
        return (
            <>
                <Cursor ref={cursor => this.cursor = cursor} />
                <CursorFollower ref={cursorFollower => this.cursorFollower = cursorFollower} />
            </>
        )
    }
}


export default CustomCursor