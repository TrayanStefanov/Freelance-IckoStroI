import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const FactorCard = ({ factor, idx, isDesktop, variants }) => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const showDetails = isDesktop ? hovered : expanded;
  const detailsId = `factor-details-${idx}`;

  return (
    <motion.div
      className="group relative p-6 border-4 border-neutral rounded-2xl bg-secondary shadow transition-transform hover:-translate-y-2 hover:border-accent/90 cursor-pointer overflow-hidden lg:min-h-[280px] flex flex-col justify-center"
      custom={idx}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      onClick={() => !isDesktop && setExpanded((prev) => !prev)}
      onMouseEnter={() => isDesktop && setHovered(true)}
      onMouseLeave={() => isDesktop && setHovered(false)}
      whileHover={isDesktop ? { scale: 1.03 } : {}}
      role="button"
      tabIndex={0}
      aria-expanded={showDetails}
      aria-controls={detailsId}
      onKeyDown={(e) => {
        if (!isDesktop && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          setExpanded((prev) => !prev);
        }
      }}
    >
      <motion.div
        animate={
          isDesktop
            ? showDetails
              ? { y: -15, scale: 0.95, transition: { duration: 0.35, ease: "easeOut" } }
              : { y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } }
            : {}
        }
        className="text-center"
      >
        <h6 className="text-xl lg:text-2xl font-bold mb-3 underline underline-offset-8 decoration-primary-content text-neutral drop-shadow-sm font-ms">
          {factor.title}
        </h6>
        <p className="text-base font-ns">{factor.text}</p>
      </motion.div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="overflow-hidden mt-4"
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500, transition: { duration: 0.5, ease: "easeInOut" } }}
            exit={{ opacity: 0, maxHeight: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <ul className="space-y-1 font-ns">
              {factor.details.map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <GiCheckMark className="text-accent min-w-4 min-h-4" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FactorCard;
