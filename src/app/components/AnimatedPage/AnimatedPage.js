import { AnimatePresence, motion } from "framer-motion";

const animation = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0, y: 0, transition: { duration: 1 } },
};

export const AnimatedPage = ({ children }) => {
	return (
		<motion.div
			variants={animation}
			initial='initial'
			animate='animate'
			exit='exit'
			transition='transition'>
			{children}
		</motion.div>
	);
};
