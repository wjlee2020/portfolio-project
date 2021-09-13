export default function PopUp() {
    return (
        <div className="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img
                        src="https://images.unsplash.com/photo-1594373605483-9694c67f0db9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                        className="popup__img"
                        alt="tour photo" />
                    <img
                        src="https://images.unsplash.com/photo-1548115184-bc6544d06a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                        className="popup__img" 
                        alt="tour phot 2" />
                </div>
                <div className="popup__right">
                    <h2 className="heading-secondary u-margin-bottom-medium">
                        Book Now!
                    </h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read terms before booking</h3>
                    <p className="popup__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate ipsum vel feugiat cursus. Phasellus tristique eu elit sagittis pharetra. Suspendisse potenti. Duis id turpis sit amet leo varius molestie et nec eros. Aenean rutrum velit id vestibulum faucibus. Etiam posuere, turpis nec varius varius, ligula nisl vulputate felis, sed tristique metus risus et arcu. Quisque scelerisque condimentum nulla. Quisque mattis congue metus, nec pulvinar nunc pharetra et.</p>
                    <a className="btn btn__colored" href="#">Book Now</a>
                </div>
            </div>
        </div>
    )
}