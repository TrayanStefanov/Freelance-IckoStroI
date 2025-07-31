
import React from 'react'

import { TbArrowBigRightLine, TbArrowBigDownLine } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
import { useTranslation } from "react-i18next";


const AboutUs = () => {

  const { t } = useTranslation();

  return (
    <div className='min-h-screen overflow-hidden'>
      <div className='md:min-h-[70vh] flex flex-col md:flex-row'>
        <img className='lg:w-1/2 max-h-[40vh] lg:max-h-[70vh] object-cover' src="./about-us.jpg" alt="" />
        <div className='lg:w-1/2 p-10 lg:p-20 text-primary'>
          <h1 className='text-8xl md:text-7xl lg:text-6xl text-center mb-6'>{t("about.intro.title")}</h1>
          <p className='text-2xl my-2'>{t("about.intro.paragraph.1")}</p>
          <p className='text-2xl my-2'>{t("about.intro.paragraph.2")}</p>
          <h3 className='text-3xl my-6'>{t("about.intro.subtitle")}</h3>
          <ul className='list-none list-inside text-2xl'>
            <li>{t("about.intro.list.1")}</li>
            <li>{t("about.intro.list.2")}</li>
            <li>{t("about.intro.list.3")}</li>
          </ul>
        </div>
      </div>
      <div className='text-primary'>
        <h2 className='text-7xl md:text-6xl lg:text-5xl text-center mb-6 p-10'>{t("about.issues.title")}</h2>
        <div className='max-w-[80vw] hidden lg:flex sm:flex-col lg:flex-row m-auto justify-around justify-self-center'>
          <div className='xl:w-1/5 p-10 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
            <h6 className='text-3xl lg:text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.1.title")}</h6>
            <p className='text-l'>{t("about.issues.factors.1.text")}</p>
          </div>
          <div className='xl:w-1/5 p-10 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
            <h6 className='text-3xl lg:text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.2.title")}</h6>
            <p className='text-l'>{t("about.issues.factors.2.text")}</p>
          </div>
          <div className='xl:w-1/5 p-10 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
            <h6 className='text-3xl lg:text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.3.title")}</h6>
            <p className='text-l'>{t("about.issues.factors.3.text")}</p>
          </div>
          <div className='xl:w-1/5 p-10 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
            <h6 className='text-3xl lg:text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.4.title")}</h6>
            <p className='text-l'>{t("about.issues.factors.4.text")}</p>
          </div>
        </div>
        <div className='max-w-[90vw] flex md:hidden flex-col lg:hidden m-auto justify-around justify-self-center'>
          <div className='min-h-[30vh] p-4 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
            <h6 className='text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.1.title")}</h6>
            <p className='text-l'>{t("about.issues.factors.1.text")}</p>
          </div>
          <div className='min-h-[30vh] p-4 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
            <h6 className='text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.2.title")}</h6>
            <p className='text-l'>{t("about.issues.factors.2.text")}</p>
          </div>
          <div className='min-h-[30vh] p-4 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
            <h6 className='text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.3.title")}</h6>
            <p className='text-l'>{t("about.issues.factors.3.text")}</p>
          </div>
          <div className='min-h-[30vh] p-4 border-primary border-4 rounded-xl border-double justify-items-center text-center bg-secondary m-2'>
            <h6 className='text-xl font-bold mb-4 underline underline-offset-8 decoration-accent'>{t("about.issues.factors.4.title")}</h6>
            <p className='text-l'>{t("about.issues.factors.4.text")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
