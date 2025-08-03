import { animated, useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";

// An array of the items we want to animate in the text column
const textItems = [
  {
    key: "h1",
    component: (
      <h1 className="font-lindsey font-black text-5xl sm:text-5xl lg:text-6xl">
        Nancy Mu Xuan
      </h1>
    ),
  },
  {
    key: "p",
    component: (
      <p className="font-pfMarlet text-base mt-4 sm:mt-8 md:mt-12 lg:mt-16 leading-relaxed">
        Bacon ipsum dolor amet beef ribs beef jerky turducken, meatball brisket
        chislic burgdoggen tongue bacon spare ribs pancetta strip steak flank
        kevin. Sirloin prosciutto pork ground round shankle picanha pancetta
        turkey meatloaf landjaeger doner shank kevin. Strip steak drumstick
        t-bone, meatball short ribs beef pork chop fatback brisket jerky
        venison. Andouille pork loin fatback swine. Tri-tip chicken pork chop
        shoulder spare ribs, short loin sausage chuck venison andouille meatball
        buffalo cow.
      </p>
    ),
  },
];

function Dashboard() {
  // State to control the visibility and trigger animations
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after the component mounts
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Transition for the text elements (h1 and p)
  const textTransitions = useTransition(show ? textItems : [], {
    from: { opacity: 0, transform: "translateY(30px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(20px)" },
    config: { mass: 1, tension: 280, friction: 25 },
    trail: 200, // Stagger the animations
    keys: (item) => item.key,
  });

  // A separate transition for the image
  const imageTransition = useTransition(show, {
    from: { opacity: 0, transform: "scale(0.9)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
    config: { mass: 1, tension: 280, friction: 25 },
    delay: 400, // Delay to let the text start animating first
  });

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 sm:flex-row sm:p-8 md:p-12 lg:p-16">
      <div className="flex flex-col text-center sm:w-1/2 sm:text-left sm:pr-8">
        {textTransitions((style, item) => (
          <animated.div style={style}>{item.component}</animated.div>
        ))}
      </div>

      <div className="mt-8 sm:w-1/2 sm:mt-0 sm:pl-8 flex justify-center">
        {imageTransition(
          (style, item) =>
            item && (
              <animated.div style={style}>
                <img
                  className="max-w-full h-auto"
                  src={"/mainProfile.svg"}
                  alt="Portrait photo of Nancy next to a flower."
                />
              </animated.div>
            )
        )}
      </div>
    </div>
  );
}

export default Dashboard;
