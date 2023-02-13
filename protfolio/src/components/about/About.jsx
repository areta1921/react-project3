import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import manImg from '../assets/ad.jpg'
import classes from './about.module.css'
import { init } from 'ityped'

const Hero = () => {
  const titleRef = useRef()

  useEffect(() => {
    init(titleRef.current, {
      backDelay: 1000,
      showCursor: true,
      strings: ['Villy', 'a Web Developer', 'a YouTuber']
    })
  }, [])

  return (
    <section id="about" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Hi, I am <span ref={titleRef}></span></h2>
          <h4 className={classes.subtitle}>Full Stack Developer</h4>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nemo, asperiores et? Neque iusto iure, perspiciatis excepturi similique
            assumenda modi laboriosam reiciendis deserunt cupiditate
            facilis inventore minima tempora quidem ullam laborum!
          </p>
          <div className={classes.buttons}>
            <button>Contact me</button>
            <button className={classes.seeMoreBtn}>See more <AiOutlineArrowDown /></button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manImg} />
        </div>
      </div>
    </section>
  )
}

export default Hero