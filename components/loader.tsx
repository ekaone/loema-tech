import React from "react";
import { motion } from "framer-motion";

// component module css
import styles from "../styles/component.module.css";

const loaderVariants = {
  animationOne: {
    y: [0, -20],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

function Loader() {
  return (
    <motion.div
      className={styles.loader}
      variants={loaderVariants}
      animate="animationOne"
    ></motion.div>
  );
}

export default Loader;
