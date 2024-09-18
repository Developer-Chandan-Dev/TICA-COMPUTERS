import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const useAnimatedMenu = (
  fromDirectionStartOpen,
  toDirectionStartOpen,
  fromDirectionEndOpen,
  toDirectionEndOpen,
  fromDirectionStartClose,
  toDirectionStartClose,
  fromDirectionEndClose,
  toDirectionEndClose
) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    gsap.fromTo(
      menuRef.current,
      {
        [fromDirectionStartClose]: toDirectionStartClose,
        opacity: 1,
        display: "block",
      },
      {
        [fromDirectionEndClose]: toDirectionEndClose,
        opacity: 0,
        display: "none",
        duration: 1,
        onComplete: () => setIsOpen(false),
      }
    );
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        {
          [fromDirectionStartOpen]: toDirectionStartOpen,
          opacity: 0,
          display: "none",
        },
        {
          [fromDirectionEndOpen]: toDirectionEndOpen,
          opacity: 1,
          duration: 1,
          display: "block",
        }
      );
    }
  }, [
    isOpen,
    fromDirectionStartOpen,
    toDirectionStartOpen,
    fromDirectionEndOpen,
    toDirectionEndOpen,
    fromDirectionStartClose,
    toDirectionStartClose,
    fromDirectionEndClose,
    toDirectionEndClose,
  ]);

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [isOpen]);

  return { isOpen, openMenu, closeMenu, menuRef };
};

export default useAnimatedMenu;
