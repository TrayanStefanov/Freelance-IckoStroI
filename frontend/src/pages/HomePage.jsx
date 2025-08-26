import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { BsBricks } from "react-icons/bs";
import { delay, motion } from 'framer-motion';
import { GiCheckMark } from "react-icons/gi";


import FactorCard from '../components/FactorCard';


const Home = () => {
  const { t } = useTranslation();

  // Title letters for build-up
  const letterVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const titleLetters = t("home.title").split("");

  // Buttons variants
  const buttonVariants = {
    hiddenLeft: { opacity: 0, x: -50, scale: 0.95 },
    hiddenRight: { opacity: 0, x: 50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { delay: 2.5, duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.05, y: -3, transition: { type: "spring", stiffness: 300, damping: 15 } },
  };

  // Slogan animation
  const sloganVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Brick section variants (slower)
  const brickContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.4 } } // slowed down from 0.2
  };
  const brickVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } } // slower animation
  };

  const factors = Object.values(t("about.issues.factors", { returnObjects: true }));


  // Variants
  const heroDesktopVariants = { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const heroMobileVariants = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const cardDesktopVariants = { hidden: { opacity: 0, y: 20 }, show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15 } }) };
  const cardMobileVariants = { hidden: { opacity: 0, y: 30 }, show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }) };

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <div className="font-bn">

      {/* Hero Section */}
      <div className="relative min-h-[80vh] lg:min-h-screen overflow-hidden flex items-center justify-center">

        {/* Static Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/home-hero.jpg)" }}
        ></div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-neutral/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-neutral-content flex flex-col items-center justify-center h-full p-6 md:p-12 lg:p-20 gap-6">

          {/* Title build-up */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl flex flex-wrap justify-center leading-tight">
            {titleLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle fade-in */}
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl max-w-4xl leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {t("home.subtitle")}
          </motion.h2>

          {/* "More" slide-up */}
          <motion.h3
            className="text-xl sm:text-2xl lg:text-3xl max-w-4xl font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            {t("home.more")}
          </motion.h3>

          {/* Desktop Buttons*/}
          <div className="hidden lg:flex gap-4 mt-6">
            <motion.div
              initial="hiddenLeft"
              animate="visible"
              whileHover="hover"
              variants={buttonVariants}
            >
              <Link to="/projects" className="btn btn-primary btn-wide rounded-l-lg border border-secondary text-secondary text-xl">
                {t("home.btnprojects")}
              </Link>
            </motion.div>

            <motion.div
              initial="hiddenRight"
              animate="visible"
              whileHover="hover"
              variants={buttonVariants}
            >
              <Link to="/services" className="btn btn-primary btn-wide rounded-r-lg border border-secondary text-secondary text-xl">
                {t("home.btnservices")}
              </Link>
            </motion.div>
          </div>

          {/* Mobile buttons (fade-in) */}
          <div className="flex flex-col lg:hidden w-full mt-6 gap-4">
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

      {/* Slogan Section */}
      <motion.div
        className='text-center text-3xl sm:text-4xl text-neutral py-8 italic px-4'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sloganVariants}
      >
        {t("home.slogan")}
      </motion.div>

      {/*Brick Section */}
      <motion.div
        className='flex flex-col md:flex-row justify-center items-center text-3xl sm:text-4xl text-neutral gap-6 md:gap-12 px-4 md:px-0 pb-12'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={brickContainer}
      >
        <motion.div className='flex items-center gap-4' variants={brickVariants}>
          <BsBricks /> {t("home.bold1")} <BsBricks />
        </motion.div>
        <motion.div className='flex items-center gap-4' variants={brickVariants}>
          <BsBricks /> {t("home.bold2")} <BsBricks />
        </motion.div>
        <motion.div className='flex items-center gap-4' variants={brickVariants}>
          <BsBricks /> {t("home.bold3")} <BsBricks />
        </motion.div>
      </motion.div>

      {/* About Us Section */}
      <div className="min-h-screen overflow-hidden pt-[15vh] pb-20 font-bn text-primary">
        {/* Hero Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 px-6 lg:px-20">
          {/* Image */}
          <motion.img
            src="./aboutUs-solo.jpg"
            alt="About us"
            className="lg:w-1/3 max-h-[60vh] object-cover rounded-3xl shadow-xl border-4 border-secondary"
            viewport={{ once: true, amount: 0.5 }}
            variants={isDesktop ? heroDesktopVariants : heroMobileVariants}
            initial="hidden"
            animate="show"
          />

          {/* Text */}
          <motion.div
            className="lg:w-1/2 bg-secondary p-8 lg:p-12 rounded-3xl shadow-md border-4 border-neutral"
            viewport={{ once: true, amount: 0.5 }}
            variants={isDesktop ? heroDesktopVariants : heroMobileVariants}
            initial="hidden"
            animate="show"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">
              {t("about.intro.title")}
            </h1>
            <p className="text-lg leading-relaxed mb-4">{t("about.intro.paragraph.1")}</p>
            <p className="text-lg leading-relaxed mb-6">{t("about.intro.paragraph.2")}</p>

            <h3 className="text-2xl lg:text-3xl text-neutral mb-4">{t("about.intro.subtitle")}</h3>
            <ul className="space-y-2">
              {[t("about.intro.points.1"), t("about.intro.points.2"), t("about.intro.points.3"), t("about.intro.points.4")].map((point, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <GiCheckMark className="text-accent text-xl min-h-5 min-w-5 transition-colors hover:text-neutral hover:scale-120" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Issues Section */}
        <div className="mt-24">
          <h2 className="text-4xl lg:text-5xl text-center font-bold text-neutral mb-12">
            {t("about.issues.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
            {factors.map((factor, idx) => (
              <FactorCard
                key={idx}
                factor={factor}
                idx={idx}
                isDesktop={isDesktop}
                variants={isDesktop ? cardDesktopVariants : cardMobileVariants}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
