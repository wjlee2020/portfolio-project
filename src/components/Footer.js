import PopUp from "./subcomponents/PopUp";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img 
                    src="https://images.unsplash.com/photo-1536221563919-37c841f1f945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                    alt="footer-logo"
                    className="footer__logo" />
            </div>
            <div className="row footer__row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">About</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Contact</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Career</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Privacy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built By <a href="#" className="footer__link">LWJ</a> <br/>
                        Copyright &copy; by LWJ
                    </p>
                </div>
            </div>
        </footer>
    )
}