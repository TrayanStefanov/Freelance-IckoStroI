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
            <footer className={`footer bg-secondary text-primary justify-around border-t-2 border-primary block ${contactsStyle}`}>
                <div className="flex flex-row justify-between w-full px-4 md:px-10 my-4">
                    <div className="aspect-[3/1] md:max-w-[180px] lg:max-w-[240px] min-w-[120px]">
                        <Link to='/'>
                            <img src={t("navbar.logo")} className="w-40 lg:w-64 ml-4" alt="" />
                        </Link>
                    </div>
                    <aside className="self-center flex flex-col justify-around md:gap-2">
                        <div className="flex flex-col gap-2 md:gap-3 justify-center">
                            <p className="flex flex-row text-center items-center md:text-l lg:text-2xl indent-2 justify-center"><FiPhoneCall className="text-neutral text-2xl" />{t("footer.phone")}</p>
                            <p className="flex flex-row text-center items-center md:text-l lg:text-2xl indent-2 justify-center"><FiMail className="text-neutral text-2xl" />
                                <a href={`mailto:${email}`}>
                                    {email}
                                </a>
                            </p>
                        </div>
                        <p className="hidden md:block md:text-2xl justify-self-center mb-4 self-center">{t("footer.slogan")}</p>
                    </aside>
                    <aside className="self-center">
                        <div className="grid grid-flow-col gap-1 md:gap-4">
                            <a href={t("footer.social-links.linkedin")} aria-label="LinkedIn" className="text-4xl lg:text-5xl text-bold text-neutral"><TbBrandLinkedin /></a>
                            <a href={t("footer.social-links.facebook")} aria-label="Facebook" className="text-4xl lg:text-5xl text-bold text-neutral"><TbBrandFacebook /></a>
                            <a href={t("footer.social-links.instagram")} aria-label="Instagram" className="text-4xl lg:text-5xl text-bold text-neutral"><TbBrandInstagram /></a>
                        </div>
                    </aside>
                </div>
                <p className="justify-self-center self-center text-xl mb-4 md:hidden">{t("footer.slogan")}</p>
            </footer>
        </div>
    )

}

export default Footer;

