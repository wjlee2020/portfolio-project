export default function Navigation() {
    return (
        <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        <label className="navigation__button" htmlFor="navi-toggle">
            <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <a className="navigation__link" href="#">About Korea</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#">My Picks</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#">Recommendations</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#">Stories</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#">Inquiry</a>
                </li>
            </ul>
        </nav>
    </div>
    )
}