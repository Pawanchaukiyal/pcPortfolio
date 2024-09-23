import { Html, useProgress } from "@react-three/drei";
import { useMemo } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  // Memoize progress to reduce unnecessary re-renders
  const displayProgress = useMemo(() => progress.toFixed(2), [progress]);

  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {displayProgress}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
