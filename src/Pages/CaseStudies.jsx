import NavBar from "../Components/NavBar";

function CaseStudies() {
  return (
    <>
      <section className="w-full min-h-screen bg-primary-light">
        <NavBar />

        <div className="flex flex-col items-center text-center font-mono px-4 py-10">
          {/* Heading */}
          <h1 className="text-text-primary-light text-4xl sm:text-5xl font-bold mt-4">
            Case Studies
          </h1>

          {/* Subheading */}
          <p className="text-text-secondary-light max-w-3xl mt-4 text-sm sm:text-base">
            Solving user & business problems for the past 15+ years. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Content Grid */}
          <div className="mt-10 w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6">
            {/* Text Card */}
            <div className="p-8 flex flex-col items-start max-w-md w-full">
              <div className="text-2xl font-bold mb-2 text-text-primary-light">Developing a Blog Platform</div>
              <div className="text-sm text-text-secondary-light text-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                eius debitis ad officia dolorum nobis aperiam sit nostrum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                eius debitis ad officia dolorum nobis aperiam sit nostrum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                eius debitis ad officia dolorum nobis aperiam sit nostrum.
              </div>
            </div>

            {/* Image Card */}
            <div className="p-8 rounded-md max-w-md w-full flex justify-center">
              <img
                src="/images/img1.png"
                alt="Case Study"
                className="w-fit object-contain"
              />
            </div>
          </div>

          <div className="mt-10 w-full flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-10 px-6">
            {/* Text Card */}
            <div className="p-8 flex flex-col items-start max-w-md w-full">
              <div className="text-2xl font-bold mb-2 text-text-primary-light">Chat Application</div>
              <div className="text-sm text-text-secondary-light text-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                eius debitis ad officia dolorum nobis aperiam sit nostrum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                eius debitis ad officia dolorum nobis aperiam sit nostrum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                eius debitis ad officia dolorum nobis aperiam sit nostrum.
              </div>
            </div>

            {/* Image Card */}
            <div className="p-8 rounded-md max-w-md w-full flex justify-center">
              <img
                src="/images/img2.png"
                alt="Case Study"
                className="w-fit object-contain"
              />
            </div>
          </div>

          <div className="mt-10 w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6">
            {/* Text Card */}
            <div className="p-8 flex flex-col items-start max-w-md w-full">
              <div className="text-2xl font-bold mb-2 text-text-primary-light">Redesigning a Small Business</div>
              <div className="text-sm text-text-secondary-light text-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                eius debitis ad officia dolorum nobis aperiam sit nostrum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                eius debitis ad officia dolorum nobis aperiam sit nostrum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                eius debitis ad officia dolorum nobis aperiam sit nostrum.
              </div>
            </div>

            {/* Image Card */}
            <div className="p-8 rounded-md max-w-md w-full flex justify-center">
              <img
                src="/images/img3.png"
                alt="Case Study"
                className="w-fit object-contain"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default CaseStudies;
