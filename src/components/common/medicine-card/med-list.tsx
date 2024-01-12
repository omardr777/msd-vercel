"use client";
import { createComponent } from "@/utils/create-component";
import { useEffect, useState } from "react";
import { useGetMedicines } from "@/services/medicins";
import { MedicineCard } from "./medicine-card";
import { motion, AnimatePresence } from "framer-motion";

export const Meds = createComponent(() => {
  const { data, isLoading } = useGetMedicines();

  if (isLoading) {
    return <div className="flex align-middle justify-center">Loading...</div>;
  }

  return (
    <AnimatePresence>
      {data?.map((d: any, index: number) => (
        <motion.div
          key={d.id} // Assuming each medicine has a unique id
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* <div className=""> */}
          <MedicineCard medicine={d} />
          {/* </div> */}
        </motion.div>
      ))}
    </AnimatePresence>
  );
});
