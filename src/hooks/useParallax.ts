import { useEffect } from "react";

const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const layers = document.querySelectorAll(".parallax-layer");
      const scrollTop = window.pageYOffset;
      layers.forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const yPos = -(scrollTop * speed);
        layer.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useParallax;
