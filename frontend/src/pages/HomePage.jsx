import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router';


const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="hero min-h-screen bg-left lg:bg-center"
        style={{ backgroundImage: "url(/home-hero.jpg)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center p-8">
          <div className="max-w-9xl justify-between">
            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl justify-self-center">
              {t("home.title")}</h1>
            <h2 className="mb-5 text-2xl md:text-3xl lg:text-4xl max-w-4xl justify-self-center">
              {t("home.subtitle")}</h2>
            <h3 className="mb-5 text-xl md:text-2xl lg:text-3xl max-w-4xl justify-self-center">
              {t("home.more")}</h3>
            <button className="btn btn-primary btn-wide rounded-l-lg border border-current"><Link to='/about'>{t("home.btnprojects")}</Link></button>
            <button className="btn btn-primary btn-wide rounded-r-lg border border-current"><Link to='/services-and-scope'>{t("home.btnservices")}</Link></button>
          </div>
        </div>
      </div>
      <div className='text-center min-h-100 text-3xl lg:text-4xl text-primary p-8'>{t("home.slogan")}</div>
    </div>
  )
}

export default Home
