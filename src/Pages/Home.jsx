import NavBar from "../Components/NavBar";

function Home() {
  return (
    <div className="bg-primary-dark w-full min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 font-mono flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-12 gap-12">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-text-primary-dark font-bold">
              Chinar Singla
            </h1>
            <p className="mt-4 max-w-md text-text-secondary-dark text-sm sm:text-base">
              Passionate full stack developer and B.Tech CSE student with expertise in MERN stack, Java, and Cybersecurity. Committed to solving real-world problems through innovative software solutions.
            </p>
            <button className="p-2 px-6 bg-button hover:bg-button-hover text-white text-lg sm:text-xl mt-6 rounded">
              <a href="https://linkedin.com/in/chinarsingla" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/logo.png"
            alt="Chinar Singla"
            className="rounded-full object-cover w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
