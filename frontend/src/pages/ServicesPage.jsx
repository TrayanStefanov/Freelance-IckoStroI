import React from 'react'
import { useTranslation } from 'react-i18next'

import ServicePair from "../components/AnimationServicePair";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen overflow-hidden'>
      <div
        className="hero min-h-[80vh] bg-right md:bg-center"
        style={{ backgroundImage: "url(/services-hero.jpg)" }}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-9xl">
            <h1 className="my-5 text-4xl md:text-5xl lg:text-6xl  font-bold max-w-4xl justify-self-center">{t("services.intro.title")}</h1>
            <p className="mb-5 text-2xl md:text-3xl lg:text-4xl lg:px-20">{t("services.intro.text")}</p>
            <p className='mb-5 text-3xl font-semibold'>{t("services.intro.text2")}</p>
          </div>
        </div>
      </div>
      <div className='bg-radial-accent'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl text-primary p-4 text-center mb-10'>{t("services.provided.title")}</h2>
        <div className='max-w-[80vw] mx-auto hidden md:block'>
          <div className="container mx-auto px-4">
            {[1, 2, 3, 4, 5, 6, 7].map((num, idx) => (
              <ServicePair
                key={num}
                index={idx}
                leftKey={`services.provided.leftlist.${num}`}
                rightKey={`services.provided.rightlist.${num}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
