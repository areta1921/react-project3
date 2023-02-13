import React from 'react'
import classes from './testimonials.module.css'
import img1 from '../assets/ab.webp'
import img2 from '../assets/ac.jpeg'
import img3 from '../assets/af.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css/free-mode'
import 'swiper/css'

const Testimonials = () => {
    return (
        <section id="testimonials" className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.titles}>
                    <h5 className={classes.subtitle}>Satisfied clients</h5>
                    <h2 className={classes.title}>Testimonials</h2>
                    <div className={classes.testimonialsContainer}>
                        <Swiper
                          freeMode={true}
                          grabCursor={true}
                          modules={[FreeMode]}
                          className="testimonials"
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                            <SwiperSlide className='testimonial'>
                                <p className={classes.desc}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nam distinctio molestiae, iste sapiente earum porro deleniti adipisci,
                                    provident voluptates unde, ipsam quam! Ad, id asperiores.
                                    Quasi quam explicabo maiores quisquam!
                                </p>
                                <div className={classes.bottom}>
                                    <img src={img1} className={classes.img} style={{ height: '100px' }} />
                                    <h2>John Doe</h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='testimonial'>
                                <p className={classes.desc}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nam distinctio molestiae, iste sapiente earum porro deleniti adipisci,
                                    provident voluptates unde, ipsam quam! Ad, id asperiores.
                                    Quasi quam explicabo maiores quisquam!
                                </p>
                                <div className={classes.bottom}>
                                    <img src={img2} className={classes.img} style={{ height: '100px' }} />
                                    <h2>John Doe</h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='testimonial'>
                                <p className={classes.desc}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nam distinctio molestiae, iste sapiente earum porro deleniti adipisci,
                                    provident voluptates unde, ipsam quam! Ad, id asperiores.
                                    Quasi quam explicabo maiores quisquam!
                                </p>
                                <div className={classes.bottom}>
                                    <img src={img3} className={classes.img} style={{ height: '100px' }} />
                                    <h2>John Doe</h2>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials