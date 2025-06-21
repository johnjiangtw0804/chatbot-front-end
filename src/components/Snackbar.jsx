import { motion, AnimatePresence } from "framer-motion"; // correct import

function Snackbar({ snackbar }) {
  const snackbarVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: [0.05, 0.7, 0.1, 1],
      },
    },
  };

  const snackbarChildVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, delay: 0.1, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {snackbar.open && (
        <motion.div
          className={`snackbar ${snackbar.type}`}
          variants={snackbarVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.span variants={snackbarChildVariants}>
            {snackbar.message}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Snackbar;
