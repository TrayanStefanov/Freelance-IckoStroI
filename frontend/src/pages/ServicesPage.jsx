import React from "react";
import { useTranslation } from "react-i18next";
import { motion, easeOut } from "framer-motion";
import ServicePair from "../components/AnimationServicePair";

const rubberBandSlideInFromLeft = {
  hidden: { opacity: 0 },
  visible: {
    x: ["-120%", "220%", "0%"],  // keyframe positions
    opacity: [0, 1, 1],          // opacity keyframes
    transition: {
      duration: 4,
      ease: easeOut,
      times: [0, 0.4, 1],       //keyframe percentages (0%, 40%, 100%)
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3, ease: easeOut, delay: 1.7 } }
};

const bgFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 4.2 // AFTER the slide/fade animations complete
    }
  }
};

const Services = () => {



  const { t } = useTranslation();
  const servicesList = t("services.serviceList", { returnObjects: true });

  if (!servicesList || !Array.isArray(servicesList)) return null;

  return (
    <div className="min-h-screen overflow-hidden">
      <div
        className="hero min-h-[80vh] bg-right md:bg-center"
        style={{ backgroundImage: "url(/services-hero.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-9xl">
            <h1 className="my-5 text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl justify-self-center">
              {t("services.intro.title")}
            </h1>
            <p className="mb-5 text-2xl md:text-3xl lg:text-4xl lg:px-20">
              {t("services.intro.text")}
            </p>
            <p className="mb-5 text-3xl font-semibold">
              {t("services.intro.text2")}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:bg-radial-accent">
        {/* Desktop */}
        <div className="max-w-[80vw] mx-auto hidden md:block">
          <div className="container mx-auto px-4">
            {servicesList.map((service) => (
              <div className="relative w-full mb-6 min-h-[30vh]">
                {/* Background image layer */}
                <motion.div
                  className="absolute inset-0 bg-center bg-contain bg-no-repeat z-0 scale-100"
                  style={{ backgroundImage: `url(${service.image || "/services-hero.jpg"})` }}
                  variants={bgFadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                />

                {/* Foreground content */}
                <div className="relative flex flex-col md:flex-row w-full border-accent border-2 min-h-[30vh] items-stretch justify-between z-10">
                  {/* Left trapezoid */}
                  <div className="relative w-full md:w-1/2 lg:w-[40%] flex">
                    <motion.div
                      className={`clip-trapezoid-left h-full w-full text-primary px-12 py-6 text-l flex flex-col items-start gap-3 bg-accent z-10`}
                      variants={rubberBandSlideInFromLeft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <h3 className="font-bold text-xl">{service.left.title}</h3>
                      <h3 className="italic indent-4">{service.right.text}</h3>
                      <p>{service.left.description}</p>
                    </motion.div>
                  </div>

                  {/* Right trapezoid */}
                  <div className="relative w-full md:w-1/2 lg:w-[40%] flex">
                    <motion.div
                      className={`clip-trapezoid-right h-full w-full text-base-content ps-16 pe-4 py-6 text-md flex flex-col items-end gap-3 font-normal bg-white z-9 justify-end`}
                      variants={fadeIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <ul className="list-disc ml-4">
                        {service.right.tasks.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="mx-auto block md:hidden join join-vertical w-full rounded-none">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="collapse collapse-arrow join-item border-base-300 border border-l-0 border-r-0 bg-primary text-accent"
            >
              <input type="radio" name="my-accordion-4" defaultChecked={idx === 0} />
              <div className="collapse-title text-xl font-medium flex items-center gap-3">
                <img
                  src={service.image}
                  alt={service.left.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
                {service.left.title}
              </div>
              <div className="collapse-content">
                <p>{service.left.description}</p>
                <ul className="list-disc ml-4">
                  {service.right.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                <p>{service.right.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
