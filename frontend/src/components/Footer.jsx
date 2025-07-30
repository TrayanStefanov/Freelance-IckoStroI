import { Link } from "react-router";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { TbBrandTwitter, TbBrandLinkedin, TbBrandFacebook } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const emailUser = "example";
    const emailDomain = "example.eu";
    const email = `${emailUser}@${emailDomain}`;

    return (
        <footer className="footer bg-secondary text-primary p-6 justify-around border-t-2 border-primary">
            <aside className="self-center navbar-start aspect-3/1 max-w-[400px] min-w-[200px]">
                <Link to='/'>
                    <img src={t("navbar.logo")} className="w-64 ml-4" alt="" />
                </Link>
            </aside>
            <aside className="self-center">
                <p className="flex flex-row text-center items-center md:text-l lg:text-2xl indent-2"><FiPhoneCall />{t("footer.phone")}</p>
                <p className="flex flex-row text-center items-center md:text-l lg:text-2xl indent-2"><FiMail />
                    <a href={`mailto:${email}`} className="underline">
                        {email}
                    </a>
                </p>
                <p className="md:text-l lg:text-2xl">{t("footer.slogan")}</p>
            </aside>
            <aside className="self-center">
                <h6 className="footer-title">{t("footer.social")}</h6>
                <div className="grid grid-flow-col gap-4">
                    <a className="md:text-3xl lg:text-5xl text-bold"><TbBrandFacebook /></a>
                    <a href={t("footer.social-links.linkedin")} className="md:text-3xl lg:text-5xl text-bold"><TbBrandLinkedin /></a>
                    <a className="md:text-3xl lg:text-5xl text-bold"><TbBrandTwitter /></a>
                </div>
            </aside>
        </footer>
    )

}

export default Footer;

