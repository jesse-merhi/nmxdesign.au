import { animated, useTransition } from '@react-spring/web';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DrawingCirclesSVG from './CircleAnimatedSVG';

interface AnimatedIndicatorProps {
  show: boolean;
  scale: number;
  left: string;
}

const AnimatedIndicator = ({ show, scale, left }: AnimatedIndicatorProps) => {
  const transitions = useTransition(show, {
    from: { opacity: 0, transform: `scale(${scale * 0.95})` },
    enter: { opacity: 1, transform: `scale(${scale})` },
    leave: { opacity: 0, transform: `scale(${scale * 0.95})` },
    config: { tension: 300, friction: 20 },
  });

  return transitions(
    (style, item) =>
      item && (
        <animated.div
          className="absolute pointer-events-none"
          style={{
            ...style,
            top: '-5px',
            left: left,
            width: 130,
            height: 46,
          }}
        >
          <DrawingCirclesSVG />
        </animated.div>
      ),
  );
};

interface NavLinkProps {
  label: string;
  isActive: boolean;
  className?: string;
  onClick?: () => void;
  scale?: number;
  left?: string;
}

export const NavLink = ({
  label,
  isActive,
  className,
  onClick,
  scale = 1,
  left = '-25px',
}: NavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const showIndicator = isActive || isHovered;

  return (
    <Link
      to={`/${label}`}
      className={`text-[#184027] hover:text-gray-600 transition-colors ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <button className="bg-transparent relative py-2 px-4">
        {label}

        <AnimatedIndicator show={showIndicator} scale={scale} left={left} />
      </button>
    </Link>
  );
};
