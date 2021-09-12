import { useState } from 'react';

export default function ActionForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    return (
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
    )
}