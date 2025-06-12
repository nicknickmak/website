import "./BackgroundAnimation.scss";
import { useEffect, useRef } from "react";

/**
 * Renders the background animation for the application.
 * @returns {JSX.Element} The background animation component.
 */
export default function BackgroundAnimation() {
  // Reference to the sphere element
  const sphereRef = useRef(null);
  const numDots = 300;
  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;
    // Clear previous dots if any
    sphere.innerHTML = "";
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";

      const phi = Math.acos(-1 + (2 * i) / numDots);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = 120 * Math.cos(theta) * Math.sin(phi);
      const y = 120 * Math.sin(theta) * Math.sin(phi);
      const z = 120 * Math.cos(phi);

      dot.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      sphere.appendChild(dot);
    }
  }, []);
  return (
    <>
      <div className="scene background">
        <div className="sphere" ref={sphereRef}></div>
      </div>
      {/* <div className="backgroundLogo"></div> */}
    </>
  );
}
