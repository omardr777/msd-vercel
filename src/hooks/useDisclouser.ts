import {useState} from "react";

export const useDisclosure = () =>{
  const [isOpen,setIsOpen] = useState(false)
  const onToggle = () =>{
    setIsOpen(!isOpen)
  }

  return {isOpen,onToggle}
}