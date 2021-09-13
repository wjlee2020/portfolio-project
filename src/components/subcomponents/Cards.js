export default function Cards() {
    return (
        <section className="section-journey" id="section-tours">
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
                            <a href="#popup" className="btn btn__white">
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
                            <a href="#popup" className="btn btn__white">
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
                            <a href="#popup" className="btn btn__white">
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
    )
}