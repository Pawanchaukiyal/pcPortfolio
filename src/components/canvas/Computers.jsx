import React, { Suspense, useEffect, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "../Loader"; // Custom loading component that displays while the 3D model is loading

// Debounce function to limit how often a function is called
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// This component renders the 3D computer model
const Computers = ({ isMobile }) => {
  // useGLTF hook loads the 3D model located at './desktop_pc/scene.gltf'
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Adds a hemisphere light with a slight intensity */}
      <hemisphereLight intensity={0.15} groundColor="black" />

      {/* Adds a spotlight with shadow casting enabled */}
      <spotLight
        position={[-20, 50, 10]} // Position of the spotlight
        angle={0.12} // Cone angle of the spotlight
        penumbra={1} // Soft edge of the spotlight
        intensity={1} // Brightness of the light
        castShadow // Enables shadow casting for the spotlight
        shadow-mapSize={1024} // Resolution of the shadow map
      />

      {/* Adds a point light with intensity */}
      <pointLight intensity={20} position={1} />

      {/* Renders the loaded 3D model using primitive. 
          Adjusts the model's scale, position, and rotation based on whether it's viewed on mobile or desktop */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75} // Scale model down for mobile
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // Position the model differently for mobile/desktop
        rotation={[-0.01, -0.2, -0.1]} // Slight rotation applied to the model
      />
    </mesh>
  );
};

// This component wraps the 3D scene in a Canvas, with support for responsive mobile rendering
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); // State to track if the user is on a mobile device

    // Memoize the media query handling logic to prevent unnecessary recalculations
    const handleMediaQueryChange = useCallback((event) => {
      setIsMobile(event.matches);
    }, []);

  useEffect(() => {
    // Add a listener for screen size changes
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial state based on the current screen size
    setIsMobile(mediaQuery.matches);

    // Function to update state when screen size changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the media query change listener
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []); // Empty dependency array ensures this effect only runs on mount and unmount

  return (
    // Canvas component from @react-three/fiber is used to render 3D scenes
    <Canvas
      frameloop="demand" // Updates the scene on demand rather than on every frame (improves performance)
      shadows // Enables shadows
      dpr={[1, 2]} // Sets the pixel ratio for rendering on high-DPI screens
      camera={{ position: [20, 3, 5], fov: 25 }} // Sets the camera position and field of view
      gl={{ preserveDrawingBuffer: true }} // Ensures that the buffer is preserved for screenshot purposes
    >
      {/* Suspense is used to display a fallback (CanvasLoader) while the 3D model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls allows the user to rotate the model, but disables zoom */}
        <OrbitControls
          enableZoom={false} // Disables zoom
          maxPolarAngle={Math.PI / 2} // Limits vertical rotation upwards
          minPolarAngle={Math.PI / 2} // Limits vertical rotation downwards
        />
        {/* Renders the Computers component, passing the isMobile prop */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload all assets for smoother experience */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
