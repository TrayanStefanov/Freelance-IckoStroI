import { Link } from "react-router";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { TbBrandLinkedin, TbBrandFacebook, TbBrandInstagram } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const emailUser = "example";
    const emailDomain = "example.eu";
    const email = `${emailUser}@${emailDomain}`;

    return (
        <footer className="footer bg-secondary text-primary p-6 justify-around border-t-2 border-primary gap-1 md:gap-4">
            <div className="flex flex-row justify-between lg:justify-around w-[70vw] md:w-full">
                <aside className="self-center navbar-start aspect-3/1 max-w-[400px] min-w-[200px]">
                    <Link to='/'>
                        <img src={t("navbar.logo")} className="w-64 lg:w-96 ml-4" alt="" />
                    </Link>
                </aside>
                <aside className="self-center">
                    <h6 className="footer-title text-neutral">{t("footer.social")}</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href={t("footer.social-links.linkedin")} className="text-4xl lg:text-5xl text-bold text-neutral"><TbBrandLinkedin /></a>
                        <a href={t("footer.social-links.facebook")} className="text-4xl lg:text-5xl text-bold text-neutral"><TbBrandFacebook /></a>
                        <a href={t("footer.social-links.instagram")} className="text-4xl lg:text-5xl text-bold text-neutral"><TbBrandInstagram /></a>
                    </div>
                </aside>
            </div>
            <aside className="self-center flex justify-around w-[80vw] md:w-full md:block">
                <p className="flex flex-row text-center items-center md:text-l lg:text-2xl indent-2"><FiPhoneCall className="text-neutral text-2xl" />{t("footer.phone")}</p>
                <p className="flex flex-row text-center items-center md:text-l lg:text-2xl indent-2"><FiMail className="text-neutral text-2xl" />
                    <a href={`mailto:${email}`} className="underline">
                        {email}
                    </a>
                </p>
                <p className="hidden lg:text-2xl lg:block">{t("footer.slogan")}</p>
            </aside>
            <p className="md:text-l lg:hidden justify-self-center self-center">{t("footer.slogan")}</p>
        </footer>
    )

}

export default Footer;

