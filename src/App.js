import React from "react";
import { WavyBackground } from "./components/ui/wavy-background";
import { GradualSpacing } from "./components/ui/GradualSpacing"; 
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react"; 


// LOGO CODE FOR THE TIMEBEING
// export const AcmeLogo = () => {
//   return (
//     <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
//       <path
//         clipRule="evenodd"
//         d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
//         fill="currentColor"
//         fillRule="evenodd"
//       />
//     </svg>
//   );
// };

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar shouldHideOnScroll isBordered className="z-10 fixed top-2 left-0 w-full px-2 md:px-2">
        <NavbarBrand>
          <AcmeLogo />
          <Link
            href="#"
            className="font-bold text-[#C1BAA1] hover:text-[#A59A8C] focus:outline-none focus:ring-0"
          >
            Juno
          </Link>
        </NavbarBrand>
        <NavbarContent className="flex justify-center gap-4 w-full ml-20" justify="center">
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="font-sans font-bold text-[#C1BAA1] hover:text-[#A59A8C] focus:outline-none focus:ring-0"
            >
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              aria-current="page"
              href="#"
              className="font-sans font-bold text-[#C1BAA1] hover:text-[#A59A8C] focus:outline-none focus:ring-0"
            >
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="font-sans font-bold text-[#C1BAA1] hover:text-[#A59A8C] focus:outline-none focus:ring-0"
            >
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link
              href="#"
              className="font-sans font-bold text-[#C1BAA1] hover:text-[#A59A8C] focus:outline-none focus:ring-0"
            >
              Login
            </Link>
          </NavbarItem>
          {/* Sign Up */}
          <NavbarItem>
            <Link
              href="#"
              className="font-sans font-bold text-[#C1BAA1] hover:text-[#A59A8C] focus:outline-none focus:ring-0 px-2 py-1 rounded-md border-2 border-[#C1BAA1] hover:bg-[#C1BAA1] hover:text-white transition duration-300 pr-2"
            >
              SignUp
            </Link>
          </NavbarItem>
        </NavbarContent>
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
          className="text-white text-8xl font-extrabold text-custom-yellow drop-shadow-lg transform translate-y-[-90px]"
        />
      </WavyBackground>
    </div>
  );
}

export default App;
