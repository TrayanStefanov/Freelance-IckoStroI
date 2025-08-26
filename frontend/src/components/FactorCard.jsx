import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const FactorCard = ({ factor, idx, isDesktop, variants }) => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Show details: hover on desktop, click toggle on mobile
  const showDetails = isDesktop ? hovered : expanded;

  return (
    <motion.div
      className="group relative p-6 border-4 border-neutral rounded-2xl bg-secondary shadow transition-transform hover:-translate-y-2 hover:border-accent/90 cursor-pointer overflow-hidden"
      custom={idx}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      onClick={() => !isDesktop && setExpanded((prev) => !prev)}
      onMouseEnter={() => isDesktop && setHovered(true)}
      onMouseLeave={() => isDesktop && setHovered(false)}
      whileHover={isDesktop ? { scale: 1.03 } : {}}
    >
      {/* Always visible */}
      <h6 className="text-xl lg:text-2xl font-bold mb-3 underline underline-offset-8 decoration-primary-content text-neutral drop-shadow-sm">
        {factor.title}
      </h6>
      <p className="text-base">{factor.text}</p>

      {/* Expandable details */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="overflow-hidden mt-4"
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500, transition: { duration: 0.35, ease: "easeInOut" } }}
            exit={{ opacity: 0, maxHeight: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
          >
            <ul className="space-y-1">
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
