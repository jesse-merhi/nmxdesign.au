import { animated, useTrail } from '@react-spring/web';

function Homepage() {
  const trail = useTrail(4, {
    from: { opacity: 0, transform: 'translateY(24px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 280, friction: 25 },
    delay: 180,
  });

  return (
    <div className="relative w-full overflow-hidden px-4 pb-0 pt-4 sm:h-[calc(100dvh-var(--shell-nav-height,64px))] sm:px-24 sm:py-0 md:px-24 lg:px-24">
      <div className="mx-auto flex min-h-[calc(100dvh-var(--shell-nav-height,64px)-1.5rem)] max-w-7xl flex-col items-center justify-start sm:h-full sm:min-h-0 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col text-center sm:w-1/2 sm:justify-center sm:text-left sm:pr-8">
          <animated.div style={trail[0]}>
            <div className="relative mx-auto inline-block w-fit sm:mx-0">
              <img
                src="/Homepage/flower.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute z-10 -left-10 top-1/2 w-10 -translate-y-1/2 sm:-left-16 sm:w-16"
              />
              <img
                src="/Homepage/pencil.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute z-10 -right-10 top-1/2 w-10 -translate-y-1/2 sm:-right-16 sm:w-16"
              />

              <h1 className="relative z-0 font-lindsey text-[3.7rem] font-normal leading-none text-[#184027] sm:text-5xl lg:text-6xl">
                Nancy Gao
              </h1>
            </div>
          </animated.div>

          <animated.div style={trail[1]}>
            <div className="mt-2 space-y-3 sm:mt-4 sm:space-y-5">
              <p
                className="mx-auto max-w-[34rem] rounded-lg bg-[#FFF6ED]/60 text-[0.95rem] leading-[1.55] sm:mx-0 sm:text-base sm:leading-relaxed"
                style={{ boxShadow: '0 0 30px 15px rgba(255, 246, 237, 0.6)' }}
              >
                I design products for complicated environments: enterprise platforms, internal
                tools, and AI-assisted workflows. My work helps teams move faster, make better
                decisions, and reduce manual effort.
              </p>

              <div className="flex flex-col items-center gap-1.5 sm:items-start sm:gap-2">
                <p className="text-xs uppercase tracking-[0.24em] text-[#184027]/70">Worked at</p>
                <div className="flex items-center justify-center gap-4 sm:justify-start sm:gap-6 flex-wrap">
                  <img
                    src="/Homepage/Atlassianlogo.png"
                    alt="Atlassian logo"
                    className="h-10 w-28 object-contain"
                    loading="eager"
                  />
                  <img
                    src="/Homepage/Readytechlogo.png"
                    alt="ReadyTech logo"
                    className="h-10 w-28 object-contain"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </animated.div>
        </div>

        <div className="mt-4 flex w-full justify-center sm:mt-0 sm:w-1/2 sm:pl-8 sm:justify-end">
          <animated.div
            style={trail[2]}
            className="w-full max-w-[19.5rem] sm:max-w-[27rem] lg:max-w-[32rem]"
          >
            <img
              className="max-w-full h-auto"
              src="/mainProfile.svg"
              alt="Portrait photo of Nancy next to a flower."
              loading="eager"
            />
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
