export default function SmGallery() {
    return (
        <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary" id="about-korea">
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
    )
}