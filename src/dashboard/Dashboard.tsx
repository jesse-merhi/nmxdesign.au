import { animated, useTrail } from '@react-spring/web';

// No need for useState, useEffect, or complex data structures.
// The component is much simpler now.
function Dashboard() {
  // We create a single trail for all 3 animated elements.
  // This will run once when the component is mounted by the router.
  const trail = useTrail(3, {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 280, friction: 25 },
    // A small delay helps ensure the parent route transition starts first.
    delay: 200,
  });

  return (
    <>
      {/* Main About Section */}
      <div className="relative w-full flex flex-col items-center justify-center p-4 pt-20 sm:flex-row sm:px-24 md:px-24 lg:px-24 min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-80px)] mb-8 sm:mb-12">
        {/* --- Left Column --- */}
        <div className="flex flex-col text-center sm:w-1/2 sm:text-left sm:pr-8">
          <animated.div style={trail[0]}>
            <div className="relative inline-block w-fit">
              {/* Decorative overlays */}
              <img
                src="/Aboutme/flower.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute z-10 -left-16 sm:-left-16 top-1/2 -translate-y-1/2 w-16 sm:w-16"
              />
              <img
                src="/Aboutme/squiggles.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute z-10 left-1/2 -translate-x-1/2 -top-16 sm:-top-16 w-16 sm:w-16"
              />
              <img
                src="/Aboutme/pencil.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute z-10 -right-16 sm:-right-16 top-1/2 -translate-y-1/2 w-16 sm:w-16"
              />

              <h1 className="relative z-0 font-lindsey font-black text-5xl sm:text-5xl lg:text-6xl text-[#184027]">
                Nancy Mu Xuan
              </h1>
            </div>
            <div className="relative w-full z-0 font-pfMarlet text-xl sm:text-2xl lg:text-3xl text-[#184027]/80 mt-2 sm:mt-4 flex items-center justify-center sm:justify-start gap-2 sm:gap-4 flex-wrap">
              <div className="text-xl  text-[#AAAADD] mb-3 font-pfMarlet">Creative</div>{' '}
              <div className="text-xl  text-[#AAAADD] mb-3 font-pfMarlet">Experimenter</div>{' '}
              <div className="text-xl  text-[#AAAADD] mb-3 font-pfMarlet">Can-doer</div>
            </div>
          </animated.div>

          <animated.div style={trail[1]}>
            <p
              className="font-pfMarlet text-base  leading-relaxed bg-[#FFF6ED]/60 rounded-lg"
              style={{ boxShadow: '0 0 30px 15px rgba(255, 246, 237, 0.6)' }}
            >
              Hi, I'm Nancy Gao, a product-minded builder who loves to design! I thrive in
              ambiguity, turn messy workflows into clear systems, and ship fast while staying
              grounded in customer insight and data. Sydney based and impact driven, I'm at my best
              when I can own a problem end to end, rally a team, and raise the bar on both outcomes
              and how the team works together.
            </p>
          </animated.div>
        </div>

        {/* --- Right Column --- */}
        <div className="mt-8 sm:w-1/2 sm:mt-0 sm:pl-8 flex justify-center">
          <animated.div style={trail[2]}>
            <img
              className="max-w-full h-auto"
              src={'/mainProfile.svg'}
              alt="Portrait photo of Nancy next to a flower."
              loading="eager"
            />
          </animated.div>
        </div>
        {/* Scroll Arrow pinned to bottom of hero */}
        <button
          type="button"
          aria-label="Scroll to traits section"
          onClick={() =>
            document.getElementById('traits-section')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[#AAAADD] text-[#AAAADD] w-10 h-10 items-center justify-center font-pfMarlet hover:bg-[#AAAADD]/10"
        >
          ↓
        </button>
      </div>

      {/* Traits Section */}
      <div
        id="traits-section"
        className="w-full px-4 sm:px-8 md:px-12 lg:px-24 pb-16 min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-80px)] flex items-center"
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Creative */}
          <div className="flex flex-col items-center text-center">
            <h2 className="font-pfMarlet text-4xl text-[#184027] mb-6 flex items-center gap-3">
              Creative
              <img
                src="/Aboutme/flower.png"
                alt=""
                aria-hidden="true"
                className="w-[1.2em] h-[1.2em] sm:w-[1.3em] sm:h-[1.3em] align-middle"
              />
            </h2>
            <div className="relative mx-auto w-72 sm:w-80">
              <img
                src="/Aboutme/Papertape.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute top-0 -left-4 -rotate-12 w-36 sm:w-40"
              />
              <img
                src="/Aboutme/Creativephoto.png"
                alt="Sketching ideas on a tablet"
                className="w-full h-64 sm:h-72 object-cover rounded-md mix-blend-multiply"
                loading="lazy"
              />
            </div>
            <p className="font-pfMarlet text-[#184027] mt-6">
              Exploring innovative ideas and thinks of possibilities & unique solutions
            </p>
          </div>

          {/* Experimenter */}
          <div className="flex flex-col items-center text-center">
            <h2 className="font-pfMarlet text-4xl text-[#184027] mb-6 flex items-center gap-3">
              Experimenter
              <img
                src="/Aboutme/squiggles.png"
                alt=""
                aria-hidden="true"
                className="w-[1.2em] h-[1.2em] sm:w-[1.3em] sm:h-[1.3em] align-middle"
              />
            </h2>
            <div className="relative mx-auto w-72 sm:w-80">
              <img
                src="/Aboutme/Papertape.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-4 left-1/2 -translate-x-1/2 rotate-2 w-36 sm:w-40"
              />
              <img
                src="/Aboutme/Experimenterphoto.png"
                alt="Planning experiments on paper"
                className="w-full h-64 sm:h-72 object-cover rounded-md mix-blend-multiply"
                loading="lazy"
              />
            </div>
            <p className="font-pfMarlet text-[#184027] mt-6">
              Learning and tinkering with new technologies
            </p>
          </div>

          {/* Can-doer */}
          <div className="flex flex-col items-center text-center">
            <h2 className="font-pfMarlet text-4xl text-[#184027] mb-6 flex items-center gap-3">
              Can-doer
              <img
                src="/Aboutme/pencil.png"
                alt=""
                aria-hidden="true"
                className="w-[1.2em] h-[1.2em] sm:w-[1.3em] sm:h-[1.3em] align-middle"
              />
            </h2>
            <div className="relative mx-auto w-72 sm:w-80">
              <img
                src="/Aboutme/Papertape.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-4 -right-4 rotate-12 w-36 sm:w-40"
              />
              <img
                src="/Aboutme/Candoerphoto.png"
                alt="Presenting and facilitating a session"
                className="w-full h-64 sm:h-72 object-cover rounded-md mix-blend-multiply"
                loading="lazy"
              />
            </div>
            <p className="font-pfMarlet text-[#184027] mt-6">
              Reliable and executes giving everything a go
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
