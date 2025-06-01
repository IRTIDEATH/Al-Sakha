"use client"

import { useState, useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

declare global {
  interface Window {
    lastMouseX?: number;
    lastMouseY?: number;
  }
}

interface MagnetTarget {
  element: HTMLElement
  bounds: DOMRect
}


const CursorFollower: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [magnetTarget, setMagnetTarget] = useState<MagnetTarget | null>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const targetX = useMotionValue(0)
  const targetY = useMotionValue(0)
  
  const springX = useSpring(targetX, { 
    stiffness: magnetTarget ? 300 : 150, 
    damping: magnetTarget ? 25 : 15, 
    mass: magnetTarget ? 0.8 : 0.1,
    restDelta: 0.01
  })
  const springY = useSpring(targetY, { 
    stiffness: magnetTarget ? 300 : 150, 
    damping: magnetTarget ? 25 : 15, 
    mass: magnetTarget ? 0.8 : 0.1,
    restDelta: 0.01
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      
      const magneticElements = document.querySelectorAll('[data-magnetic="true"]')
      let foundTarget: MagnetTarget | null = null
      let isInMagneticField = false
      
      for (const element of magneticElements) {
        const htmlElement = element as HTMLElement
        const bounds = htmlElement.getBoundingClientRect()
        const padding = 20
        
        if (
          e.clientX >= bounds.left - padding &&
          e.clientX <= bounds.right + padding &&
          e.clientY >= bounds.top - padding &&
          e.clientY <= bounds.bottom + padding
        ) {
          foundTarget = { element: htmlElement, bounds }
          isInMagneticField = true
          break
        }
      }
      
      if (foundTarget && !magnetTarget) {
        setMagnetTarget(foundTarget)
        
        const centerX = foundTarget.bounds.left + foundTarget.bounds.width / 2
        const centerY = foundTarget.bounds.top + foundTarget.bounds.height / 2
        
        targetX.set(centerX)
        targetY.set(centerY)
        
      } else if (foundTarget && magnetTarget) {
        const centerX = foundTarget.bounds.left + foundTarget.bounds.width / 2
        const centerY = foundTarget.bounds.top + foundTarget.bounds.height / 2
        
        targetX.set(centerX)
        targetY.set(centerY)
        setMagnetTarget(foundTarget)
        
      } else if (!isInMagneticField && magnetTarget) {
        setMagnetTarget(null)
        
        targetX.set(e.clientX)
        targetY.set(e.clientY)
        
      } else if (!magnetTarget) {
        targetX.set(e.clientX)
        targetY.set(e.clientY)
      }
      
      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setMagnetTarget(null)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY, targetX, targetY, magnetTarget, isVisible])

  const getScale = () => {
    if (!magnetTarget) return 1
    const targetSize = Math.max(magnetTarget.bounds.width, magnetTarget.bounds.height)
    return Math.max(1, targetSize / 24)
  }

  return (
    <motion.canvas
      className="hidden lg:flex fixed left-0 top-0 mix-blend-difference bg-white rounded-full pointer-events-none"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: magnetTarget ? `${magnetTarget.bounds.width + 16}px` : "12px",
        height: magnetTarget ? `${magnetTarget.bounds.height + 16}px` : "12px",
      }}
      animate={{
        opacity: isVisible ? (magnetTarget ? 0.9 : 1) : 0,
        scale: isVisible ? 1 : 0,
        width: magnetTarget ? `${magnetTarget.bounds.width + 66}px` : "12px",
        height: magnetTarget ? `${magnetTarget.bounds.height + 66}px` : "12px",
      }}
      transition={{
        opacity: { duration: 0.3, ease: "easeOut" },
        scale: { duration: 0.2, ease: "easeOut" },
        width: { duration: 0.2, ease: "easeOut" },
        height: { duration: 0.2, ease: "easeOut" },
      }}
    />
  );
}

export default CursorFollower;