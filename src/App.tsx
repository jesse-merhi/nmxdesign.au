import { animated, useTransition } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { Link, useLocation, useOutlet } from 'react-router-dom';
import { NavLink } from './components/Navlink.tsx';

function App() {
  const sections = ['portfolio', 'resume'];
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentOutlet = useOutlet();

  const transitions = useTransition(currentOutlet, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: {
      opacity: 0,
      transform: 'translateY(-10px)',
      position: 'absolute',
      width: '100%',
    },
    key: location.pathname,
  });

  const menuTransition = useTransition(isMenuOpen, {
    from: { transform: 'translateY(-100%)', opacity: 0 },
    enter: { transform: 'translateY(0%)', opacity: 1 },
    leave: { transform: 'translateY(-100%)', opacity: 0 },
    config: { tension: 220, friction: 24 },
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, location]);

  return (
    <div
      className="w-screen h-screen flex flex-col relative"
      style={{
        backgroundColor: '#FFF6ED',
        backgroundImage: 'url(/bg.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '1000px 1000px',
      }}
    >
      <nav className="w-full flex items-center justify-between p-4 pr-8 bg-[#FFF6ED] backdrop-blur-sm sticky top-0 z-20 font-pfMarlet">
        <Link to={'/'} className="z-30">
          <div className="font-pfMarletItalic text-[#AAAADD]">NMX DESIGN</div>
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden text-2xl z-30">
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <div className="hidden sm:flex sm:flex-row sm:items-center sm:space-x-6 gap-4">
          {sections.map((label) => (
            <NavLink key={label} label={label} isActive={location.pathname.includes(label)} />
          ))}
        </div>
      </nav>
      {menuTransition(
        (style, item) =>
          item && (
            <animated.div
              className="sm:hidden fixed inset-0 z-20 flex flex-col items-center justify-center space-y-4 bg-[#FFF6ED] h-screen"
              style={style}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-3xl"
              >
                ✕
              </button>
              <div
                className="flex flex-col items-center space-y-6"
                onClick={(e) => e.stopPropagation()}
              >
                {sections.map((label) => (
                  <NavLink
                    key={label}
                    label={label}
                    isActive={location.pathname.includes(label)}
                    className="text-3xl font-pfMarlet"
                    onClick={() => setIsMenuOpen(false)}
                    left="5px"
                    scale={1.7}
                  />
                ))}
              </div>
            </animated.div>
          ),
      )}

      <main className="w-full flex-grow relative overflow-y-auto">
        {transitions((style, outlet) => (
          <animated.div style={style}>{outlet}</animated.div>
        ))}
      </main>
    </div>
  );
}

export default App;
