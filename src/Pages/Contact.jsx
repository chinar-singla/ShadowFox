import NavBar from "../Components/NavBar";

function Contact() {
  return (
    <section className="w-full min-h-screen font-mono bg-primary-dark">
      <NavBar />
      <div className="flex flex-col items-center px-4 text-center pt-10">
        <h2 className="text-text-primary-dark text-4xl font-bold">Get In Touch</h2>
        <p className="text-text-secondary-dark max-w-2xl mt-4 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <form className="p-6 sm:p-10 w-full max-w-xl flex flex-col gap-4">
          <div className="flex flex-col text-left">
            <label htmlFor="email" className="text-text-primary-dark mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="h-10 bg-bg-input px-3 rounded"
              placeholder="Please enter your email"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="mobile" className="text-white mb-1">Mobile</label>
            <input
              type="tel"
              id="mobile"
              className="h-10 bg-bg-input px-3 rounded"
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="message" className="text-text-primary-dark mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              className="bg-bg-input px-3 py-2 rounded"
              placeholder="Enter your message"
            />
          </div>

          <button
            type="submit"
            className="bg-button text-text-primary-dark py-2 px-4 rounded hover:bg-button-hover transition duration-200 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
