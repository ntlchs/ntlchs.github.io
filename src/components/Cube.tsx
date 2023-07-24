import type React from "react";
import { useEffect, useState, type CSSProperties } from "react";

const Cube: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setRotation({
        x: -(event.clientY - window.innerHeight / 2) / 20,
        y: (event.clientX - window.innerWidth / 2) / 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cubeStyle: CSSProperties = {
    position: "relative",
    width: "200px",
    height: "200px",
    transformStyle: "preserve-3d",
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
  };

  const faceStyle: CSSProperties = {
    position: "absolute",
    width: "200px",
    height: "200px",
    background: "rgba(255, 255, 255, 0.9)",
    border: "1px solid #ccc",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
  };

  const facesTransforms: { [key: string]: string } = {
    front: "translateZ(100px)",
    back: "rotateY(180deg) translateZ(100px)",
    right: "rotateY(90deg) translateZ(100px)",
    left: "rotateY(-90deg) translateZ(100px)",
    top: "rotateX(90deg) translateZ(100px)",
    bottom: "rotateX(-90deg) translateZ(100px)",
  };

  return (
    <div style={cubeStyle}>
      {Object.keys(facesTransforms).map((key) => (
        <div
          key={key}
          style={{
            ...faceStyle,
            transform: facesTransforms[key],
          }}
        />
      ))}
    </div>
  );
};

export default Cube;
