import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  const letterVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const titleLetters = t("home.title").split("");

  const buttonVariants = {
    hiddenLeft: { opacity: 0, x: -50, scale: 0.95 },
    hiddenRight: { opacity: 0, x: 50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { delay: 2.5, duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.05, y: -3, transition: { type: "spring", stiffness: 300, damping: 15 } },
  };

  return (
    <div className="relative min-h-[80vh] lg:min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/home-hero.jpg)" }} />
      <motion.div className="absolute inset-0 bg-neutral/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />

      {/* Content */}
      <div className="relative z-10 text-center text-neutral-content flex flex-col items-center justify-center h-full p-6 md:p-12 lg:p-20 gap-6">
        {/* Title build-up */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl flex flex-wrap justify-center leading-tight mt-32 font-pf">
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

        {/* Subtitle */}
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl max-w-4xl leading-snug font-pf"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {t("home.subtitle")}
        </motion.h2>

        {/* More */}
        <motion.h3
          className="text-xl sm:text-2xl lg:text-3xl max-w-4xl font-ms font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          {t("home.more")}
        </motion.h3>

        {/* Buttons Desktop */}
        <div className="hidden lg:flex gap-4 mt-6">
          <motion.div initial="hiddenLeft" animate="visible" whileHover="hover" variants={buttonVariants}>
            <Link to="/projects" className="btn btn-primary btn-wide rounded-l-lg border border-secondary text-secondary text-xl">
              {t("home.btnprojects")}
            </Link>
          </motion.div>
          <motion.div initial="hiddenRight" animate="visible" whileHover="hover" variants={buttonVariants}>
            <Link to="/services" className="btn btn-primary btn-wide rounded-r-lg border border-secondary text-secondary text-xl">
              {t("home.btnservices")}
            </Link>
          </motion.div>
        </div>

        {/* Buttons Mobile */}
        <div className="flex flex-col lg:hidden w-full mt-6 gap-4">
          <Link
            to="/projects"
            className="btn btn-primary w-full h-20 sm:h-24 rounded-lg text-2xl sm:text-3xl font-bold shadow-lg"
            style={{ backgroundImage: "url(/home-projects-btn.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            {t("home.btnprojects")}
          </Link>
          <Link
            to="/services"
            className="btn btn-primary w-full h-20 sm:h-24 rounded-lg text-2xl sm:text-3xl font-bold shadow-lg"
            style={{ backgroundImage: "url(/home-services-btn.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            {t("home.btnservices")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
