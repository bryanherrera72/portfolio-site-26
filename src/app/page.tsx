import { Geist_Pixel } from "next/font/google";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import Image from 'next/image'
import PlaceHolder from '../../public/placeholder.png' // Might need to fix this. I want a static import I just don't like the path.

const geistPixel = Geist_Pixel({
  subsets: ["latin"],
  variable: "--font-geist-pixel",
});

//Note: See design. Likely my landing page with the light descriptor.
export default function Page() {
  return (
    <>
      {/* TOP CONTAINER */}
      <div className="flex flex-row min-h-full">
        {/* PRIMARY TEXT SECTION */}
        <div className="flex flex-col flex-1 m-8 p-15 gap-5 max-h-120  ">
          <div className="text-highlight-font text-2xl">Hello, I'm</div>
          <div className={`text-6xl ${geistPixel.className} tracking-wide`}>
            Bryan Herrera_
          </div>
          <div className="text-xl text-highlight-font">
            Software Engineer who builds scalable systems and delightful user
            experiences.
          </div>
          <div className="text-highlight-font">
            View my work (container here){">"}
          </div>
        </div>

        {/* SUMMARY DETAIL WINDOW */}
        <div className="flex flex-col justify-between flex-1 m-8 max-h-120 border border-primary-green rounded-sm">
          {/* Summary Detail header */}
          <div className="flex justify-between items-center pl-3 pr-3 pt-1 pb-1 border-b border-b-primary-green">
            {" "}
            <span className="flex gap-2">
              <span className="rounded-xl w-3 h-3 bg-red-400"></span>
              <span className="rounded-xl w-3 h-3 bg-yellow-400"></span>
              <span className="rounded-xl w-3 h-3 bg-green-400"></span>
            </span>
            <span>snapshot-info</span>
          </div>
          {/* Summary detail window details */}
          <div className="flex flex-row p-5 gap-2 text-l">
            <div className="flex flex-col gap-1">
              <span>{"> "}location: </span>
              <span>{"> "}experience: </span>
              <span>{"> "}status: </span>
              <span>{"> "}focus: </span>
            </div>
            <div className="flex flex-col gap-1">
              <span>los angeles, ca</span>
              <span>5+ years</span>
              <span>open to work</span>
              <span>full stack web development.</span>
            </div>
          </div>
          {/* Bottom quick links */}
          <div className="flex flex-row justify-start gap-4 p-5 border-t border-t-primary-green">
            {" "}
            <span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={24}
                  className="hover:text-gray-600 transition-colors"
                />
              </a>
            </span>
            <span>
              <a
                href="bryan.herrera72@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope
                  size={24}
                  className="hover:text-gray-600 transition-colors"
                />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/bryanherreradev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={24}
                  className="hover:text-gray-600 transition-colors"
                />
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* DETAILED ABOUT ME SECTION */}
      <span className="flex flex-col">
        <div className="text-highlight-font text-3xl">About Me_</div>
        <div className="flex flex-row min-h-full">
          
          {/* My picture */}
          <div className="flex flex-col flex-1 items-center m-8 p-15 gap-5 border"><Image className="w-xl" src={PlaceHolder} alt = "My Pic"/></div>

          {/* About me description */}
          <div className = "flex-1 m-8 border">About me content goes here.</div>
        </div>
      </span>
    </>
  );
}
