import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsOpen(false); // close dropdown when route changes
    }, [location.pathname]);

    const isActive = (path) =>
        location.pathname === path ? "text-accent font-bold" : "";

    // Variants for staggered animation
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
        exit: { opacity: 0, y: -20 },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="navbar bg-secondary z-50 shadow-md border-b-2 border-primary fixed justify-between">
            <div className="navbar-start aspect-[3/1] md:max-w-[180px] lg:max-w-[240px] min-w-[120px]">
                <Link to='/'>
                    <img src={t("navbar.logo")} className="w-40 lg:w-64 ml-4" alt="" />
                </Link>
            </div>
            <div className="navbar-end w-[70vw]">
                {/* Desktop menu */}
                <div className="hidden md:flex xl:me-20 2xl:me-40">
                    <ul className="menu menu-horizontal md:text-l lg:text-xl text-primary items-center">
                        <li className="px-1 ps-4"><Link className={`hover:bg-neutral hover:text-neutral-content px-2 py-1 ${isActive("/")}`} to='/'>{t("navbar.home")}</Link></li>
                        <li className="px-1"><Link className={`hover:bg-neutral hover:text-neutral-content px-2 py-1 ${isActive("/about")}`} to='/about'>{t("navbar.about")}</Link></li>
                        <li className="px-1"><Link className={`hover:bg-neutral hover:text-neutral-content px-2 py-1 ${isActive("/projects")}`} to='/projects'>{t("navbar.projects")}</Link></li>
                        <li className="px-1"><Link className={`hover:bg-neutral hover:text-neutral-content px-2 py-1 ${isActive("/services")}`} to='/services'>{t("navbar.services")}</Link></li>
                        <li className="px-1"><Link className={`hover:bg-neutral hover:text-neutral-content px-2 py-1 ${isActive("/contacts")}`} to='/contacts'>{t("navbar.contacts")}</Link></li>
                        <li className="px-1"><LanguageSelector /></li>
                    </ul>
                </div>

                {/* Mobile burger */}
                <div className="block md:hidden">
                    <button
                        className="relative z-50 p-2 border border-primary-content rounded-lg"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {/* Morphing burger icon -> X */}
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={isOpen ? "open" : "closed"}
                        >
                            <motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                variants={{
                                    closed: { d: "M4 6h16" },
                                    open: { d: "M6 18L18 6" },
                                }}
                            />
                            <motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                variants={{
                                    closed: { d: "M4 12h16", opacity: 1 },
                                    open: { opacity: 0 },
                                }}
                            />
                            <motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                variants={{
                                    closed: { d: "M4 18h16" },
                                    open: { d: "M6 6l12 12" },
                                }}
                            />
                        </motion.svg>
                    </button>

                    {/* Backdrop + Dropdown */}
                    <AnimatePresence>
                        {isOpen && (
                            <>
                                {/* Backdrop blur */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                                    onClick={() => setIsOpen(false)}
                                />

                                {/* Dropdown menu */}
                                <motion.ul
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    variants={menuVariants}
                                    className="menu absolute top-[100%] right-0 bg-secondary text-primary z-50 w-screen border border-primary p-4"
                                >
                                    {[
                                        { path: "/", label: t("navbar.home") },
                                        { path: "/about", label: t("navbar.about") },
                                        { path: "/projects", label: t("navbar.projects") },
                                        { path: "/services", label: t("navbar.services") },
                                        { path: "/contacts", label: t("navbar.contacts") },
                                    ].map(({ path, label }) => (
                                        <motion.li
                                            key={path}
                                            variants={itemVariants}
                                            className="border-b border-primary px-3 hover:bg-neutral hover:text-neutral-content"
                                        >
                                            <Link to={path}>{label}</Link>
                                        </motion.li>
                                    ))}
                                    <motion.li variants={itemVariants} className="mt-2">
                                        <LanguageSelector />
                                    </motion.li>
                                </motion.ul>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
