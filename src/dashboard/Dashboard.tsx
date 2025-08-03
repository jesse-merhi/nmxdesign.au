import { animated, useTrail } from "@react-spring/web";

// No need for useState, useEffect, or complex data structures.
// The component is much simpler now.
function Dashboard() {
  // We create a single trail for all 3 animated elements.
  // This will run once when the component is mounted by the router.
  const trail = useTrail(3, {
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 280, friction: 25 },
    // A small delay helps ensure the parent route transition starts first.
    delay: 200,
  });

  return (
    // This is your original, correct layout structure.
    <div className="w-full flex flex-col items-center justify-center p-4 sm:flex-row sm:p-8 md:p-12 lg:p-16">
      {/* --- Left Column --- */}
      <div className="flex flex-col text-center sm:w-1/2 sm:text-left sm:pr-8">
        <animated.div style={trail[0]}>
          <h1 className="font-lindsey font-black text-5xl sm:text-5xl lg:text-6xl">
            Nancy Mu Xuan
          </h1>
        </animated.div>

        <animated.div style={trail[1]}>
          <p className="font-pfMarlet text-base mt-4 sm:mt-8 md:mt-12 lg:mt-16 leading-relaxed">
            Bacon ipsum dolor amet beef ribs beef jerky turducken, meatball
            brisket chislic burgdoggen tongue bacon spare ribs pancetta strip
            steak flank kevin. Sirloin prosciutto pork ground round shankle
            picanha pancetta turkey meatloaf landjaeger doner shank kevin. Strip
            steak drumstick t-bone, meatball short ribs beef pork chop fatback
            brisket jerky venison. Andouille pork loin fatback swine. Tri-tip
            chicken pork chop shoulder spare ribs, short loin sausage chuck
            venison andouille meatball buffalo cow.
          </p>
        </animated.div>
      </div>

      {/* --- Right Column --- */}
      <div className="mt-8 sm:w-1/2 sm:mt-0 sm:pl-8 flex justify-center">
        <animated.div style={trail[2]}>
          <img
            className="max-w-full h-auto"
            src={"/mainProfile.svg"}
            alt="Portrait photo of Nancy next to a flower."
          />
        </animated.div>
      </div>
    </div>
  );
}

export default Dashboard;
