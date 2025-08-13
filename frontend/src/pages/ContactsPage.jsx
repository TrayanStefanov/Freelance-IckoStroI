import React from 'react'

import { FiPhoneCall, FiMail } from "react-icons/fi";
import { TbLocation } from "react-icons/tb";
import { useTranslation } from "react-i18next";


const Contacts = () => {

  const { t } = useTranslation();

  const emailUser = "example";
  const emailDomain = "example.eu";
  const email = `${emailUser}@${emailDomain}`;

  return (
    <div className='overflow-hidden pt-24 pb-10'>
      <div className="flex flex-col bg-[radial-gradient(circle,theme(colors.secondary),theme(colors.white))]">
        <div className='flex flex-col-reverse lg:flex-row'>
          <div className="min-h-[40vh] lg:min-w-[40vw] text-center justify-items-center content-center text-primary">
            <h1 className='text-4xl lg:text-5xl p-5'>{t("contacts.title")}</h1>
            <p className='p-5 max-w-[80vw]'>{t("contacts.text.normal")}<b className='indent-2'>{t("contacts.text.bold")}</b></p>
            <div className="lg:min-w-[40vw] text-center content-center text-primary hidden lg:block">
            <h2 className='text-2xl flex justify-center items-center m-2'><TbLocation /><b className='mx-2'>{t("contacts.location.note")}</b>{t("contacts.location.value")}</h2>
            <h2 className='text-2xl flex justify-center items-center m-2'><FiPhoneCall /><b className='mx-2'>{t("contacts.phone.note")}</b>{t("contacts.phone.value")}</h2>
            <h2 className='text-2xl flex justify-center items-center m-2'><FiMail /><b className='mx-2'>{t("contacts.email.note")}</b>{email}</h2>
          </div>
          <div className="min-h-[40vh] min-w-[60vw] text-center content-center text-primary flex flex-col lg:hidden justify-evenly">
            <h2 className='text-base flex justify-center items-center flex-col'><b className='m-2 flex flex-row'><div className='self-center m-2'><TbLocation /></div><div className='m-2 self-center'>{t("contacts.location.note")}</div></b>{t("contacts.location.value")}</h2>
            <h2 className='text-base flex justify-center items-center flex-col'><b className='m-2 flex flex-row'><div className='self-center m-2'><FiPhoneCall /></div><div className='m-2 self-center'>{t("contacts.phone.note")}</div></b>{t("contacts.phone.value")}</h2>
            <h2 className='text-base flex justify-center items-center flex-col'><b className='m-2 flex flex-row'><div className='self-center m-2'><FiMail /></div><div className='m-2 self-center'>{t("contacts.email.note")}</div></b>{email}</h2>
          </div>
          </div>
          <div>
            <img className='lg:max-w-[40vw] lg:min-w-[82vw] object-cover' src="./contacts.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
