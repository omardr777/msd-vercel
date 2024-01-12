import { ICreateMedicinDrawer } from "@/types";
import { createComponent } from "@/utils/create-component";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { PillIcon } from "../../icons/pill-icon";
import { Button } from "@/components";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useDisclosure } from "@/hooks/useDisclouser";
import { CheckMarkIcon } from "@/components/icons/check-mark-icon";
import { CrossMarkIcon } from "@/components/icons/cross-mark-icon";
import { motion, useCycle } from "framer-motion";
import { AnimatedButtonIcon } from "../animated-button-icon";

interface IMedicineCard {
  medicine: ICreateMedicinDrawer;
}
const variants = {
  shrink: { width: "100%", right: 0, opacity: 1 },
  expand: { width: "70%", right: "30%", opacity: 1 },
  hidden: { opacity: 0, transition: { duration: 0.1 } },
};
export const MedicineCard = createComponent<IMedicineCard>(({ medicine }) => {
  const { amount, name, times, type, unit } = medicine;

  const { isOpen: isExpanded, onToggle: handleCardClick } = useDisclosure();
  const [isCardExpanded, setCardExpanded] = useState(false);
  const [areButtonsVisible, setButtonsVisibility] = useState(true);

  const toggleCardWidth = () => {
    setCardExpanded((prev) => !prev);
    if (!isCardExpanded) {
      // Show buttons after a delay when expanding
      setTimeout(() => {
        setButtonsVisibility(true);
      }, 300); // Adjust the delay duration as needed
    } else {
      // Hide buttons immediately when shrinking
      setButtonsVisibility(false);
    }
  };

  return (
    <>
      <div className="w-full flex flex-row-reverse justify-between items-center">
        <motion.div
          initial="initial"
          animate={isCardExpanded ? "expand" : "shrink"}
          variants={variants}
          drag="x" // Enable horizontal dragging
          dragConstraints={{ left: 0, right: 0 }} // Restrict dragging within the container
          dragElastic={0.2} // Add some elasticity to the drag
          onTap={() => toggleCardWidth()}
          onTapStart={() => setButtonsVisibility(false)}
          transition={{ duration: 0.2 }}
          onAnimationComplete={() => {
            if (!isCardExpanded) {
              handleCardClick();
            }
          }}
          style={{ overflow: "hidden" }} // Hide the content that overflows when shrinking
        >
          <Card
            className="p-4 bg-gray-50"
            onClick={() => {
              setButtonsVisibility(false);
              handleCardClick();
            }}
          >
            <div className="flex items-center justify-between space-x-4">
              <div className="flex space-x-4 items-center">
                <PillIcon />
                <div className="flex flex-col">
                  <h3 className="font-bold">{name}</h3>
                  <p>{`${times[0]} - ${amount} ${unit}`}</p>
                </div>
              </div>
              <div>
                <Button size="icon" variant="ghost">
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
        {isCardExpanded && areButtonsVisible && (
          <div className="flex space-x-4 ml-2">
            <AnimatedButtonIcon
              icon={<CheckMarkIcon />}
              onClick={() => {
                setCardExpanded((prev) => !prev);
                setButtonsVisibility(false);
              }}
              color="from-green-300 via-green-400 to-green-500"
            />
            <AnimatedButtonIcon
              icon={<CrossMarkIcon />}
              onClick={() => {
                setCardExpanded((prev) => !prev);
                setButtonsVisibility(false);
              }}
              color="from-red-300 via-red-400 to-red-500"
            />
          </div>
        )}
      </div>
    </>
  );
});
