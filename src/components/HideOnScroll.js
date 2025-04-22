import React from 'react';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

/**
 * Wrap any component (like AppBar) to hide it on scroll down and show on scroll up.
 */
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({ threshold: 50 });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default HideOnScroll;
