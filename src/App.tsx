import { animated, useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { NavLink } from "./components/Navlink.tsx";

function App() {
  const sections = ["portfolio", "resume"];
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuTransition = useTransition(isMenuOpen, {
    from: { transform: "translateY(-100%)", opacity: 0 },
    enter: { transform: "translateY(0%)", opacity: 1 },
    leave: { transform: "translateY(-100%)", opacity: 0 },
    config: { tension: 220, friction: 24 },
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <div className="w-screen h-screen flex flex-col bg-[#FFF6ED] relative">
      <nav className="w-full flex items-center justify-between p-4 bg-[#FFF6ED] sticky top-0 z-20 font-pfMarlet">
        <Link to={"/"} className="z-30">
          <div className="font-pfMarletItalic text-[#AAAADD]">NMX DESIGN</div>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-2xl z-30"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden sm:flex sm:flex-row sm:items-center sm:space-x-6">
          {sections.map((label) => (
            <NavLink
              key={label}
              label={label}
              isActive={location.pathname.slice(1) === label}
            />
          ))}
        </div>
      </nav>
      {menuTransition(
        (style, item) =>
          item && (
            <animated.div
              className="sm:hidden fixed inset-0 z-20 flex flex-col items-center justify-center space-y-4 bg-[#FFF6ED]"
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
                    isActive={location.pathname.slice(1) === label}
                    className="text-3xl font-pfMarlet"
                    onClick={() => setIsMenuOpen(false)}
                    left="5px"
                    scale={1.7}
                  />
                ))}
              </div>
            </animated.div>
          )
      )}

      <main className="w-full flex-grow overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
