import NavBar from '../Components/NavBar';

function Testimonials() {
  const testimonials = [
    {
      img: "/images/client1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Ananya Sharma",
    },
    {
      img: "/images/client2.png",
      text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Aarav Mehta",
    },
    {
      img: "/images/client3.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Priya Malhotra",
    },
    {
      img: "/images/client4.png",
      text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Meera Desai",
    },
  ];

  return (
    <section className="w-full lg:h-screen sm:h-max bg-primary-dark font-mono">
      <NavBar />
      <div className="flex flex-col w-full items-center justify-center px-4">
        <div className="text-text-primary-dark mt-8 text-4xl font-bold">Testimonials</div>
        <div className="text-text-secondary-dark text-center max-w-2xl mt-4 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mb-5 w-full px-4">
        {testimonials.map((t, index) => (
        <div
          key={index}
          className="bg-primary-dark border border-border-primary rounded-lg p-6 pt-10 text-white relative z-0"
        >
          {/* Quotation mark positioned over card */}
          <div className="absolute -top-4 -left-3 text-6xl text-text-primary-dark z-[1] select-none">“</div>

          <p className="text-text-secondary-dark text-sm mb-6">{t.text}</p>
          <div className="flex items-center space-x-4">
            <img
              src={t.img}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover"
            />
      <span className="text-text-primary-dark font-bold">{t.name}</span>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
