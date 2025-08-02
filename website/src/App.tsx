import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
function App() {
  const sections = ["about", "designs", "blog", "guides", "contact"];
  const location = useLocation();

  const [randomStyle, setRandomStyle] = useState({
    top: 0,
    left: 0,
    rotation: 0,
    scale: 1,
  });
  useEffect(() => {
    const maxPositionOffset = 5;
    const maxRotation = 5;
    const minScale = 0.9;
    const maxScale = 1.2;

    const randomTop =
      Math.floor(Math.random() * (maxPositionOffset * 2)) - maxPositionOffset;
    const randomLeft =
      Math.floor(Math.random() * (maxPositionOffset * 2)) - maxPositionOffset;
    const randomRotation =
      Math.floor(Math.random() * (maxRotation * 2)) - maxRotation;
    const randomScale = minScale + Math.random() * (maxScale - minScale);

    setRandomStyle({
      top: randomTop,
      left: randomLeft,
      rotation: randomRotation,
      scale: randomScale,
    });
  }, [location.pathname]);

  return (
    <div className="w-screen h-screen items-center justify-center">
      <nav className="w-full h-[10%] justify-center items-center flex">
        <div className="items-center justify-center flex w-[10%]">
          <Link className="color-black" to={"/"}>
            <img src={"logo.svg"} />
          </Link>
        </div>
        <div className=" items-center justify-center flex w-[80%]">
          {sections.map((label, i) => (
            <Link className="color-black" key={i} to={"/" + label}>
              <button className="bg-transparent relative py-2 px-4">
                {label}
                {location.pathname.slice(1) == label && (
                  <img
                    className="absolute"
                    src={"/circle.svg"}
                    alt="Active link indicator"
                    style={{
                      top: `${randomStyle.top + 8}px`,
                      left: `${randomStyle.left}px`,
                      transform: `rotate(${randomStyle.rotation}deg) scale(${randomStyle.scale})`,
                    }}
                  />
                )}
              </button>
            </Link>
          ))}
        </div>
        <div className=" items-center justify-center flex w-[10%]">menu</div>
      </nav>
      <div className="w-screen h-[90%] items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
