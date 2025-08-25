import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { BsBricks } from "react-icons/bs";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="font-bn">
      <div
        className="hero min-h-[80vh] lg:min-h-screen bg-left lg:bg-center relative"
        style={{ backgroundImage: "url(/home-hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-neutral/20"></div>

        <div className="hero-content relative text-neutral-content text-center p-6 md:p-12 lg:p-20 flex flex-col items-center justify-center gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight">
            {t("home.title")}
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-4xl leading-snug">
            {t("home.subtitle")}
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl max-w-4xl font-light">
            {t("home.more")}
          </h3>

          {/* Desktop buttons */}
          <div className="hidden lg:flex gap-4 mt-6">
            <Link to='/projects' className="btn btn-primary btn-wide rounded-l-lg border border-current">
              {t("home.btnprojects")}
            </Link>
            <Link to='/services' className="btn btn-primary btn-wide rounded-r-lg border border-current">
              {t("home.btnservices")}
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className='flex flex-col lg:hidden w-full mt-6 gap-4'>
            <Link
              to='/projects'
              className="btn btn-primary w-full h-20 sm:h-24 rounded-lg text-2xl sm:text-3xl font-bold shadow-lg"
              style={{ backgroundImage: "url(/home-projects-btn.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              {t("home.btnprojects")}
            </Link>
            <Link
              to='/services'
              className="btn btn-primary w-full h-20 sm:h-24 rounded-lg text-2xl sm:text-3xl font-bold shadow-lg"
              style={{ backgroundImage: "url(/home-services-btn.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              {t("home.btnservices")}
            </Link>
          </div>
        </div>
      </div>
      <div className='text-center text-3xl sm:text-4xl text-neutral py-8 italic px-4'>
        {t("home.slogan")}
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center text-3xl sm:text-4xl text-neutral gap-6 md:gap-12 px-4 md:px-0 pb-12'>
        <div className='flex items-center gap-4'><BsBricks /> {t("home.bold1")} <BsBricks /></div>
        <div className='flex items-center gap-4'><BsBricks /> {t("home.bold2")} <BsBricks /></div>
        <div className='flex items-center gap-4'><BsBricks /> {t("home.bold3")} <BsBricks /></div>
      </div>
    </div>
  )
}

export default Home;
