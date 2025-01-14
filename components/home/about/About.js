import React from 'react'
import aboutstyles from "../../../styles/About.module.css"
const About = () => {
    return (

        <section className={aboutstyles.about} id="about">

            <div className={aboutstyles.image}>
                <img src="image/about-img.svg" alt="" />
            </div>

            <div className={aboutstyles.content}>
                <h3>about <span>us?</span></h3>
                <p> As an aspiring writer seeking to enter the animation industry I seek to weave stories and tales that I can be proud of showing to the world. Get lost in the worlds created in my own head quite often. Come by and hear a tale; maybe you might stick around for another in the near future</p>
                <a href="/about.html" className={aboutstyles.btn}>read more</a>
            </div>

        </section>
    )
}

export default About
