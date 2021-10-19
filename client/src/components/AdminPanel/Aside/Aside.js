import './Aside.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Aside = () => {
    const [activeSideBar, setSideBarActive] = useState(true);
    function setAsideBarState() {
        setSideBarActive(!activeSideBar);
    }
    return (
        <section className="aside-navigation">

            {/* <i class="fab fa-adn test-icon" onClick={setAsideBarState}></i> */}
            <aside className={activeSideBar ? "showAside" : "hideAside"}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/admin-panel">
                                <i className="fas fa-tachometer-alt admin-panel-icon"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/tables">
                                <i className="far fa-edit admin-panel-icon"></i>
                                Tables
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/manage/daily-menu">
                                <i className="fas fa-pizza-slice admin-panel-icon"></i>
                                Manage Daily Menu
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/dashboard">
                                <i className="fas fa-tachometer-alt admin-panel-icon"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/dashboard">
                                <i className="fas fa-tachometer-alt admin-panel-icon"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/dashboard">
                                <i className="fas fa-tachometer-alt admin-panel-icon"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/dashboard">
                                <i className="fas fa-tachometer-alt admin-panel-icon"></i>
                                Dashboard
                            </Link>
                        </li>


                    </ul>
                </nav>
            </aside>
        </section>
    )

}

export default Aside;