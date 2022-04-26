import { useState } from "react";

type closeProps = {
    closeMenu: any,
}

export default function MenuMobile({ closeMenu }: closeProps) {
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);

    return (
        <div className="backdrop">
            <div className="menu-mobile">
                <a onClick={() => closeMenu(false)} href="#" className="close-menu d-flex justify-content-end"><img src="/images/icon-close-menu.svg" alt="close menu" /></a>

                <ul className="list-unstyled d-flex flex-column gap-2">
                    <li role='button' onClick={() => setShowFirst(!showFirst)}>Features <span><img src={showFirst ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} alt="" /></span>
                        <ul className={showFirst ? "d-block" : "d-none"}>
                            <li className="list-drop"><span><img src="/images/icon-todo.svg" alt="icon todo" /></span><a href="#">Todo List</a></li>
                            <li className="list-drop"><span><img src="/images/icon-calendar.svg" alt="icon calendar" /></span><a href="#">Calendar</a></li>
                            <li className="list-drop"><span><img src="/images/icon-reminders.svg" alt="icon reminder" /></span><a href="#">Reminders</a></li>
                            <li className="list-drop"><span><img src="/images/icon-planning.svg" alt="icon planning" /></span><a href="#">Planning</a></li>
                        </ul>
                    </li>

                    <li role='button' onClick={() => setShowSecond(!showSecond)}>Company <span><img src={showSecond ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} alt="" /></span>
                        <ul className={showSecond ? "d-block" : "d-none"}>
                            <li className="list-drop"><a href="#">History</a></li>
                            <li className="list-drop"><a href="#">Our team</a></li>
                            <li className="list-drop"><a href="#">Blog</a></li>
                        </ul>
                    </li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>

                <div className="d-flex flex-column">
                    <a href="#" className="btn">Login</a>
                    <a href="#" className="btn btn-outline-secondary">Register</a>
                </div>
            </div>
        </div>
    );
}