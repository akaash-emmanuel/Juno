import React, { useEffect, useState } from "react";
import { WavyBackground } from "./components/ui/wavy-background";
import { GradualSpacing } from "./components/ui/GradualSpacing";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Button from './components/Button';  
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);  

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const dropdownStyles = {
    position: "absolute",
    top: "100%",  
    left: "0",
    marginTop: "0.5rem",
    backgroundColor: "white",
    border: "1px solid #d1d5db",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
    borderRadius: "0.375rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    minWidth: "200px",
    zIndex: "100",
  };

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      {/* Navbar with fade */}
      <Navbar
        isBordered
        shouldHideOnScroll
        className={`z-10 fixed top-3 left-0 w-full px-1 md:px-2 fade-navbar ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-50px]"
        }`}
      >
        <div className="flex justify-between w-full items-center">
          {/* juno and pa */}
          <div className="flex items-center relative"> 
            <NavbarBrand>
              <div className="flex items-center gap-1 font-raleway font-[700] text-[#A59A8C] hover:text-[#7C444F] focus:outline-none focus:ring-0 text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eclipse"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a7 7 0 1 0 10 10" />
                </svg>
                <Link
                  color="foreground" 
                  href="#"
                  className="font-raleway font-[700] text-[#A59A8C] hover:text-[#7C444F] focus:outline-none focus:ring-0 text-xs"
                >
                  Juno
                </Link>
                <Link
                  aria-current="page"
                  color="foreground"
                  href="#"
                  className="font-raleway font-[700] text-[#A59A8C] hover:text-[#7C444F] focus:outline-none focus:ring-0 text-xs ml-4 underline"
                  onClick={handleDropdownToggle} 
                >
                  Personalized Apparel
                </Link>
              </div>
            </NavbarBrand>
          </div>
          
          {/* Dropdown under Personalized Apparel */}
          <div
            className={`relative bg-white shadow-lg border mt-2 rounded-md w-48 transition-all duration-300 ${
            isDropdownVisible ? "opacity-50 visible" : "opacity-0 invisible"
            }`}
            style={{
              ...dropdownStyles,  
              top: '100%',  
              left: '75px',   
              marginTop: '0rem',  
              padding: '0.5rem', 
            }}
          >
            <Link
              href="#"
              className="font-raleway font-[800] text-[#7C444F] block px-2 py-1 hover:bg-gray-200 focus:outline-none focus:ring-0 text-xs"
            >
              Tshirts
            </Link>
            <Link
              href="#"
              className="font-raleway font-[800] text-[#7C444F] block px-2 py-1 hover:bg-gray-200 focus:outline-none focus:ring-0 text-xs"
            >
              Polo Tshirts
            </Link>
            <Link
              href="#"
              className="font-raleway font-[800] text-[#7C444F] block px-2 py-1 hover:bg-gray-200 focus:outline-none focus:ring-0 text-xs"
            >
              Hoodies
            </Link>
          </div>

          {/* Other Navbar items */}
          <NavbarContent justify="end" className="flex items-center gap-4">
            <NavbarItem>
              <Link
                color="foreground"
                href="#"
                className="flex items-center gap-2 font-raleway font-[700] text-[#A59A8C] hover:text-[#7C444F] focus:outline-none focus:ring-0 text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                About Us
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#customer-service"
                className="flex items-center gap-2 font-raleway font-[700] text-[#A59A8C] hover:text-[#7C444F] focus:outline-none focus:ring-0 text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"
                >
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
                className="font-raleway font-[700] text-[#7C444F] hover:text-[#7C444F] focus:outline-none focus:ring-0 px-3 py-1 rounded-md border-2 border-[#7C444F] hover:bg-[#7C444F] hover:text-white transition duration-300 flex items-center justify-center gap-1 whitespace-nowrap text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                </svg>
                <span className="ml-1">Sign In</span>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="favorites"
                className="flex items-center gap-2 font-raleway font-[700] text-[#A59A8C] hover:text-[#7C444F] focus:outline-none focus:ring-0 text-xs"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </Link>
          </NavbarItem>
            <NavbarItem>
              <Link
                href="#shoppingcart"
                className="flex items-center gap-2 font-raleway font-[700] text-[#A59A8C] hover:text-[#7C444F] focus:outline-none focus:ring-0 text-xs"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
      </Navbar>

      {/* Wavy Background, Gradual Spacing, Button */}
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
        <Button></Button>
      </WavyBackground>
    </div>
  );
}

export default App;
