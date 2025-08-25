import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { BsBricks } from "react-icons/bs";
import { delay, motion } from 'framer-motion';

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
          className="absolute inset-0 bg-neutral/20"
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
              <Link to="/projects" className="btn btn-primary btn-wide rounded-l-lg border border-current">
                {t("home.btnprojects")}
              </Link>
            </motion.div>

            <motion.div
              initial="hiddenRight"
              animate="visible"
              whileHover="hover"
              variants={buttonVariants}
            >
              <Link to="/services" className="btn btn-primary btn-wide rounded-r-lg border border-current">
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
      <div
        className='text-center text-3xl sm:text-4xl text-neutral py-8 italic px-4'>
        {t("home.slogan")}
      </div>

      {/*Brick Section */}
      <div
        className='flex flex-col md:flex-row justify-center items-center text-3xl sm:text-4xl text-neutral gap-6 md:gap-12 px-4 md:px-0 pb-12'
      >
        <div className='flex items-center gap-4'>
          <BsBricks /> {t("home.bold1")} <BsBricks />
        </div>
        <div className='flex items-center gap-4'>
          <BsBricks /> {t("home.bold2")} <BsBricks />
        </div>
        <div className='flex items-center gap-4'>
          <BsBricks /> {t("home.bold3")} <BsBricks />
        </div>
      </div>
    </div>
  )
}

export default Home;
