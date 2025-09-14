'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

interface SmoothScrollingProps {
  children?: React.ReactNode
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical', // vertical, horizontal
      gestureOrientation: 'vertical', // vertical, horizontal, both
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // Add lenis class to html element
    document.documentElement.classList.add('lenis')

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Clean up on component unmount
    return () => {
      lenis.destroy()
      document.documentElement.classList.remove('lenis')
    }
  }, [])

  return children || null
}