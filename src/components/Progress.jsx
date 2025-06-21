import { motion } from "framer-motion";

function CircularProgress({ classes = "", size = "" }) {
  return (
    <div
      role="progressbar"
      className={`circular-progress ${size} ${classes}`}
    ></div>
  );
}

/**
 * Linear progress
 */
function LinearProgress({ classes = "" }) {
  return (
    <div className={`linear-progress ${classes}`}>
      <motion.div
        className="active-indicator"
        initial={{ left: "-33%" }}
        animate={{ left: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        style={{ position: "absolute" }}
      />
    </div>
  );
}

export { CircularProgress, LinearProgress };
