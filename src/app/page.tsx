import {Geist_Pixel, Pixelify_Sans } from "next/font/google";

const geistPixel = Geist_Pixel({
  subsets: ["latin"],
  variable: "--font-geist-pixel"
})

//Note: See design. Likely my landing page with the light descriptor.
export default function Page() {
  return (
    <>
      {/* TODO: REMOVE BORDERS */}
      <div className="flex flex-col flex-1 m-8 p-20 gap-5 max-h-120  border-1 border-green-500">
        <div className = "text-2xl">Hello, I'm</div>
        <div className = {`text-6xl ${geistPixel.className} tracking-wide`}>Bryan Herrera_</div>
        <div className = "text-xl">Software Engineer who builds scalable systems and delightful user experiences.</div>
        <div>View my work (container here) </div>
      </div>
      <div className="flex flex-col items-center flex-1 m-8 max-h-120 border-1 border-green-500">
        <div>RIGHT CONTENT looks like a small desktop window on this side.</div>
      </div>
    </>
  );
}
