import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const SectionWrapper = ({ children, id, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.35 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
