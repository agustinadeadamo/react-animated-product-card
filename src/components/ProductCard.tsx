import React from 'react';
import { gsap } from 'gsap';

const MyComponent: React.FC = () => {
  const handleClick = () => {
    gsap.to('.box', { duration: 2, x: 100 });
  };

  return (
    <div className="box" onClick={handleClick}>
      Click me to animate
    </div>
  );
};

export default MyComponent;
