import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1703355685722-2996b01483be?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      ></div>

      {/* Content Container */}
      <div className="relative w-full h-screen flex items-center justify-center z-10 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white sm:text-6xl">
           Exclusive Property Listing <br />
            <span className="text-yellow-400">Coworking Space</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-white opacity-90">
            A collaborative workspace designed for creativity, networking, and
            growth. Discover a space where ideas thrive and work gets done.
          </p>

          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md text-lg font-medium hover:bg-yellow-500"
            >
              Explore Here
            </a>
          </div>
        </div>
      </div>

      {/* Additional Styling (Overlay, etc.) */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-700 to-transparent opacity-80"></div>
    </section>
  );
};

export default HeroSection;
