// "use client";

import classNames from "@/functions/classNames";
import useOnClickOutside from "@/functions/customHooks/useOnClickOutside";
import { useEffect, useRef, useState } from "react";

const MobileMenu: React.FC<any> = ({ className, openClassName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => {
    if (isMenuOpen) setIsMenuOpen(!isMenuOpen);
  });

  return (
    <div
      ref={menuRef}
      className={classNames(className, isMenuOpen && openClassName)}
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      <span />
    </div>
  );
};

export default MobileMenu;
