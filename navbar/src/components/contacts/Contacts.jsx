import React from 'react'
import classes from './contacts.module.css'

const Contacts = () => {
    return (
        <section id="contacts"  className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.titles}>
                    <h5 className={classes.subtitle}>Where to find me</h5>
                    <h2 className={classes.title}>Contacts</h2>
                </div>
                <div className={classes.sides}>
                    <div className={classes.left}>
                        <div className={classes.cards}>
                            <div className={classes.left}>
                                <div className={classes.card}>
                                    <span>Phone <i class="ri-phone-line"></i></span>
                                    <span>+123 456 789</span>
                                </div>
                                <div className={classes.card}>
                                    <span>Email <i class="ri-mail-line"></i></span>
                                    <span>gmail@gmail.com</span>
                                </div>
                            </div>

                            <div className={classes.right}>
                                <div className={classes.card}>
                                    <span>YouTube <i class="ri-youtube-line"></i></span>
                                    <span>WebDevMania</span>
                                </div>
                                <div className={classes.card}>
                                    <span>Location <i class="ri-map-pin-line"></i></span>
                                    <span>Bulgaria</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <form>
                            <input type="text" placeholder='Topic...' />
                            <input type="email" placeholder='Your email...' />
                            <textarea placeholder='Message...' />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts