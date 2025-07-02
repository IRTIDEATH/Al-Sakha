"use client"

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const sparkleSvgs = ["/Aks1.svg", "/Aks2.svg", "/Aks3.svg", "/Aks4.svg"];

type SparkleProps = {
  x: number;
  y: number;
  rotate: number;
  size: number;
  opacity: number;
  duration: number;
  svgIndex: number;
  id: number;
};

function randomSparkle(id: number): SparkleProps {
  const area = { width: 90, height: 20 };
  return {
    x: Math.random() * area.width - 8,
    y: Math.random() * area.height - -16,
    rotate: Math.random() * 360,
    size: 12,
    opacity: 1,
    duration: 1,
    svgIndex: Math.floor(Math.random() * sparkleSvgs.length),
    id,
  };
}

export const Sparkle = ({
  x,
  y,
  rotate,
  size,
  opacity,
  duration,
  svgIndex,
  onComplete,
}: SparkleProps & { onComplete: () => void }) => (
  <motion.div
    initial={{
      opacity: 0,
      y: 0,
      scale: 0.7,
      rotate: rotate,
    }}
    animate={{
      opacity: [0, opacity, 0],
      y: -30 - Math.random() * 30,
      // scale: [0.7, 1, 0.5],
      rotate: rotate + 360,
    }}
    transition={{
      opacity: { duration: 1},
      y: { duration: 1,} ,
      duration: duration,
      ease: "easeInOut",
    }}
    style={{
      position: "absolute",
      left: x,
      top: y,
      pointerEvents: "none",
      width: size,
      height: size,
      zIndex: 10,
    }}
    onAnimationComplete={onComplete}
  >
    <img
      src={sparkleSvgs[svgIndex]}
      alt="sparkle"
      style={{ width: "100%", height: "auto" }}
      draggable={false}
    />
  </motion.div>
);

const SparkleGroup = () => {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);
  const sparkleId = useRef(0);

  useEffect(() => {
    // Interval untuk menambah sparkle baru setiap 200ms
    const interval = setInterval(() => {
      sparkleId.current += 1;
      setSparkles((prev) => [
        ...prev,
        randomSparkle(Date.now() + sparkleId.current),
      ]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Hapus sparkle setelah animasi selesai
  const handleComplete = (id: number) => {
    setSparkles((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 90,
        height: 20,
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {sparkles.map((sparkle) => (
        <Sparkle
          {...sparkle}
          key={sparkle.id}
          onComplete={() => handleComplete(sparkle.id)}
        />
      ))}
    </div>
  );
};

export default SparkleGroup;