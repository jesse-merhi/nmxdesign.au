import { animated, useTrail } from "@react-spring/web";

function Dashboard() {
  const trail = useTrail(3, {
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 280, friction: 25 },
    delay: 200,
  });

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 sm:flex-row sm:p-8 md:p-12 lg:p-16">
      <div className="flex flex-col text-center sm:w-1/2 sm:text-left sm:pr-8">
        <animated.h1
          style={trail[0]}
          className="font-lindsey font-black text-5xl sm:text-5xl lg:text-6xl"
        >
          Nancy Mu Xuan
        </animated.h1>
        <animated.p
          style={trail[1]}
          className="font-pfMarlet text-base mt-4 sm:mt-8 md:mt-12 lg:mt-16 leading-relaxed"
        >
          Bacon ipsum dolor amet beef ribs beef jerky turducken, meatball
          brisket chislic burgdoggen tongue bacon spare ribs pancetta strip
          steak flank kevin. Sirloin prosciutto pork ground round shankle
          picanha pancetta turkey meatloaf landjaeger doner shank kevin. Strip
          steak drumstick t-bone, meatball short ribs beef pork chop fatback
          brisket jerky venison. Andouille pork loin fatback swine. Tri-tip
          chicken pork chop shoulder spare ribs, short loin sausage chuck
          venison andouille meatball buffalo cow.
        </animated.p>
      </div>
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
