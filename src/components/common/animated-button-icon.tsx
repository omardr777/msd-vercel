import { Button } from "@/components";
import { CheckMarkIcon } from "@/components/icons/check-mark-icon";
import { createComponent } from "@/utils/create-component";
import { motion } from "framer-motion";
interface IAnimatedButtonIcon {
  icon: React.ReactNode;
  onClick: () => void;
  color: string;
}

export const AnimatedButtonIcon = createComponent<IAnimatedButtonIcon>(
  ({ icon, onClick, color }) => {
    return (
      <>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            className={`mr-1 bg-gradient-to-r ${color}`}
            size="icon"
            onClick={onClick}
          >
            {icon}
          </Button>
        </motion.div>
      </>
    );
  }
);
