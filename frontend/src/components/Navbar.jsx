
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";


const Navbar = () => {
    const { t } = useTranslation();

    return (
        <div className="navbar bg-secondary justify-between z-50 shadow-md  border-b-2 border-primary">
            <div className="navbar-start aspect-3/1 max-w-[240px] min-w-[120px]">
                <Link to='/'>
                    <img src={t("navbar.logo")} className="w-64 ml-4" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal md:text-l lg:text-xl text-primary items-center">
                    <li className="px-1 ps-4"><Link className="px-2 py-1" to='/'>{t("navbar.home")}</Link></li>
                    <li className="px-1"><Link className="px-2 py-1" to='/about'>{t("navbar.about")}</Link></li>
                    <li className="px-1"><Link className="px-2 py-1" to='/projects'>{t("navbar.projects")}</Link></li>
                    <li className="px-1"><Link className="px-2 py-1" to='/services'>{t("navbar.services")}</Link></li>
                    <li className="px-1"><Link className="px-2 py-1" to='/contacts'>{t("navbar.contacts")}</Link></li>
                    <li className="px-1"><LanguageSelector /></li>
                </ul>
            </div>
            <div className="navbar-end w-auto">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content bg-secondary text-primary z-[1] mt-5 min-w-[25vw] right-[-8px] shadow border border-primary">
                        <li><Link to='/'>{t("navbar.home")}</Link></li>
                        <li><Link to='/about'>{t("navbar.about")}</Link></li>
                        <li><Link to='/projects'>{t("navbar.projects")}</Link></li>
                        <li><Link to='/services'>{t("navbar.services")}</Link></li>
                        <li><Link to='/contacts'>{t("navbar.contacts")}</Link></li>
                        <li><LanguageSelector /></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;