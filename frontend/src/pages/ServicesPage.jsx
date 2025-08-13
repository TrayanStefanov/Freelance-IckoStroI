import React from 'react';
import { useTranslation } from 'react-i18next';
import ServicePair from "../components/AnimationServicePair";

const Services = () => {
  const { t } = useTranslation();
  const provided = t("services.provided", { returnObjects: true });

  // Prevent render until translations are ready
  if (!provided?.leftlist || !provided?.rightlist || !provided?.images) {
    return null;
  }

  // Create a single array of service keys
  const serviceEntries = Object.keys(provided.leftlist);

  return (
    <div className='min-h-screen overflow-hidden'>
      <div
        className="hero min-h-[80vh] bg-right md:bg-center"
        style={{ backgroundImage: "url(/services-hero.jpg)" }}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-9xl">
            <h1 className="my-5 text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl justify-self-center">
              {t("services.intro.title")}
            </h1>
            <p className="mb-5 text-2xl md:text-3xl lg:text-4xl lg:px-20">
              {t("services.intro.text")}
            </p>
            <p className='mb-5 text-3xl font-semibold'>
              {t("services.intro.text2")}
            </p>
          </div>
        </div>
      </div>

      <div className='lg:bg-radial-accent'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl text-primary p-4 text-center lg:mb-10'>
          {t("services.provided.title")}
        </h2>

        {/* Desktop */}
        <div className='max-w-[80vw] mx-auto hidden md:block'>
          <div className="container mx-auto px-4">
            {serviceEntries.map((num, idx) => (
              <ServicePair
                key={num}
                index={idx}
                leftKey={`services.provided.leftlist.${num}`}
                rightKey={`services.provided.rightlist.${num}`}
                image={provided.images[num]}
              />
            ))}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className='mx-auto block md:hidden join join-vertical w-full rounded-none'>
          {serviceEntries.map((key, index) => (
            <div key={key} className="collapse collapse-arrow join-item border-base-300 border border-l-0 border-r-0 bg-primary text-accent">
              <input type="radio" name="my-accordion-4" defaultChecked={index === 0} />
              <div className="collapse-title text-xl font-medium flex items-center gap-3">
                <img
                  src={provided.images[key]}
                  alt={provided.leftlist[key]}
                  className="w-12 h-12 object-cover rounded-md"
                />
                {provided.leftlist[key]}
              </div>
              <div className="collapse-content">
                <ul className="list-disc ml-4">
                  {provided.rightlist[key].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
