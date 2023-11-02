import { FC } from "react";
import './Header.scss';
import logo_1 from '../../pages/logo_1.png';

export const Header: FC = () => {
    const headerButtons = [
        {title: "ГОЛОВНА", href: ""},
        {title: "ОСВІТНІЙ ПРОЦЕСС", href: ""},
        {title: "МЕТОДИЧНА РОБОТА", href: ""},
        {title: "СТУДЕНТУ", href: ""},
        {title: "АБІТУРІЄНТУ", href: ""}
    ]
    return(
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={logo_1} className="header__logo_1" />
                </div>
                <nav className="header__navigation">
                    <ul className="header__catalog__of__buttons">
                        {
                            headerButtons.map((element) =>
                                <li className="header__li"><a href={element.href} className="header__button">{element.title}</a></li>
                            )}
                    </ul>
                </nav>
            </div>
        </header>
    ) 
}
