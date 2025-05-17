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
            Explore how I’ve tackled complex challenges and delivered scalable solutions across multiple domains including blogging platforms, real-time chat apps, and business revamps.
          </p>

          {/* Case Study 1 */}
          <div className="mt-10 w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6">
            <div className="p-8 flex flex-col items-start max-w-md w-full">
              <div className="text-2xl font-bold mb-2 text-text-primary-light">
                Developing a Blog Platform
              </div>
              <div className="text-sm text-text-secondary-light text-start">
                Built a modern blog platform using MERN stack with Markdown support, user authentication, and an admin dashboard. Enabled easy content creation, post scheduling, and analytics tracking for user engagement.
              </div>
            </div>
            <div className="p-8 rounded-md max-w-md w-full flex justify-center">
              <img
                src="/images/img1.png"
                alt="Blog Platform"
                className="w-fit object-contain"
              />
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="mt-10 w-full flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-10 px-6">
            <div className="p-8 flex flex-col items-start max-w-md w-full">
              <div className="text-2xl font-bold mb-2 text-text-primary-light">
                Real-Time Chat Application
              </div>
              <div className="text-sm text-text-secondary-light text-start">
                Designed and deployed a secure real-time chat application with Socket.IO and Node.js backend. Included group chats, message status indicators, media sharing, and user presence tracking for seamless communication.
              </div>
            </div>
            <div className="p-8 rounded-md max-w-md w-full flex justify-center">
              <img
                src="/images/img2.png"
                alt="Chat App"
                className="w-fit object-contain"
              />
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="mt-10 w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6">
            <div className="p-8 flex flex-col items-start max-w-md w-full">
              <div className="text-2xl font-bold mb-2 text-text-primary-light">
                Redesigning a Small Business Website
              </div>
              <div className="text-sm text-text-secondary-light text-start">
                Revamped a local business’s outdated website into a responsive, SEO-friendly, and user-centric web presence using React and Tailwind. Increased customer engagement by 40% and significantly boosted local visibility.
              </div>
            </div>
            <div className="p-8 rounded-md max-w-md w-full flex justify-center">
              <img
                src="/images/img3.png"
                alt="Business Redesign"
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
