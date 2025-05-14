import NavBar from '../Components/NavBar';

function RecentWork() {
  const works = [
    {
      img: "/images/work1.png",
      title: "Smart Health Tracker ",
      description:
        "Labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      img: "/images/work2.png",
      title: "E-Commerce Platform",
      description:
        "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",
    },
  ];

  return (
    <section className="w-full min-h-screen font-mono bg-primary-light">
      <NavBar />
      <div className="flex flex-col w-full items-center justify-center px-4 text-center">
        <h2 className="mt-8 text-4xl font-bold text-text-primary-light">Recent Work</h2>
        <p className="text-text-secondary-light max-w-2xl mt-4 text-sm sm:text-base">
          Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 mt-10">
        {works.map((work, index) => (
          <div
            key={index}
            className=" border-border-primary rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-6"
          >
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-text-primary-light">{work.title}</h3>
            <p className="text-text-secondary-light text-sm">{work.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentWork;
