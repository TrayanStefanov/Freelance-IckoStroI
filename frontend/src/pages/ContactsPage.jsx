import React from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  const emailUser = "example";
  const emailDomain = "example.eu";
  const email = `${emailUser}@${emailDomain}`;

  return (
    <div className="overflow-hidden pt-[15vh] min-h-[80vh] content-center font-bn">
      <div className="flex flex-col bg-[radial-gradient(circle,theme(colors.secondary),theme(colors.white))]">
        <div className="flex flex-col-reverse lg:flex-row">
          {/* LEFT SIDE: Contact details */}
          <div className="min-h-[40vh] lg:w-1/2 text-center flex flex-col justify-center items-center text-primary p-6">
            <h1 className="text-4xl lg:text-5xl mb-6">{t("contacts.title")}</h1>
            <p className="text-lg max-w-[80vw]">
              {t("contacts.text.normal")}
            </p>
              <b className="mb-6 ml-2 text-2xl text-neutral">{t("contacts.text.bold1")}, {t("contacts.text.bold2")} {t("contacts.text.bold3")}</b>

            <div className="flex flex-col gap-6 w-full max-w-lg">
              <h2 className="text-lg lg:text-2xl flex items-center justify-center">
                <FiPhoneCall className="mx-2 text-neutral" />
                <b className="mx-2">{t("contacts.phone.note")}</b>
                {t("contacts.phone.value")}
              </h2>

              <h2 className="text-lg lg:text-2xl flex items-center justify-center">
                <FiMail className="mx-2 text-neutral" />
                <b className="mx-2">{t("contacts.email.note")}</b>
                <a
                  href={`mailto:${email}`}
                  className="hover:underline break-all"
                >
                  {email}
                </a>
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE: Google Map */}
          <div className="lg:w-1/2 w-full h-[300px] lg:h-auto lg:mx-10">
            <iframe
              title="Business area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93836.37935954207!2d23.241546740875236!3d42.69552878928868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia!5e0!3m2!1sen!2sbg!4v1755696992586!5m2!1sen!2sbg"
              width="100%"
              height="100%"
              style={{
                border:0
              }} 
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
