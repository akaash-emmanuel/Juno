import React, { useEffect, useState } from "react";
import { WavyBackground } from "./components/ui/wavy-background";
import { GradualSpacing } from "./components/ui/GradualSpacing";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* navbar with fade */}
      <Navbar
        isBordered
        shouldHideOnScroll
        className={`z-10 fixed top-3 left-0 w-full px-1 md:px-2 fade-navbar ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-50px]"}`}
      >
        <div className="flex justify-between w-full items-center">
          {/* juno and pa */}
          <div className="flex items-center">
            <NavbarBrand>
              <div className="flex items-center gap-1 font-raleway font-[700] text-[#C1BAA1] hover:text-[#A59A8C] focus:outline-none focus:ring-0 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eclipse">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a7 7 0 1 0 10 10" />
                </svg>
                <Link
                  color="foreground"
                  href="#"
                  className="font-raleway font-[700] text-[#C1BAA1] hover:text-[#A59A8C] focus:outline-none focus:ring-0 text-xs"
                >
                  Juno
                </Link>
                <Link
                  color="foreground"
                  href="#"
                  className="font-raleway font-[700] text-[#C1BAA1] hover:text-[#A59A8C] focus:outline-none focus:ring-0 text-xs ml-4 underline"
                >
                  Personalized Apparel
                </Link>
              </div>
            </NavbarBrand>
          </div>

          {/* Other Navbar items */}
          <NavbarContent justify="end" className="flex items-center gap-4">
            <NavbarItem>
              <Link
                color="foreground"
                href="#"
                className="font-raleway font-[700] text-[#C1BAA1] hover:text-[#A59A8C] focus:outline-none focus:ring-0 text-xs"
              >
                About Us
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#customer-service"
                className="flex items-center gap-2 font-raleway font-[700] text-[#C1BAA1] hover:text-[#A59A8C] focus:outline-none focus:ring-0 text-xs"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                  <path d="M14.05 6A5 5 0 0 1 18 10" />
                </svg>
                <span>Customer Service</span>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#"
                className="font-raleway font-[700] text-[#C1BAA1] hover:text-[#A59A8C] focus:outline-none focus:ring-0 px-3 py-1 rounded-md border-2 border-[#C1BAA1] hover:bg-[#C1BAA1] hover:text-white transition duration-300 flex items-center justify-center gap-1 whitespace-nowrap text-xs"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                </svg>
                <span className="ml-1">Sign In</span>
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
      </Navbar>

      {/* Wavy Background and Gradual Spacing */}
      <WavyBackground
        colors={["#F39E60", "#7C444F", "#D9DFC6", "#C84C05", "#E16A54"]}
        blur={3}
        speed="slow"
        waveOpacity={0.1}
        className="relative"
      >
        <GradualSpacing
          text="Juno"
          duration={1}
          delayMultiple={0.2}
          className="text-white text-9xl font-raleway font-[700] text-custom-yellow drop-shadow-lg transform translate-y-[-90px]"
        />
      </WavyBackground>
    </div>
  );
}

export default App;
