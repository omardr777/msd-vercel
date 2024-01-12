import { createComponent } from '@/utils/create-component';
import { motion } from 'framer-motion';
interface IAnimatedComponent {
	children: React.ReactNode;
}

export const AnimatedIcon = createComponent<IAnimatedComponent>(
	({ children }) => {
		return (
			<motion.div
				whileTap={{ scale: 0.8 }}
				transition={{
					type: 'spring',
					stiffness: 400,
					damping: 17,
				}}
			>
				{children}
			</motion.div>
		);
	}
);
