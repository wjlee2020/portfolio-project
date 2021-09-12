export default function PopUpCards() {
    return (
        <section className="section-features">
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="fas fa-globe-asia feature-box__icon"></i>
                            <h3 className="heading-tertiary">서울</h3>
                            <p className="feature-box__text">
                                Seoul, an international Hub where you can find
                                just about everything. Street food to fine
                                dining, enjoy the city life!
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="fas fa-mountain feature-box__icon"></i>
                            <h3 className="heading-tertiary">설악산</h3>
                            <p className="feature-box__text">
                                Gangwon-Do Province's major attraction,
                                Seoraksan, is sometimes considered the backbone
                                of South Korea due to the spine-like peaks.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="fas fa-umbrella-beach feature-box__icon"></i>
                            <h3 className="heading-tertiary">해운대</h3>
                            <p className="feature-box__text">
                                Haeundae is the famous beach in Busan as well as
                                one of the most wealthiest districts in Korea.
                                Go for the beach, or the fresh seafood!
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="fas fa-vihara feature-box__icon"></i>
                            <h3 className="heading-tertiary">해인사</h3>
                            <p className="feature-box__text">
                                Our favorite temple in Korea, HaeInSa is one of
                                the most important temples in South Korea as it
                                is one of the Three Jewel Temples.
                            </p>
                        </div>
                    </div>
                </div>
                {/* end row */}
            </section>
    )
}