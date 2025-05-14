import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/case-study" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Recent Work", href: "/recent-work" },
    { name: "Get in Touch", href: "/contact" },
  ];

  return (
    <nav className="bg-nav-bg text-text-secondary-light px-6 py-4 max-w-[90%] ml-[5%] rounded-b-[8px] font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl text-text-primary-dark font-bold hover:text-text-secondary-light">
          <a href="/">Portfolio</a>
        </div>

        {isMobile ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border px-2 py-1 rounded text-sm"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        ) : (
          <ul className="flex space-x-8 text-lg">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className={`hover:text-white ${
                    location.pathname === item.href ? "text-text-primary-dark" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {isMobile && isOpen && (
        <ul className="mt-4 space-y-2 text-lg">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className={`block hover:text-white ${
                  location.pathname === item.href ? "text-white" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
