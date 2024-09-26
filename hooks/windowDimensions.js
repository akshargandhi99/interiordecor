"use client";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    // Check if window is defined
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return { width: 0, height: 0 }; // Provide default values for server-side rendering
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
}
