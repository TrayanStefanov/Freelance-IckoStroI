import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const FactorCard = ({ factor, idx, isDesktop, variants }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="group relative p-6 border-4 border-neutral rounded-2xl bg-secondary shadow transition-transform hover:-translate-y-2 hover:border-accent/90 cursor-pointer"
      custom={idx}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onClick={() => {
        if (!isDesktop) setExpanded((prev) => !prev);
      }}
    >
      {/* Always visible */}
      <h6 className="text-xl lg:text-2xl font-bold mb-3 underline underline-offset-8 decoration-primary-content text-neutral drop-shadow-sm">
        {factor.title}
      </h6>
      <p className="text-base">{factor.text}</p>

      {/* Expandable details */}
      <AnimatePresence>
        {isDesktop ? (
          // Desktop: show on hover only
          <motion.div
            initial={{ maxHeight: 0, opacity: 0 }}
            whileHover={{ maxHeight: 500, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden mt-4"
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
        ) : (
          // Mobile: expand on click
          expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden mt-4"
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
          )
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FactorCard;
