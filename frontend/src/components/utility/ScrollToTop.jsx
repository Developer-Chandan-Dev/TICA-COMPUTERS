import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(pathname);
  }, [pathname]); // Scroll to top when the path changes
  
  // console.log(window.ScrollToTop);
  return null;
};

export default ScrollToTop;
