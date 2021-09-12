import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header__logo-box">
                    <img
                        className="header__logo"
                        src="https://images.unsplash.com/photo-1570191913384-7b4ff11716e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        alt="kimchi"
                    />
                </div>
                <div className="header__title-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary__main">
                            ㄷㅎㅁㄱㅁㅅ
                        </span>
                        <span className="heading-primary__sub">
                            Welcome to Korea
                        </span>
                    </h1>
                    <a className="btn btn__white" href="#">
                        Explore
                    </a>
                </div>
            </header>
            
            {/* <section className="grid-test">
                <div className="row">
                    <div className="col-1-of-2">Col 1 of 2</div>
                    <div className="col-1-of-2">Col 1 of 2</div>
                </div>
                <div className="row">
                    <div className="col-1-of-3">Col 1 of 3</div>
                    <div className="col-1-of-3">Col 1 of 3</div>
                    <div className="col-1-of-3">Col 1 of 3</div>
                </div>
                <div className="row">
                    <div className="col-1-of-3">Col 1 of 3</div>
                    <div className="col-2-of-3">Col 2 of 3</div>
                </div>
                <div className="row">
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-1-of-4">Col 1 of 4</div>
                </div>
                <div className="row">
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-2-of-4">Col 2 of 4</div>
                </div>
                <div className="row">
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-3-of-4">Col 3 of 4</div>
                </div>
            </section> */}
        </>
    );
}
