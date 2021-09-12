export default function Video() {
    return (
        <section className="section-advices">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="/videos/video1.mp4" type="video/mp4" />
                        Your browser is not supported for this video!
                    </video>
                </div>
                <div className="u-center-text u-margin-bottom-small">
                    <h2 className="heading-secondary">
                        See Who Had a Great Time!
                    </h2>
                </div>
                <div className="row">
                    <div className="advice">
                        <figure className="advice__shape">
                            <img
                                className="advice__img"
                                src="https://images.unsplash.com/photo-1472618039048-d33f70f0777e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                alt="random stranger"
                            />
                            <figcaption className="advice__caption">
                                Mary Smith
                            </figcaption>
                        </figure>
                        <div className="advice__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                It's my third time traveling in Korea...
                            </h3>
                            <p className="paragraph">
                                For someone like me, it's all about food when it
                                comes to traveling, and Korea doesn't
                                disappoint!
                            </p>
                        </div>
                    </div>
                    <div className="advice">
                        <figure className="advice__shape">
                            <img
                                className="advice__img"
                                src="https://images.unsplash.com/photo-1582290390734-a7714ddf8667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                alt="random stranger 2"
                            />
                            <figcaption className="advice__caption">
                                Joe Smith
                            </figcaption>
                        </figure>
                        <div className="advice__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                It was my first time traveling in Asia...
                            </h3>
                            <p className="paragraph">
                                I couldn't believe how trendy and techy Korea
                                is! All-the-while they preserved the national
                                parks and the amazing castles. I'll definitely
                                come back again!
                            </p>
                        </div>
                    </div>
                </div>
                {/* end row */}
                <div className="u-center-text u-margin-bottom-big">
                    <a className="btn-text" href="#">
                        Read more ➡
                    </a>
                </div>
            </section>
    )
}