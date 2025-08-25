import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router';
import { BsBricks } from "react-icons/bs";


const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="hero min-h-[80vh] lg:min-h-screen bg-left lg:bg-center font-bn"
        style={{ backgroundImage: "url(/home-hero.jpg)" }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center p-8">
          <div className="max-w-9xl justify-between">
            <h1 className="mb-10 lg:mb-5 text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl justify-self-center">
              {t("home.title")}</h1>
            <h2 className="mb-10 lg:mb-5 text-2xl md:text-3xl lg:text-4xl max-w-4xl justify-self-center">
              {t("home.subtitle")}</h2>
            <h3 className="mb-10 lg:mb-5 text-xl md:text-2xl lg:text-3xl max-w-4xl justify-self-center">
              {t("home.more")}</h3>
            <button className="btn btn-primary btn-wide hidden lg:inline-flex rounded-l-lg border border-current"><Link to='/projects'>{t("home.btnprojects")}</Link></button>
            <button className="btn btn-primary btn-wide hidden lg:inline-flex rounded-r-lg border border-current"><Link to='/services'>{t("home.btnservices")}</Link></button>
            <div className='flex lg:hidden'>
              <Link to='/projects' className="btn btn-primary w-1/2 h-[25vh] border border-r-0 border-current rounded-none text-3xl hover:opacity-50 text-primary font-bold shadow-lg shadow-neutral" style={{ backgroundImage: "url(/home-projects-btn.jpg", backgroundSize: "cover", backgroundPosition: "center" }}>{t("home.btnprojects")}</Link>
              <Link to='/services' className="btn btn-primary w-1/2 h-[25vh] border border-l-0 border-current rounded-none text-3xl hover:opacity-50 text-primary font-bold shadow-lg shadow-neutral" style={{ backgroundImage: "url(/home-services-btn.jpg", backgroundSize: "cover", backgroundPosition: "center" }}>{t("home.btnservices")}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center min-h-100 text-3xl lg:text-4xl text-neutral pt-8 pb-4 italic'>{t("home.slogan")}</div>
      <div className='hidden md:flex flex-row text-center min-h-100 text-3xl lg:text-4xl text-neutral pb-8 pt-4 italic justify-center items-center'><BsBricks className='mx-5' /> {t("home.bold1")} <BsBricks className='mx-5' /> {t("home.bold2")} <BsBricks className='mx-5' /> {t("home.bold3")} <BsBricks className='mx-5' /></div>
      <div className='flex flex-col md:hidden text-center min-h-100 text-3xl lg:text-4xl text-neutral pb-8 pt-4 italic justify-center items-center'>
        <div className='flex flex-row'>
          <BsBricks className='mx-5' /> {t("home.bold1")} <BsBricks className='mx-5' />
        </div>
        <div className='flex flex-row'>
          <BsBricks className='mx-5' /> {t("home.bold2")} <BsBricks className='mx-5' />
        </div>
        <div className='flex flex-row'>
          <BsBricks className='mx-5' /> {t("home.bold3")} <BsBricks className='mx-5' />
        </div>
      </div>
    </div>
  )
}

export default Home
