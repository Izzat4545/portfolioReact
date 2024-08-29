import { useEffect, useState } from "react";
import "./App.css";
import LeftSection from "./components/leftSection";
import RightSection from "./components/rightSection";

interface GradientPosition {
  x: number;
  y: number;
}
function App() {
  const [gradientPosition, setGradientPosition] = useState<GradientPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateGradientPosition = (event: MouseEvent) => {
      setGradientPosition({ x: event.clientX, y: event.clientY });
    };

    // Apply radial gradient and background color to the body if the screen width is greater than or equal to 1024px
    if (window.innerWidth >= 1024) {
      document.body.style.background = `radial-gradient(600px at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%) #0f172a`;
      document.body.style.backgroundAttachment = "fixed"; // or "scroll" depending on your preference
    }

    // Add event listener for mousemove
    document.addEventListener("mousemove", updateGradientPosition);

    // Cleanup on component unmount
    return () => {
      // Remove the event listener
      document.removeEventListener("mousemove", updateGradientPosition);

      // Reset styles
      document.body.style.background = "";
      document.body.style.backgroundAttachment = "";
    };
  }, [gradientPosition]);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:py-0 lg:px-24 lg:flex lg:justify-between lg:gap-4 relative">
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default App;
