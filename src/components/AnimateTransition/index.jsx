import React from 'react'
import { useSpring, animated } from 'react-spring'
import { easeSinOut } from 'd3-ease'

export default function AnimateTransition({ children }) {
  const animateProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1200, ease: easeSinOut },
  })

  return (
    <animated.div
      style={{
        ...animateProps,
        position: 'fixed',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </animated.div>
  )
}
