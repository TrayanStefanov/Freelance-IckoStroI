
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


const Navbar = () => {
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const isActive = (path) =>
    location.pathname === path
      ? "text-accent font-bold"
      : "";

    return (
        <div className="navbar bg-secondary justify-between z-50 shadow-md  border-b-2 border-primary fixed">
            <div className="navbar-start aspect-3/1 md:max-w-[180px] lg:max-w-[240px] min-w-[120px]">
                <Link to='/'>
                    <img src={t("navbar.logo")} className="w-40 lg:w-64 ml-4" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal md:text-l lg:text-xl text-primary items-center">
                    <li className="px-1 ps-4"><Link className={`hover:bg-neutral hover:text-neutral-content px-2 py-1 ${isActive("/")}`}  to='/'>{t("navbar.home")}</Link></li>
                    <li className="px-1"><Link className={`hover:bg-neutral hover:text-neutral-content px-2 py-1 ${isActive("/about")}`} to='/about'>{t("navbar.about")}</Link></li>
                    <li className="px-1"><Link className={`hover:bg-neutral hover:text-neutral-content px-2 py-1 ${isActive("/projects")}`} to='/projects'>{t("navbar.projects")}</Link></li>
                    <li className="px-1"><Link className={`hover:bg-neutral hover:text-neutral-content px-2 py-1 ${isActive("/services")}`} to='/services'>{t("navbar.services")}</Link></li>
                    <li className="px-1"><Link className={`hover:bg-neutral hover:text-neutral-content px-2 py-1 ${isActive("/contacts")}`} to='/contacts'>{t("navbar.contacts")}</Link></li>
                    <li className="px-1"><LanguageSelector /></li>
                </ul>
            </div>
            <div className="navbar-end w-auto hover:bg-neutral hover:text-neutral-content border border-primary-content rounded-lg">
                <div className="dropdown relative">
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
                        className="menu dropdown-content bg-secondary p-0 text-primary z-[1] absolute top-[110%] min-w-[100vw] lg:min-w-[25vw] right-[-8px] border border-l-0 border-r-0 border-primary">
                        <li className="border-b border-primary px-3 hover:bg-neutral hover:text-neutral-content"><Link to='/'>{t("navbar.home")}</Link></li>
                        <li className="border-b border-primary px-3 hover:bg-neutral hover:text-neutral-content"><Link to='/about'>{t("navbar.about")}</Link></li>
                        <li className="border-b border-primary px-3 hover:bg-neutral hover:text-neutral-content"><Link to='/projects'>{t("navbar.projects")}</Link></li>
                        <li className="border-b border-primary px-3 hover:bg-neutral hover:text-neutral-content"><Link to='/services'>{t("navbar.services")}</Link></li>
                        <li className="border-b border-primary px-3 hover:bg-neutral hover:text-neutral-content"><Link to='/contacts'>{t("navbar.contacts")}</Link></li>
                        <li className="mt-2"><LanguageSelector /></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;