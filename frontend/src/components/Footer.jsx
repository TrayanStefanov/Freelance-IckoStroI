import { Link, useLocation } from "react-router";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { TbBrandLinkedin, TbBrandFacebook, TbBrandInstagram } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const emailUser = "example";
    const emailDomain = "example.eu";
    const email = `${emailUser}@${emailDomain}`;

    const location = useLocation();
    const contactsStyle = location.pathname === "/contacts" ? "fixed bottom-0 left-0" : "";

    return (
        <div>
            <footer className={`footer bg-secondary text-primary justify-around border-t-2 border-primary hidden md:block ${contactsStyle}`}>
                <div className="flex flex-row justify-around w-full gap-6 px-6">
                    <div className="navbar-start aspect-[3/1] md:max-w-[180px] lg:max-w-[240px] min-w-[120px]">
                        <Link to='/'>
                            <img src={t("navbar.logo")} className="w-40 lg:w-64 ml-4" alt="" />
                        </Link>
                    </div>
                    <aside className="self-center">
                        <h6 className="footer-title text-neutral justify-self-center">{t("footer.social")}</h6>
                        <div className="grid grid-flow-col gap-4">
                            <a href={t("footer.social-links.linkedin")} aria-label="LinkedIn" className="text-4xl lg:text-5xl text-bold text-neutral"><TbBrandLinkedin /></a>
                            <a href={t("footer.social-links.facebook")} aria-label="Facebook" className="text-4xl lg:text-5xl text-bold text-neutral"><TbBrandFacebook /></a>
                            <a href={t("footer.social-links.instagram")} aria-label="Instagram" className="text-4xl lg:text-5xl text-bold text-neutral"><TbBrandInstagram /></a>
                        </div>
                    </aside>
                    <aside className="self-center flex flex-col justify-around">
                        <div className="flex flex-row gap-4">
                            <p className="flex flex-row text-center items-center md:text-l lg:text-2xl indent-2"><FiPhoneCall className="text-neutral text-2xl" />{t("footer.phone")}</p>
                            <p className="flex flex-row text-center items-center md:text-l lg:text-2xl indent-2"><FiMail className="text-neutral text-2xl" />
                                <a href={`mailto:${email}`} className="underline">
                                    {email}
                                </a>
                            </p>
                        </div>
                        <p className="md:text-l justify-self-center self-center">{t("footer.slogan")}</p>
                    </aside>
                </div>
            </footer>
            <footer className="footer bg-secondary text-primary p-2 justify-around border-t-2 border-primary gap-2 md:hidden">
                <div className="flex flex-row justify-between lg:justify-around gap-20 place-self-center">
                    <div className="navbar-start aspect-[3/1] md:max-w-[180px] min-w-[120px]">
                        <Link to='/'>
                            <img src={t("navbar.logo")} className="w-40 lg:w-64 ml-4" alt="" />
                        </Link>
                    </div>
                    <aside className="self-center">
                        <h6 className="footer-title text-neutral">{t("footer.social")}</h6>
                        <div className="grid grid-flow-col gap-4">
                            <a href={t("footer.social-links.linkedin")} aria-label="LinkedIn" className="text-4xl text-bold text-neutral"><TbBrandLinkedin /></a>
                            <a href={t("footer.social-links.facebook")} aria-label="Facebook" className="text-4xl text-bold text-neutral"><TbBrandFacebook /></a>
                            <a href={t("footer.social-links.instagram")} aria-label="Instagram" className="text-4xl text-bold text-neutral"><TbBrandInstagram /></a>
                        </div>
                    </aside>
                </div>
                <aside className="self-center flex  gap-16 place-self-center">
                    <p className="flex flex-row text-center items-center indent-2"><FiPhoneCall className="text-neutral text-2xl" />{t("footer.phone")}</p>
                    <p className="flex flex-row text-center items-center indent-2"><FiMail className="text-neutral text-2xl" />
                        <a href={`mailto:${email}`} className="underline">
                            {email}
                        </a>
                    </p>
                </aside>
                <p className="justify-self-center self-center">{t("footer.slogan")}</p>
            </footer>
        </div>
    )

}

export default Footer;

