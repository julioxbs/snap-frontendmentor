import { useState } from "react";
import MenuMobile from "./MenuMobile";

export default function Navigation() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return(
        <nav className="d-flex p-3 mx-3 gap-3 align-items-center">
            <picture className="me-5">
                <img src="images/logo.svg" alt="logo" className="logo" />
            </picture>

            <ul className="primary-nav list-unstyled d-md-flex d-none me-auto p-0 m-0">
                <li onClick={() => setIsOpen1(!isOpen1)}>
                    Features <span><img src={isOpen1 ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"}/></span>
                    <ul className={isOpen1 ? "dropdown-menu p-0 m-0 gap-3 show" : "dropdown-menu p-0 m-0 gap-3"}>
                        <li className="list-drop"><span><img src="/images/icon-todo.svg" alt="icon todo" /></span><a href="#">Todo List</a></li>
                        <li className="list-drop"><span><img src="/images/icon-calendar.svg" alt="icon calendar" /></span><a href="#">Calendar</a></li>
                        <li className="list-drop"><span><img src="/images/icon-reminders.svg" alt="icon reminder" /></span><a href="#">Reminders</a></li>
                        <li className="list-drop"><span><img src="/images/icon-planning.svg" alt="icon planning" /></span><a href="#">Planning</a></li>
                    </ul>
                </li>

                <li onClick={() => setIsOpen2(!isOpen2)}>
                    Company <span><img src={isOpen2 ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"}/></span>
                    <ul className={isOpen2 ? "dropdown-menu p-0 m-0 gap-3 show" : "dropdown-menu p-0 m-0 gap-3"}>
                        <li className="list-drop"><a href="#">History</a></li>
                        <li className="list-drop"><a href="#">Our team</a></li>
                        <li className="list-drop"><a href="#">Blog</a></li>
                    </ul>
                </li>
                
                <li>Careers</li>
                <li>About</li>
            </ul>

            <div className="buttons d-md-flex d-none p-0">
                <a href="#" className="btn">Login</a>
                <a href="#" className="btn btn-outline-secondary">Register</a>
            </div>

            <div className="menu-btn d-block d-md-none ms-auto" onClick={() => setIsActive(true)}>
                <a href="#"><img src="images/icon-menu.svg" alt="menu-btn" /></a>
            </div>

            {/* Menu Mobile */}
            {isActive && <MenuMobile closeMenu={setIsActive} />}
        </nav>
    );
}