import { useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css"

//This is the top navigation bar component
function Navbar({ modaldisplay, cartcount }) {
    const [toggle, toggler] = useState(false)
    const [menutoggle, menutoggler] = useState(false)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" onClick={() => { menutoggler(!menutoggle) }}></span>
                </button>
                <div className={`collapse navbar-collapse show}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle ${toggle ? "show" : ""}`} role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => { toggler(!toggle) }}>
                                Shop
                            </a>
                            <ul className={`dropdown-menu ${toggle ? "show" : ""}`}>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <button className="btn btn-outline-dark" type="submit" onClick={modaldisplay}>
                        <i className="bi bi-cart-fill me-1"></i>
                        {` Cart `}
                        <span className="badge bg-dark text-white ms-1 rounded-pill" >{cartcount.length}</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;