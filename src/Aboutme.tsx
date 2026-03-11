function Aboutme() {
  return (
    <div className="w-full px-4 py-12 sm:px-8 md:px-12 lg:px-24 min-h-[calc(100dvh-var(--shell-nav-height,64px))] flex items-center">
      <div className="mx-auto w-full max-w-7xl space-y-10">
        <div className="text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.24em] text-[#184027]/70">About me</p>
          <h1 className="mt-3 font-pfMarlet text-4xl text-[#184027] sm:text-5xl">How I work</h1>
        </div>

        <div className="w-full grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 flex items-center gap-3 font-pfMarlet text-4xl text-[#184027]">
              Creative
              <img
                src="/Homepage/flower.png"
                alt=""
                aria-hidden="true"
                className="h-[1.2em] w-[1.2em] align-middle sm:h-[1.3em] sm:w-[1.3em]"
              />
            </h2>
            <div className="relative mx-auto w-72 sm:w-80">
              <img
                src="/Homepage/Papertape.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute top-0 -left-4 z-10 w-36 -rotate-12 sm:w-40"
              />
              <div className="h-64 w-full overflow-hidden rounded-md sm:h-72">
                <img
                  src="/Homepage/Creativephoto.png"
                  alt="Sketching ideas on a tablet"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-6 text-[#184027]">
              Exploring innovative ideas and thinks of possibilities & unique solutions
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 flex items-center gap-3 font-pfMarlet text-4xl text-[#184027]">
              Experimenter
              <img
                src="/Homepage/squiggles.png"
                alt=""
                aria-hidden="true"
                className="h-[1.2em] w-[1.2em] align-middle sm:h-[1.3em] sm:w-[1.3em]"
              />
            </h2>
            <div className="relative mx-auto w-72 sm:w-80">
              <img
                src="/Homepage/Papertape.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-4 left-1/2 z-10 w-36 -translate-x-1/2 rotate-2 sm:w-40"
              />
              <div className="mt-4 h-64 w-full overflow-hidden rounded-md sm:h-72">
                <img
                  src="/Homepage/Experimenterphoto.jpg"
                  alt="Planning experiments on paper"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-6 text-[#184027]">Learning and tinkering with new technologies</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 flex items-center gap-3 font-pfMarlet text-4xl text-[#184027]">
              Can-doer
              <img
                src="/Homepage/pencil.png"
                alt=""
                aria-hidden="true"
                className="h-[1.2em] w-[1.2em] align-middle sm:h-[1.3em] sm:w-[1.3em]"
              />
            </h2>
            <div className="relative mx-auto w-72 sm:w-80">
              <img
                src="/Homepage/Papertape.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-4 -right-4 z-10 w-36 rotate-12 sm:w-40"
              />
              <div className="h-64 w-full overflow-hidden rounded-md sm:h-72">
                <img
                  src="/Homepage/Candoerphoto.png"
                  alt="Presenting and facilitating a session"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-6 text-[#184027]">Reliable and executes giving everything a go</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
