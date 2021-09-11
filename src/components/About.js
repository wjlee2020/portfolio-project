import { useState } from "react";

export default function About() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Places to Go, Food to Eat
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Places to Go
                        </h3>
                        <p className="paragraph">
                            부산 - 서울, 경주 - 전주, 강릉 - 목포. Mountains to
                            seaside, go visit all the provinces to see diverse
                            Korea!
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Food to Eat
                        </h3>
                        <p className="paragraph">
                            김치의 맛! Kimchi comes in varieties and can taste
                            different depending on the province. Find out the
                            local favorites!
                        </p>
                        <a className="btn-text" href="#">
                            Learn more ➡
                        </a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img
                                className="composition__photo composition__photo-1"
                                src="https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                                alt="Seoul Hanok Village"
                            />
                            <img
                                className="composition__photo composition__photo-2"
                                src="https://images.unsplash.com/photo-1529883406927-e996c9ae3353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                alt="Andong"
                            />
                            <img
                                className="composition__photo composition__photo-3"
                                src="https://images.unsplash.com/photo-1597409114326-4bb9acf04d09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1097&q=80"
                                alt="Busan"
                            />
                        </div>
                    </div>
                </div>
            </section>
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
            <section className="section-journey">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Recommended Destinations
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side__front">
                                <div className="card__picture card__picture-1"></div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span-1">
                                        Seoul
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>동대문</li>
                                        <li>광화문</li>
                                        <li>광장시장</li>
                                        <li>북촌마을</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side__back card__side__back-1">
                                <div className="card__cta">
                                    <div className="card__info-box">
                                        <p className="card__info-direction">
                                            get there by
                                        </p>
                                        <p className="card__info-mode">
                                            Trains
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn__white">
                                        Go Now!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side__front">
                                <div className="card__picture card__picture-2"></div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span-2">
                                        JejuDo
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>성산일출봉</li>
                                        <li>해양도립공원</li>
                                        <li>사려니숲길</li>
                                        <li>월정리해변</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side__back card__side__back-2">
                                <div className="card__cta">
                                    <div className="card__info-box">
                                        <p className="card__info-direction">
                                            get there by
                                        </p>
                                        <p className="card__info-mode">
                                            Trains
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn__white">
                                        Go Now!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side__front">
                                <div className="card__picture card__picture-3"></div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span-3">
                                        GyeongJu
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>불국사</li>
                                        <li>천마총</li>
                                        <li>양종민속마을</li>
                                        <li>동궁과월지</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side__back card__side__back-3">
                                <div className="card__cta">
                                    <div className="card__info-box">
                                        <p className="card__info-direction">
                                            get there by
                                        </p>
                                        <p className="card__info-mode">
                                            Trains
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn__white">
                                        Go Now!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end row */}
                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn btn__colored">
                        Discover More
                    </a>
                </div>
            </section>
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
            <section className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form method="post" className="form">
                                <div className="u-margin-bottom-small">
                                    <h2 className="heading-secondary">
                                        Send an Inquiry
                                    </h2>
                                </div>
                                <div className="form__group">
                                    <input
                                        className="form__input"
                                        type="text"
                                        required
                                        id="fullName"
                                        placeholder="Full Name"
                                        aria-label="full name input"
                                        value={fullName}
                                        onChange={({ target }) =>
                                            setFullName(target.value)
                                        }
                                    />
                                    <label
                                        className="form__label"
                                        for="fullName"
                                    >
                                        Full Name
                                    </label>
                                </div>
                                <div className="form__group">
                                    <input
                                        className="form__input"
                                        type="email"
                                        required
                                        id="email"
                                        placeholder="Email Address"
                                        aria-label="email input"
                                        value={email}
                                        onChange={({ target }) =>
                                            setEmail(target.value)
                                        }
                                    />
                                    <label className="form__label" for="email">
                                        Email Address
                                    </label>
                                </div>
                                <div className="form__group u-margin-bottom-medium">
                                    <div className="form__radio-group">
                                        <input
                                            className="form__radio-input"
                                            type="radio"
                                            id="short"
                                            name="length"
                                        />
                                        <label
                                            for="short"
                                            className="form__radio-label"
                                        >
                                            <span className="form__radio-btn"></span>
                                            Short Trip
                                        </label>
                                    </div>
                                    <div className="form__radio-group">
                                        <input
                                            name="length"
                                            className="form__radio-input"
                                            type="radio"
                                            id="long"
                                        />
                                        <label
                                            for="long"
                                            className="form__radio-label"
                                        >
                                            <span className="form__radio-btn"></span>
                                            Long Trip
                                        </label>
                                    </div>
                                </div>
                                <div className="form__group">
                                    <button className="btn btn__colored">
                                        Next Step
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* end row */}
            </section>
        </main>
    );
}
