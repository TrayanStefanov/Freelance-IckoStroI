import { motion, easeOut } from "framer-motion";
import { useTranslation } from "react-i18next";

const rubberBandSlideInFromLeft = {
  visible: {
    x: ["-120%", "110%", "0%"],  // keyframe positions
    opacity: [0, 1, 1],          // opacity keyframes
    transition: {
      duration: 3,
      ease: easeOut,
      times: [0, 0.4, 1],       //keyframe percentages (0%, 40%, 100%)
    },
  },
};

const rubberBandSlideInFromRight = {
  visible: {
    x: ["110%", "-120%", "0%"],
    opacity: [0, 1, 1],
    transition: {
      duration: 3,
      ease: easeOut,
      times: [0, 0.4, 1],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3, ease: easeOut, delay: 1 } }
};
const ServicePair = ({
  index,
  leftKey,
  rightKey,
}: {
  index: number;
  leftKey: string;
  rightKey: string;
}) => {
  const { t } = useTranslation();
  const isReversed = index % 2 !== 0;

  const leftContent = isReversed ? t(rightKey) : t(leftKey);
  const rightContent = isReversed ? t(leftKey) : t(rightKey);

  const leftVariant = isReversed ? fadeIn : rubberBandSlideInFromLeft;
  const rightVariant = isReversed ? rubberBandSlideInFromRight: fadeIn;

  const leftStyle = isReversed ? "font-normal bg-white border-accent border-2 z-9" : "font-bold bg-accent z-10";
  const rightStyle = isReversed ? "font-bold bg-accent z-10 justify-end" : "font-normal bg-white border-accent border-2 z-9 text-right";

  return (
    <div className="flex flex-col md:flex-row w-full items-stretch mb-6">
      {/* Left trapezoid */}
      <div className="relative w-full md:w-1/2 flex">
        <motion.div
          className={`clip-trapezoid-left h-full w-full text-primary px-8 py-6 text-xl flex items-center ${leftStyle}`}
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="pr-8">{leftContent}</p>
        </motion.div>
      </div>

      {/* Right trapezoid */}
      <div className="relative w-full md:w-1/2 flex">
        <motion.div
          className={`clip-trapezoid-right h-full w-full text-base-content px-8 py-6 text-lg flex items-center ${rightStyle}`}
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="pl-8">{rightContent}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePair;

