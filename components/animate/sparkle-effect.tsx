"use client";

import { motion } from "motion/react";
import { memo, useCallback, useEffect, useRef, useState } from "react";

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
    y: 26,
    rotate: Math.random() * 360,
    size: 12,
    opacity: 1,
    duration: 1.5,
    svgIndex: Math.floor(Math.random() * sparkleSvgs.length),
    id,
  };
}

const Sparkle = memo(function Sparkle({
  x,
  y,
  rotate,
  size,
  opacity,
  duration,
  svgIndex,
  id,
  onComplete,
}: SparkleProps & { onComplete: (id: number) => void }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 0,
        rotate,
      }}
      animate={{
        opacity: [0, opacity, 0.4, 0],
        y: -44,
        rotate: rotate + 360,
      }}
      transition={{
        opacity: { duration },
        y: { duration },
        duration,
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
        willChange: "transform, opacity",
      }}
      onAnimationComplete={() => onComplete(id)}
    >
      <img
        src={sparkleSvgs[svgIndex]}
        alt=""
        draggable={false}
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
});

const SparkleGroup = () => {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);
  const sparkleId = useRef(0);
  const componentId = useRef(Math.floor(Math.random() * 1000));

  useEffect(() => {
    const id = componentId.current;

    function tick() {
      sparkleId.current += 1;
      const newSparkle = randomSparkle(id * 1000 + sparkleId.current);
      setSparkles((prev) => {
        const next = [...prev, newSparkle];
        return next.length > 20 ? next.slice(-20) : next;
      });
    }

    let interval: ReturnType<typeof setInterval> | undefined;

    function start() {
      interval = setInterval(tick, 324);
    }

    function stop() {
      clearInterval(interval);
      interval = undefined;
    }

    function onVisibilityChange() {
      if (document.hidden) {
        stop();
        setSparkles([]);
      } else {
        start();
      }
    }

    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const handleComplete = useCallback((id: number) => {
    setSparkles((prev) => prev.filter((s) => s.id !== id));
  }, []);

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
        <Sparkle {...sparkle} key={sparkle.id} onComplete={handleComplete} />
      ))}
    </div>
  );
};

export default SparkleGroup;
